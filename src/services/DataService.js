import http from "../api/data";

const getAll = () => {
  return http.get("/company");
};
const get = (id) => {
  return http.get(`/company/${id}`);
};
const create = (data) => {
  return http.post("/company", data);
};
const update = (id, data) => {
  return http.put(`/company/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/company/${id}`);
};
const DataService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default DataService;