import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../HomePage/Footer";

function LoginPage() {
  const navigate = useNavigate();
  const [emailVerificar, setEmailVerificar] = useState(localStorage.getItem("emailEscolhido") || "");
  const [senhaVerificar, setSenhaVerificar] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    let inputEmail = document.querySelector("#emailEntrar");
    if (inputEmail) inputEmail.value = localStorage.getItem("emailEscolhido");
  }, []);

  async function verificarLogin(e) {
    e.preventDefault();
    
    if (!emailVerificar) {
      document.querySelector('input[name="emailEntrar"]').focus();
      return;
    }

    console.log(`Usuário recebido: ${emailVerificar} - ${senhaVerificar}\n`);

    try {
      const response = await axios.post(
        "https://devflix-api-gd6r.onrender.com/login",
        { email: emailVerificar, senha: senhaVerificar },
        { headers: { "Content-Type": "application/json" } }
      );
      
      console.log("Solicitação bem sucedida!");
      alertLoginOk(true);

      localStorage.clear();
      localStorage.setItem("logado", "1");
      localStorage.setItem("nome", response.data.nome);

      Object.entries(response.data).forEach(([chave, valor]) => {
        localStorage.setItem(chave, valor);
      });
    } catch (error) {
      alertLoginOk(false);
      setSenhaVerificar("");
      if (error.response && error.response.status === 404) {
        navigate("/login");
      } else {
        console.log("Erro ao fazer login:", error);
      }
    } finally {
      localStorage.setItem("emailEscolhido", emailVerificar);
    }
  }

  function alertLoginOk(isSuccess) {
    if (!isSuccess) {
      setShowDialog(true);
    } else {
      navigate("/acesso");
    }
  }

  return (
    <>
      {showDialog && (
        <dialog className="notOk" open>
          <h2>
            Desculpe, não encontramos uma conta com o endereço <b>{emailVerificar}</b>. Tente novamente ou <Link to='/sign'>crie uma nova conta</Link>.
          </h2>
          <button style={{color:"black"}} onClick={() => setShowDialog(false)}>OK</button>
        </dialog>
      )}

      <div className="containerLogin">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/539c1d05-ea60-4865-88c5-be28fa1ac8b4/BR-pt-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
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
              value={emailVerificar}
              onChange={(e) => setEmailVerificar(e.target.value)}
            />
            <input
              required
              type="password"
              name="senhaEntrar"
              id="senhaEntrar"
              placeholder="Senha"
              minLength={4}
              maxLength={16}
              value={senhaVerificar}
              onChange={(e) => setSenhaVerificar(e.target.value)}
            />
            <input type="submit" value="Entrar" />
          </div>
          <div className="between-Div">
            <div>
              <input type="checkbox" id="fotgetMe" />
              <label htmlFor="fotgetMe"> Lembre-se de mim</label>
            </div>
            <a href="mailto:dsmathiasmarques@gmail.com?subject=Ei, Mathias! É sobre a Devflix...">Precisa de ajuda?</a>
          </div>
          <div className="end-Div">
            <div>
              Novo por aqui? <Link to={"/sign"}>Assine agora</Link>
            </div>
            <p>Esta página é protegida pela Vercel e por você mesmo 😁</p>
          </div>
        </form>
      </div>
      <Footer classe="footerLogin" />
    </>
  );
}

export default LoginPage;