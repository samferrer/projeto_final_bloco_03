import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import {
    buscarCategoriaPorId,
    deletarCategoria
} from "../../../services/CategoriaService"

function DeletarCategoria() {

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [categoria, setCategoria] = useState<Categoria>({
        nome: "",
        descricao: ""
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarPorId(id: string) {
        try {
            const resposta = await buscarCategoriaPorId(id)
            setCategoria(resposta)
        } catch (error) {
            alert("Erro ao buscar categoria.")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletar() {
        if (id === undefined) {
            alert("Categoria não encontrada.")
            return
        }

        setIsLoading(true)

        try {
            await deletarCategoria(id)
            alert("Categoria deletada com sucesso!")
            navigate("/categorias")
        } catch (error) {
            alert("Erro ao deletar categoria.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="container w-1/3 mx-auto">
                <h1 className="text-4xl text-center my-4 font-bold text-red-700">
                    Deletar Categoria
                </h1>

                <p className="text-center font-semibold mb-4">
                    Você tem certeza de que deseja apagar a categoria abaixo?
                </p>

                <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                    <header className="py-2 px-6 bg-red-700 text-white font-bold text-2xl">
                        Categoria
                    </header>

                    <div className="p-4 flex flex-col gap-3">
                        <p className="text-xl">
                            <span className="font-bold">Nome:</span> {categoria.nome}
                        </p>

                        <p className="text-xl">
                            <span className="font-bold">Descrição:</span> {categoria.descricao}
                        </p>
                    </div>

                    <div className="flex">
                        <Link
                            to="/categorias"
                            className="w-full text-white bg-slate-500 hover:bg-slate-700 flex items-center justify-center py-2"
                        >
                            Não
                        </Link>

                        <button
                            onClick={deletar}
                            className="w-full text-white bg-red-600 hover:bg-red-800 flex items-center justify-center py-2"
                            disabled={isLoading}
                        >
                            {isLoading ? "Deletando..." : "Sim"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeletarCategoria