import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const location = useLocation()

  return (
    <>
      <section className='header-container'>
        <div className='header-menu'>
          <h1>Digital Store</h1>
          <input placeholder='Pesquisar produto' type="text" />
          <a href="#">Cadastre-se</a>
          <a className='button' href="#">Entrar</a>
          <span>Carrinho</span>
        </div>
        <div className='header-nav'>
          <nav>
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Categorias</a>
              </li>
              <li>
                <Link to="/meuspedidos" className={location.pathname === '/meuspedidos' ? 'active' : ''}>
                  Meus Pedidos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
