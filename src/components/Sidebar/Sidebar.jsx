import './Sidebar.css'

export const Sidebar = () => {
  return(
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <a href="#">Meu perfil</a>
            <hr />
          </li>
          <li>
            <a href="#">Meus Pedidos</a>
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
