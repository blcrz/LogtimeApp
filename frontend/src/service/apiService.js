import axios from "axios";

const apiClient = {
  async getProjects(id) {
    const response = await axios.get(`/projects-by-user/${id}`,{ headers: {"Access-Control-Allow-Origin": "*"}});
    return response.data;
  },

  async getTasks(id) {
    const response = await axios.get(`/tasks/${id}`);
    return response.data;
  },

  async createLogtime(data) {
    const response = await axios.post('/logtime', data);
    return response.data;
  },

  async getUsers() {
    const response = await axios.get('/users');
    return response.data;
  },

};

export default apiClient;
