// API Base URLs for different environments
const API_BASE_URLS = {
  development: process.env.REACT_APP_API_URL || 'http://localhost:5000',
//   staging: process.env.REACT_APP_API_URL || 'https://staging-api.kusfp.org',
//   production: process.env.REACT_APP_API_URL || 'https://api.kusfp.org'
};

// Get current environment (default to development if not set)
const getEnvironment = () => {
  return process.env.REACT_APP_ENV || 'development';
};

// Get base API URL for current environment
export const API_BASE = API_BASE_URLS[getEnvironment()];

// API endpoints
export const API_ENDPOINTS = {
  EVENTS: `${API_BASE}/api/events`,
  BLOG_POSTS: `${API_BASE}/api/blog-posts`,
  NEWS: `${API_BASE}/api/news`,
  CONTACT: `${API_BASE}/api/contact`,
  BOYCOTT_LIST: `${API_BASE}/api/boycott-items`,
  // Add more endpoints as needed
};

// Default configuration
export default {
  API_BASE,
  ENDPOINTS: API_ENDPOINTS,
  ENV: getEnvironment(),
  // Add other config values as needed
};