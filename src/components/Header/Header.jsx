import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const location = useLocation()

  const ParentNavLink = ({ to, label }) => (
    <NavLink
      to={to}
      activeClassName="active"
      isActive={(match, location) => {
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

          <Link to="/">
            <img src="assets/img/logo.png" alt="Logo Digital Store" />
          </Link>
          
          <input placeholder='Pesquisar produto' type="text" />

          <Link to="/criar-conta">
            Cadastre-se
          </Link>

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
                <ParentNavLink to="/meus-pedidos" label="Meus Pedidos" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
