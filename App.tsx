import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EventsListPage from './pages/EventsListPage';
import EventDetailPage from './pages/EventDetailPage';
import BoycottPage from './pages/BoycottPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import EducationalPostsListPage from './pages/EducationalPostsListPage';
import EducationalPostDetailPage from './pages/EducationalPostDetailPage';
import WhoAreWePage from './pages/WhoAreWePage';
import DonationPage from './pages/DonationPage';
import BlogsListPage from './pages/BlogsListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import YourRolePage from './pages/YourRolePage';

ReactGA.initialize("G-0WQ1H6QFZT");
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsListPage />} />
        <Route path="events/:eventId" element={<EventDetailPage />} />
        <Route path="boycott" element={<BoycottPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="educational-posts" element={<EducationalPostsListPage />} />
        <Route path="educational-posts/:postId" element={<EducationalPostDetailPage />} />
        <Route path="who-are-we" element={<WhoAreWePage />} />
        <Route path="blogs" element={<BlogsListPage />} />
        <Route path="blogs/:blogId" element={<BlogDetailPage />} />
        <Route path="donation" element={<DonationPage />} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="your-role" element={<YourRolePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;