import axios from "axios";

const baseUrl = "http://localhost:3000/api/inventory";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};
