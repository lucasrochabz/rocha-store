import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./MyAccount.css";

export const MyAccount = () => {
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
