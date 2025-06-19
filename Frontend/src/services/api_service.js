import axios from 'axios';

// Base URL for your friend's Spring Boot backend
const BASE_URL = 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Queue API endpoints
export const queueAPI = {
  // Join queue - connects to your friend's POST /api/queue/join
  joinQueue: (userData) => {
    return api.post('/queue/join', userData);
  },

  // Get status - connects to your friend's GET /api/queue/status/{ticketId}
  getStatus: (ticketId) => {
    return api.get(`/queue/status/${ticketId}`);
  },

  // Get all queue data - connects to your friend's GET /api/queue/all
  getAllQueue: () => {
    return api.get('/queue/all');
  }
};

// Admin API endpoints
export const adminAPI = {
  // Start counter - connects to your friend's POST /api/admin/start-counter
  startCounter: () => {
    return api.post('/admin/start-counter');
  },

  // Stop counter - connects to your friend's POST /api/admin/stop-counter
  stopCounter: () => {
    return api.post('/admin/stop-counter');
  },

  // Reset queue - connects to your friend's POST /api/admin/reset-queue
  resetQueue: () => {
    return api.post('/admin/reset-queue');
  },

  // Get dashboard data - connects to your friend's GET /api/admin/dashboard
  getDashboard: () => {
    return api.get('/admin/dashboard');
  }
};

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;