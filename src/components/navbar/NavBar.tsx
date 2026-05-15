import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-emerald-800 text-white'>
                <div className="container flex justify-between text-lg mx-8">
                    
                    <Link to='/' className="text-2xl font-bold">
                        TopFarma
                    </Link>

                    <div className='flex gap-4'>
                        <Link to='/' className='hover:underline'>
                            Home
                        </Link>

                        <Link to='/categorias' className='hover:underline'>
                            Categorias
                        </Link>

                        <Link to='/cadastrarcategoria' className='hover:underline'>
                            Cadastrar Categoria
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar