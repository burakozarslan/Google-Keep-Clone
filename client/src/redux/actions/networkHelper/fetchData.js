import axios from "./axios";

export const fetchData = async (collection) => {
  const { data } = await axios.get(`/${collection}`);

  return data;
};

export const postData = async (collection, body) => {
  const { data } = await axios.post(`/${collection}`, body);

  return data;
};

export const updateData = async (collection, body, id) => {
  const { data } = await axios.put(`/${collection}/${id}`, body);

  return data;
};

export const deleteData = async (collection, id) => {
  const { data } = await axios.delete(`/${collection}/${id}`);

  return data;
};
