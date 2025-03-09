import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [nomeCadastrar, setNomeCadastrar] = useState("");
  const [emailCadastrar, setEmailCadastrar] = useState(localStorage.getItem("emailEscolhido") || "");
  const [senhaCadastrar, setSenhaCadastrar] = useState("");
  const [cadastros, setCadastros] = useState(0);
  const [modal, setModal] = useState({ show: false, success: false });

  async function verificarSign(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://devflix-api-gd6r.onrender.com/sign",
        { nome: nomeCadastrar, email: emailCadastrar, senha: senhaCadastrar },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Cadastro realizado com sucesso!");

      setCadastros((prev) => {
        const novoCadastro = prev + 1;
        localStorage.setItem("cadastados", novoCadastro);

        const respostaArray = Object.entries(response.data);
        respostaArray.forEach(([chave, valor]) => {
          localStorage.setItem(`${chave}${novoCadastro}`, valor);
        });

        return novoCadastro;
      });

      setModal({ show: true, success: true });

    } catch (error) {
      setModal({ show: true, success: false });

      if (error.response && error.response.status === 404) {
        navigate("/sign");
      } else {
        console.log("Erro ao fazer cadastro:", error);
      }
    }
  }

  return (
    <>
      <form method="POST" className="mainForm" onSubmit={verificarSign}>
        <div className="divForm">
          <div>
            <p>
              PASSO <b>2</b> DE <b>3</b>
            </p>
            <h1>Crie uma senha para iniciar sua assinatura</h1>
          </div>
          <p>
            Apenas mais alguns passos e pronto!<br />Também odiamos papelada.
          </p>
          <input
            required
            type="text"
            placeholder="Nome"
            onChange={(e) => setNomeCadastrar(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="E-mail"
            value={emailCadastrar}
            onChange={(e) => setEmailCadastrar(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Senha"
            minLength={6}
            maxLength={16}
            onChange={(e) => setSenhaCadastrar(e.target.value)}
          />
          <input type="submit" value="Próximo" />
        </div>
      </form>

      {modal.show && (
        <dialog className={modal.success ? "okForm" : "notOkForm"} open>
          {modal.success ? (
            <>
              <h2>Bem-vindo <b>{nomeCadastrar}</b>!</h2>
              <button onClick={() => navigate("/login")}>OK</button>
            </>
          ) : (
            <>
              <h2>
                Desculpe, mas já existe uma conta com o endereço <b>{emailCadastrar}</b>. 
                Tente novamente ou <Link to="/login">Entre com uma conta</Link>.
              </h2>
              <button style={{color:"black"}} onClick={() => setModal({ show: false })}>OK</button>
            </>
          )}
        </dialog>
      )}
    </>
  );
}

export default Form;
