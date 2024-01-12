import { Footer } from "../../components/Footer/Footer"
import { HeaderClean } from "../../components/HeaderClean/HeaderClean"
import "./Login.css"

export const Login = () => {
  return(
    <>
      <HeaderClean />
      <section className="login-container">
        <div className="login-content">
        <h1>Acesse sua conta</h1>
        <p>Novo cliente? Então regriste-se aqui.</p>

        <p>Login</p>
        <input placeholder="Insira seu login ou email" type="text" />
        <p>Senha</p>
        <input placeholder="Insira sua senha" type="text" />

        <p>Esqueci minha senha</p>

        <button>Acessar conta</button>

        <p>Ou faça login com Gmail Facebook</p>

        </div>
      </section>
      <Footer />
    </>
  )
}