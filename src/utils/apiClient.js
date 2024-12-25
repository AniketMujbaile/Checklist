const axios = require('axios');

class ApiClient {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async getApplicationById(id) {
    try {
      console.log(`Attempting to fetch from: ${this.baseUrl}/applications/getApplicationById/${id}`);
      const response = await axios.get(`${this.baseUrl}/applications/getApplicationById/${id}`);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      if (error.response) {
        console.error('Error Response:', error.response.data);
        console.error('Error Status:', error.response.status);
      }
      throw new Error(`Failed to fetch application: ${error.message}`);
    }
  }
}

module.exports = new ApiClient();

