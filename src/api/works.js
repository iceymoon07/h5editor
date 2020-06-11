import fetch from "../utils/fetch.js";

export const getWorkById = (id) => fetch.get(`works/${id}`)

export const createWork = (workData) => fetch.post('works', workData)

export const updateWork = (id, workData) => fetch.put(`works/${id}`, workData)

export const deleteWork = (id) => fetch.delete(`works/${id}`)

export const getAllWorks = () => fetch.get('works')