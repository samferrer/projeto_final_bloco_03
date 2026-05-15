import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import {
    atualizarCategoria,
    buscarCategoriaPorId,
    cadastrarCategoria
} from "../../../services/CategoriaService"

function FormCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (id !== undefined) {
                await atualizarCategoria(id, {
                    nome: categoria.nome,
                    descricao: categoria.descricao
                })

                alert("Categoria atualizada com sucesso!")
            } else {
                await cadastrarCategoria(categoria)
                alert("Categoria cadastrada com sucesso!")
            }

            navigate("/categorias")
        } catch (error) {
            alert("Erro ao salvar categoria.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="container flex flex-col mx-auto items-center">
                <h1 className="text-4xl text-center my-8 font-bold text-emerald-800">
                    {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
                </h1>

                <form
                    className="flex flex-col w-1/2 gap-4"
                    onSubmit={gerarNovaCategoria}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="font-bold">
                            Nome da Categoria
                        </label>

                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="nome"
                            id="nome"
                            className="border-2 border-slate-700 rounded p-2"
                            value={categoria.nome}
                            onChange={atualizarEstado}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="font-bold">
                            Descrição da Categoria
                        </label>

                        <input
                            type="text"
                            placeholder="Digite a descrição da categoria"
                            name="descricao"
                            id="descricao"
                            className="border-2 border-slate-700 rounded p-2"
                            value={categoria.descricao}
                            onChange={atualizarEstado}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-emerald-800 hover:bg-emerald-950 text-white font-bold py-2"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? "Salvando..."
                            : id === undefined
                                ? "Cadastrar"
                                : "Atualizar"
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormCategoria