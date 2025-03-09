import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate=useNavigate()

  function lidarClique() {
    let mainSign = document.querySelector(".mainSign");
    mainSign.style.animation = "noShowMainForm 1s ease-in forwards";
    irProximo();
  }

  const [nomeCadastrar, setnomeCadastrar] = useState("");
  const [emailCadastrar, setEmailCadastrar] = useState(
    localStorage.getItem("emailEscolhido")
  );
  const [senhaCadastrar, setSenhaCadastrar] = useState("");
  const [cadastros, setCadastros] = useState(0);

  async function verificarSign(e) {
    e.preventDefault();

    const backendUrl =
      process.env.NODE_ENV === "production"
        ? "https://devflix-api-gd6r.onrender.com/sign"
        : "http://192.168.0.138:3000/sign"; // URL local para desenvolvimento

    try {
      const response = await axios.post(
        "https://devflix-api-gd6r.onrender.com/sign",
        { nome: nomeCadastrar, email: emailCadastrar, senha: senhaCadastrar }, // Corretamente passando as variáveis
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Solicitação bem sucedida!");

      setCadastros((prev) => {
        const novoCadastro = prev + 1;
        localStorage.setItem("cadastados", novoCadastro);

        const respostaArray = Object.entries(response.data);
        respostaArray.forEach(([chave, valor]) => {
          localStorage.setItem(`${chave}${novoCadastro}`, valor);
        });

        return novoCadastro;
      });

      alertLoginOk(true);
    } catch (error) {
      alertLoginOk(false);

      if (error.response && error.response.status === 404) {
        // Se o erro for 404, redireciona para a página inicial
        navigate("https://devflix-493y.onrender.com/sign");
      }else console.log("Erro ao fazer cadastro:", error);;
    }

    return nomeCadastrar, emailCadastrar, senhaCadastrar;
  }

  function alertLoginOk(isTrue) {
    let body = document.querySelector(".bodySign");

    if (isTrue != true) {
      body.innerHTML += `
            <dialog class="notOkForm">
              <h2>Desculpe, mas já existe uma conta com o endereço <b>${emailCadastrar}</b>. Tente novamente ou <a href='/login'>Entre com uma conta</a>.
              </h2>
              <input type='checkbox' id='btn-ok'>
              <label for='btn-ok'>OK</label
            </dialog>
          `;
      document.querySelector("dialog input").addEventListener("change", (e) => {
        if (e.target.checked) {
          navigate("https://devflix-493y.onrender.com/sign")
        }
      });
    } else {
      body.innerHTML += `<dialog class="okForm">
                    <h2>Bem-vindo <b>${nomeCadastrar}</b>!</h2>
                    <input type='checkbox' id='btn-ok'>
                    <label for='btn-ok'>OK</label
            </dialog>`;

      document.querySelector("dialog input").addEventListener("change", (e) => {
        if (e.target.checked) {
          navigate("https://devflix-493y.onrender.com/login")
        }
      });
    }
  }

  return (
    <form method="POST" className="mainForm" onSubmit={verificarSign}>
      <div className="divForm">
        <div>
          <p>
            PASSO <b>2</b> DE <b>3</b>
          </p>
          <h1>Crie uma senha para iniciar sua assinatura</h1>
        </div>
        <p>
          Apenas mais alguns passos e pronto!<br></br>Também odiamos papelada.
        </p>
        <input
          required
          type="text"
          id=""
          placeholder="Nome"
          onChange={(e) => setnomeCadastrar(e.target.value)}
        />
        <input
          required
          type="text"
          id=""
          placeholder="E-mail"
          value={emailCadastrar}
          onChange={(e) => setEmailCadastrar(e.target.value)}
        />
        <input
          required
          type="password"
          id=""
          placeholder="Senha"
          minLength={6}
          maxLength={16}
          onChange={(e) => setSenhaCadastrar(e.target.value)}
        />
        <input type="submit" value="Próximo" />
      </div>
    </form>
  );
}
export default Form;
