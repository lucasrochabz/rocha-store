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
import { MyOrders } from './pages/MyAccount/MyOrders/MyOrders'
import { MyInfos } from './pages/MyAccount/MyInfos/MyInfos'
import { MyProfile } from './pages/MyAccount/MyProfile/MyProfile'
import { Login } from './pages/Login/Login'
import { Pgto } from './pages/MyAccount/Pgto/Pgto'

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
    path: '/criar-conta',
    element: <CreateAccount />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/meus-pedidos',
    element: <MyAccount />,
    children: [
      {
        path: 'meu-perfil',
        element: <MyProfile />
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
        element: <Pgto />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
