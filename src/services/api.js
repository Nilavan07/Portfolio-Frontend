import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor to handle image URLs
api.interceptors.response.use(response => {
  // Transform any imagePath to full URLs in the response data
  if (response.data && Array.isArray(response.data)) {
    response.data = response.data.map(item => ({
      ...item,
      imageUrl: item.imagePath ? `${API_BASE_URL}${item.imagePath}` : null
    }));
  } else if (response.data && response.data.imagePath) {
    response.data.imageUrl = `${API_BASE_URL}${response.data.imagePath}`;
  }
  return response;
}, error => {
  return Promise.reject(error);
});

export const fetchPortfolioData = async () => {
  try {
    const [projectsRes, skillsRes] = await Promise.all([
      api.get('/api/projects'),
      api.get('/api/skills')
    ]);
    return {
      projects: projectsRes.data,
      skills: skillsRes.data
    };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(error.response?.data?.error || 'Failed to fetch portfolio data');
  }
};

// Additional API functions
export const getProject = async (id) => {
  try {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(error.response?.data?.error || 'Failed to fetch project');
  }
};