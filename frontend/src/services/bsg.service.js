import { axiosDefault } from "../config/axios.utility";

export const getAllCollaborators = async () => {
  try {
    return await axiosDefault.get("get-collaborators");
  } catch (error) {
    throw new Error(error);
  }
};

export const getCollaboratorById = async (id) => {
  try {
    return await axiosDefault.get(`get-collaborator/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const postByIdCollaborator = async (data) => {
  try {
    return await axiosDefault.post("create-collaborator", data);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateByIdCollaborator = async (id, data) => {
  try {
    return await axiosDefault.put(`update-collaborator/${id}`, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteByIdCollaborator = async (id) => {
  try {
    return await axiosDefault.delete(`delete-collaborator/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllContracts = async () => {
  try {
    return await axiosDefault.get("get-contracts");
  } catch (error) {
    throw new Error(error);
  }
};

export const getContractById = async (id) => {
  try {
    return await axiosDefault.get(`get-contract/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const createContract = async (data) => {
  try {
    return await axiosDefault.post("create-contract", data);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateByIdContract = async (id, data) => {
  try {
    return await axiosDefault.put(`update-contract/${id}`, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteByIdContract = async (id) => {
  try {
    return await axiosDefault.delete(`delete-contract/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};
