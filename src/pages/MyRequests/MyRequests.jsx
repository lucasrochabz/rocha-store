import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./MyRequests.css";

export const MyRequests = () => {
  return (
    <>
      <Header />
      <section className="main-request-container">
        <Sidebar />
        
        <div className="status-container">
          <div className="status-container-header">
            <h3>Meus pedidos</h3>
            <span>STATUS</span>
          </div>
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Produto em trânsito</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Cancelado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>   
        </div>
      </section>
      <Footer />
    </>
  );
};
