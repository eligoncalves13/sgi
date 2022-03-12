import http from "../api/data";

const getAll = () => {
  return http.get("/product_list");
};
const get = (id) => {
  return http.get(`/product_list/${id}`);
};
const create = (data) => {
  return http.post("/product_list", data);
};
const update = (id, data) => {
  return http.put(`/product_list/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/product_list/${id}`);
};
const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default ProductService;