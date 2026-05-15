import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { buscarTodasCategorias } from "../../../services/CategoriaService"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarCategorias() {
        setIsLoading(true)

        try {
            const resposta = await buscarTodasCategorias()
            setCategorias(resposta)
        } catch (error) {
            alert("Erro ao buscar categorias.")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <h1 className="text-4xl text-center my-4 font-bold text-emerald-800">
                        Categorias
                    </h1>

                    {isLoading && (
                        <div className="flex justify-center py-8">
                            <ClipLoader size={80} />
                        </div>
                    )}

                    {!isLoading && categorias.length === 0 && (
                        <p className="text-center text-xl">
                            Nenhuma categoria cadastrada.
                        </p>
                    )}

                    {!isLoading && categorias.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorias.map((categoria) => (
                                <CardCategorias
                                    key={categoria.id}
                                    categoria={categoria}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListaCategorias