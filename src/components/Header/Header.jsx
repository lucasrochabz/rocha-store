import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const location = useLocation()

  const ParentNavLink = ({ to, label }) => (
    <NavLink
      to={to}
      activeClassName="active"
      isActive={(match, location) => {
        // Adicione a classe "active" manualmente ao elemento da rota pai se a rota atual corresponder à rota pai
        if (match || location.pathname.startsWith(to)) {
          return true;
        }
        return false;
      }}
    >
      {label}
    </NavLink>
  );

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
                <ParentNavLink to="/meuspedidos" label="Meus Pedidos" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
