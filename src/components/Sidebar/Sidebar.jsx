import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  const location = useLocation()

  return(
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <a href="#">Meu perfil</a>
            <hr />
          </li>
          <li>
            <Link to="/meuspedidos" className={location.pathname === '/meuspedidos' ? 'active' : ''}>
              Meus Pedidos
            </Link>
            <hr />
          </li>
          <li>
            <a href="#">Minhas Informações</a>
            <hr />
          </li>
          <li>
            <a href="#">Métodos de Pagamento</a>
          </li>
        </ul>
      </div>
    </>
  )
}
