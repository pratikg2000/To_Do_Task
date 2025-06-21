// src/services/authService.js
import axios from 'axios'; // Assuming you are using axios for HTTP requests

// const API_BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

const authService = {
  async login(email, password) {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  // You can add other authentication-related API calls here (e.g., signup)
};

export default authService;
