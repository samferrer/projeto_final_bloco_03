import { Link } from "react-router-dom"
import { FirstAidKitIcon, PillIcon, ShoppingCartIcon } from "@phosphor-icons/react"

function Home() {
    return (
        <>
            <div className="bg-emerald-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            TopFarma - Sua farmácia online de confiança
                        </h2>

                        <p className='text-xl'>
                            Sua saúde em primeiro lugar!
                        </p>

                        <p className="text-lg text-center">
                            Encontre categorias de medicamentos, produtos de cuidado,
                            bem-estar e saúde em nossa farmácia online.
                        </p>

                        <div className="flex justify-around gap-4">
                            <Link
                                to='/categorias'
                                className="bg-white text-emerald-800 px-4 py-2 rounded font-bold hover:bg-emerald-100"
                            >
                                Ver Categorias
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <PillIcon size={260} weight="fill" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="container flex flex-col items-center py-8 gap-6">
                    
                    <h2 className="text-4xl font-bold text-emerald-800">
                        Bem-vinde à nossa farmácia
                    </h2>

                    <p className="text-xl text-center">
                        Aqui você poderá consultar, cadastrar, atualizar e deletar
                        categorias de produtos da farmácia.
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                        
                        <div className="flex flex-col items-center gap-2 border rounded p-6 shadow">
                            <PillIcon size={48} weight="bold" className="text-emerald-800" />
                            <h3 className="text-xl font-bold">Medicamentos</h3>
                            <p className="text-center">
                                Categorias de remédios e tratamentos.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-2 border rounded p-6 shadow">
                            <FirstAidKitIcon size={48} weight="bold" className="text-emerald-800" />
                            <h3 className="text-xl font-bold">Saúde</h3>
                            <p className="text-center">
                                Produtos para cuidado e prevenção.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-2 border rounded p-6 shadow">
                            <ShoppingCartIcon size={48} weight="bold" className="text-emerald-800" />
                            <h3 className="text-xl font-bold">Compra fácil</h3>
                            <p className="text-center">
                                Organização simples para o usuário.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home