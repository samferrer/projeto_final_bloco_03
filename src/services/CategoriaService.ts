import axios from "axios"
import type Categoria from "../models/Categoria"

const api = axios.create({
    baseURL: "http://localhost:4000"
})

export async function buscarTodasCategorias(): Promise<Categoria[]> {
    const resposta = await api.get("/categoria")
    return resposta.data
}

export async function buscarCategoriaPorId(id: string): Promise<Categoria> {
    const resposta = await api.get(`/categoria/${id}`)
    return resposta.data
}

export async function cadastrarCategoria(categoria: Categoria): Promise<Categoria> {
    const resposta = await api.post("/categoria", categoria)
    return resposta.data
}

export async function atualizarCategoria(id: string, categoria: Categoria): Promise<Categoria> {
    const resposta = await api.put(`/categoria/${id}`, categoria)
    return resposta.data
}

export async function deletarCategoria(id: string): Promise<void> {
    await api.delete(`/categoria/${id}`)
}