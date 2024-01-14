import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { HeaderClean } from "../../components/HeaderClean/HeaderClean"
import "./Login.css"

export const Login = () => {
  return(
    <>
      <HeaderClean />
      <section className="login-container">

        <div className="fundo">

          <div className="login-content">
            <h3>Acesse sua conta</h3>
            <p>
              Novo cliente? Então regriste-se <span>aqui.</span>
            </p>

            <label htmlFor="login">Login *</label>
            <input placeholder="Insira seu login ou email" type="text" />

            <label htmlFor="senha">Senha *</label>
            <input placeholder="Insira sua senha" type="text" />

            <Link to="#">
              Esqueci minha senha
            </Link>

            <button>Acessar conta</button>

            <p>Ou faça login com Gmail Facebook</p>
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}
