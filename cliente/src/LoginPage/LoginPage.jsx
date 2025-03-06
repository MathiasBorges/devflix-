import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../HomePage/Footer";

function LoginPage() {
  const navigate = useNavigate(); // Use navigate aqui no início do componente

  useEffect(() => {
    let inputEmail = document.querySelector("#emailEntrar");
    inputEmail.value = localStorage.getItem("emailEscolhido");
  }, []);

  const [emailVerificar, setEmailVerificar] = useState(
    localStorage.getItem("emailEscolhido")
  );
  const [senhaVerificar, setSenhaVerificar] = useState("");

  async function verificarLogin(e) {
    e.preventDefault();

    let inputEmail = document.querySelector("#emailEntrar");
    if (inputEmail.value === "") {
      setEmailVerificar("");
      document.querySelector('input[name="emailEntrar"]').focus();
    } else {
      console.log(`Usuário recebido: ${emailVerificar} - ${senhaVerificar} \n`);

      try {
        const response = await axios.post(
          "http://192.168.0.138:3000/login",
          { email: emailVerificar, senha: senhaVerificar },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("Solicitação bem sucedida!");
        alertLoginOk(true);

        localStorage.clear();
        localStorage.setItem("logado",'1')
        localStorage.setItem("nome", response.data.nome);

        const respostaArray = Object.entries(response.data);
        for (let i = 0; i < respostaArray.length - 1; i++) {
          const [chave, valor] = respostaArray[i];
          localStorage.setItem(chave, valor);
        }
      } catch (error) {
        alertLoginOk(false);
        console.log("Erro ao fazer login:", error);
      } finally {
        localStorage.setItem("emailEscolhido", emailVerificar);
      }
    }
    return emailVerificar, senhaVerificar;
  }

  function alertLoginOk(isTrue) {
    let body = document.querySelector("body");

    if (isTrue !== true) {
      body.innerHTML += `
            <dialog class="notOk">
              <h2>Desculpe, não encontramos uma conta com o endereço <b>${emailVerificar}</b>. Tente novamente ou <a href='/sign'>crie uma nova conta</a>.
              </h2>
              <input type='checkbox' id='btn-ok'>
              <label for='btn-ok'>OK</label>
            </dialog>
          `;
      document.querySelector("dialog input").addEventListener("change", (e) => {
        if (e.target.checked) {
          location.reload();
        }
      });
    } else {
      // Navegar para a página de acesso após o login bem-sucedido
      navigate("/acesso");  // Use navigate aqui, fora da função alertLoginOk
    }
  }

  return (
    <>
      <div className="containerLogin">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/539c1d05-ea60-4865-88c5-be28fa1ac8b4/BR-pt-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="imgShadowLogin"></div>
        <Link className="linkRoutes" to={"/"}>
          <h1>DEVFLIX</h1>
        </Link>
        <form className="form-login" method="POST" onSubmit={verificarLogin}>
          <div className="inputsLogin">
            <h1>Entrar</h1>
            <input
              required
              type="email"
              name="emailEntrar"
              id="emailEntrar"
              placeholder="E-mail"
              onChange={(elemento) => setEmailVerificar(elemento.target.value)}
            />
            <input
              required
              type="password"
              name="senhaEntrar"
              id="senhaEntrar"
              placeholder="Senha"
              minLength={4}
              maxLength={16}
              onChange={(elemento) => setSenhaVerificar(elemento.target.value)}
            />
            <input type="submit" value="Entrar" />
          </div>
          <div className="between-Div">
            <div>
              <input type="checkbox" id="fotgetMe" />
              <label htmlFor="fotgetMe"> Lembre-se de mim</label>
            </div>
            <a href="mailto:dsmathiasmarques@gmail.com?subject=Ei, Mathias! É sobre a Devflix...">
              Precisa de ajuda?
            </a>
          </div>
          <div className="end-Div">
            <div>
              Novo por aqui? <Link to={"/sign"}>Assine agora</Link>
            </div>
            <p>Esta página é protegida pela Vercel e por você mesmo 😁</p>
          </div>
        </form>
      </div>
      <Footer classe="footerLogin"></Footer>
    </>
  );
}

export default LoginPage;
