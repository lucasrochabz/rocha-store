import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import "./MyAccount.css";

export const MyAccount = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('meuspedidos/meu-perfil')
  }, [navigate])

  return (
    <>
      <div>
        <Header />
        <section className="account-container">
          <Sidebar />

          <div className="account-content">
            <Outlet />
          </div>

        </section>
        <Footer />
      </div>
    </>
  );
};
