import './SummaryBar.css'

export const SummaryBar = () => {
  return (
    <>
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
    </>
  )
}
