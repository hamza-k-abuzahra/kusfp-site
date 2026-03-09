import React, { useState, useEffect } from 'react';
import type { BoycottItem } from '../types';
import PageSection from './PageSection';
import BoycottDetailDialog from './BoycottDetailDialog';
import { API_ENDPOINTS } from '../config'; // Import from config

interface BoycottSectionProps {
  items: BoycottItem[];
}
const CATEGORY_COLORS: Record<string, string> = {
  food: 'bg-orange-100 text-orange-800',
  technology: 'bg-blue-100 text-blue-800',
  clothing: 'bg-purple-100 text-purple-800',
  finance: 'bg-green-100 text-green-800',
  entertainment: 'bg-pink-100 text-pink-800',
  default: 'bg-gray-100 text-gray-800'
};
const BoycottSection: React.FC<BoycottSectionProps> = ({ items: propItems }) => {
  const [selectedItem, setSelectedItem] = useState<BoycottItem | null>(null);
  const [items, setItems] = useState<BoycottItem[]>(propItems);
  const [loading, setLoading] = useState(!items.length);

  useEffect(() => {
    const fetchPosts = async () => {
      // This URL points to YOUR backend, not Google's.
      try{
        const response = await fetch(API_ENDPOINTS.BOYCOTT_LIST);
        const data = await response.json();
        setItems(data);

      } catch (error) {
        console.error('Failed to fetch boycott items:', error);
      } finally {
        setLoading(false);
      }
      // console.log(items);
    };  
    fetchPosts();
  }, []);
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  const handleOpenDialog = (item: BoycottItem) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  const getCategoryColor = (category: string) => {
    return CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.default;
  };
  if (loading) {
    return (
      <PageSection title="Boycott List">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-[var(--text-muted)]">Loading boycott items...</p>
        </div>
      </PageSection>
    );
  }
  return (
    <>
      <PageSection title="Boycott List">
        <p className="text-center text-lg text-[var(--text-muted)] mb-12 max-w-3xl mx-auto">
          We advocate for conscious consumerism. This list highlights companies that do not align with our values, based on publicly available data and reports. We encourage you to do your own research and make informed decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <div 
              key={item.id} 
              className="bg-[var(--background-card)] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center p-6 space-x-6 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleOpenDialog(item)}
              onKeyPress={(e) => e.key === 'Enter' && handleOpenDialog(item)}
              role="button"
              tabIndex={0}
            >
              <div className="flex-shrink-0">
                <img className="h-24 w-24 rounded-full object-cover border-4 border-[var(--border-primary)]" src={item.logoUrl} alt={`${item.title} logo`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-1 text-[var(--text-muted)]">{item.reason}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-[var(--border-primary)]">
                <div className="flex flex-wrap gap-2">
                  {item.categories?.map((category, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
      
      {selectedItem && (
        <BoycottDetailDialog item={selectedItem} onClose={handleCloseDialog} />
      )}
    </>
  );
};

export default BoycottSection;