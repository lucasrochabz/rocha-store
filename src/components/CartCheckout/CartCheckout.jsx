import './CartCheckout.css'
import { useEffect, useState } from 'react'
import { CartCheckoutRow } from './CartCheckoutRow'
import productsData from "../../../products.json"
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'


export const CartCheckout = () => {
    const [items, setItems] = useState([])


    const loadCartItems = async () => {
        const response = await fetch('https://6578d273f08799dc804619b0.mockapi.io/api/v1/cart')
        const result = await response.json()

        setItems(
            result.map(cartItem => {
                const product = productsData.find(product => product.id === cartItem.productId)
                return {
                    ...product,
                    ID: cartItem.id,
                }
            }
            )
        )
    }


    useEffect(() => {
        loadCartItems()
    }, [])


    return (
        <>
            <Header />
            <section className='cart-checkout-container'>
                <div className='my-cart-content'>
                    <table>
                        <thead>
                            <tr>
                                <th className='bold'>MEU CARRINHO</th>
                                <th />
                                <th>QUANTIDADE</th>
                                <th>UNITÁRIO</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <CartCheckoutRow
                                    key={item.id}
                                    ID={item.ID}
                                    name={item.name}
                                    color="Vermelho / Branco"
                                    size="42"
                                    price="219,00"
                                    oldPrice="219,00"
                                    onRemove={loadCartItems}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                <section className='summary-container'>
                    <h3>Resumo</h3>
                    <hr />

                    <div className='summary'>
                        <div className='summary-title'>
                            <p>Subtotal:</p>
                            <p>Frete:</p>
                            <p>Desconto:</p>
                            <h2>Total</h2>
                        </div>
                        <div className='summary-price'>
                            <p>R$ 219,00</p>
                            <p>R$ 0,00</p>
                            <p>R$ 30,00</p>
                            <h2>R$219,00</h2>
                            <p>ou 10x de R$ 21,00 sem juros</p>
                        </div>
                    </div>
                    <a className='button-summary' href="#">Continuar</a>
                </section>
            </section>

            <Footer />
        </>
    )
}
