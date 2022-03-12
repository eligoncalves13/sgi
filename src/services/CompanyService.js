import http from "../api/data";

const getAll = () => {
  return http.get("/company_list");
};
const get = (id) => {
  return http.get(`/company_list/${id}`);
};
const create = (data) => {
  return http.post("/company_list", data);
};
const update = (id, data) => {
  return http.put(`/company_list/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/company_list/${id}`);
};
const CompanyService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default CompanyService;