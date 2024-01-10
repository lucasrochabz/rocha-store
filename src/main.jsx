import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CartCheckout } from './components/CartCheckout/CartCheckout'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { MyAccount } from './pages/MyAccount/MyAccount'
import { MyOrders } from './components/MyOrders/MyOrders'
import { MyInfos } from './components/MyInfos/MyInfos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/carrinho',
    element: <CartCheckout />,
  },
  {
    path: '/produto/:id',
    element: <ProductDetails />
  },
  {
    path: '/criarconta',
    element: <CreateAccount />
  },
  {
    path: '/meuspedidos',
    element: <MyAccount />,
    children: [
      {
        path: 'meu-perfil',
        element: <h1>Meu perfil</h1>
      },
      {
        path: 'meus-pedidos',
        element: <MyOrders />
      },
      {
        path: 'minhas-informacoes',
        element: <MyInfos />
      },
      {
        path: 'metodos-de-pagamento',
        element: <h1>Métodos de Pagamento</h1>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
