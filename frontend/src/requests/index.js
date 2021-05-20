import api from "../services/api";

export const fetchUsers = () => {
  return api.get("/users");
};

export const fetchUser = (id) => {
  return api.get(`/user/${id}`);
};

export const fetchUsersPets = (id) => {
  return api.get(`/user/${id}/pets`);
};

export const createUsers = (data) => {
  return api.post("/users", data);
};

export const fetchPets = () => {
  return api.get("/pets");
};

export const fetchPet = (id) => {
  return api.get(`/pet/${id}`);
};

export const createPetByUser = (userId, data) => {
  return api.post(`/user/${userId}/pets`, data);
};

export const updatePet = (petId, data) => {
  return api.put(`/pet/${petId}`, data);
};

export const deletePet = (petId) => {
  return api.delete(`/pet/${petId}`);
};

export const fetchRaces = () => {
  return api.get(`/races`);
};

export const fetchRacesByType = (type) => {
  return api.get(`/races/${type}`);
};
