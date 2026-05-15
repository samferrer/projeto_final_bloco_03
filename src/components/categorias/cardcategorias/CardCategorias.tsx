import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">
            <header className="py-2 px-6 bg-emerald-800 text-white font-bold text-2xl">
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
                    to={`/editarcategoria/${categoria.id}`}
                    className="w-full text-white bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarcategoria/${categoria.id}`}
                    className="w-full text-white bg-red-600 hover:bg-red-800 flex items-center justify-center py-2"
                >
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias