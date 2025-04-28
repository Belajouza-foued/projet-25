import http from "../http-api";

class ProduitDataService {
  getAll() {
    return http.get("/produits");
  }

  get(id) {
    return http.get(`/produits/${id}`);
  }

  create(data) {
    return http.post("/produits", data);
  }

  findByTitle(name) {
    return http.get(`/produits?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/produits/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/produits/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/produits`);
  }
}
export default new ProduitDataService();