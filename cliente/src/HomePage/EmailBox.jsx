import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function EmailBox() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  async function fazerLogin(e) {
    e.preventDefault();

    if (email === "") {
      setEmail("");
      document.querySelector('input[name="email"]').focus();
    } else {
      console.log(`Usuário recebido: ${email} \n`);

      const backendUrl =
        process.env.NODE_ENV === "production"
          ? "https://devflix-api-gd6r.onrender.com/prelogin"
          : "http://192.168.0.138:3000/prelogin"; // URL local para desenvolvimento

      try {
        const response = await axios.post(
          "https://devflix-api-gd6r.onrender.com/prelogin",
          JSON.stringify({ email }),
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("Solicitação bem sucedida!");

        const respostaArray = Object.entries(response.data);
        for (let i = 0; i < respostaArray.length - 1; i++) {
          const [chave, valor] = respostaArray[i];
          localStorage.setItem(chave, valor);
        }
      } catch (error) {

        if (error.response && error.response.status === 404) {
            // Se o erro for 404, redireciona para a página inicial
             navigate("https://devflix-493y.onrender.com/");
          }else console.log("Erro ao fazer login:", error);

      } finally {
        setTimeout(() => {
          navigate("/login");
        }, 2500);
        localStorage.setItem("emailEscolhido", email);
      }
    }
    return email;
  }

  return (
    <>
      <div className="mainBox">
        <div className="mainTexts">
          <h1>Filmes, séries e muito mais, sem limites</h1>
          <p>Assista onde quiser. Cancele quando quiser.</p>
          <p>
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
        </div>
        <form className="form-Home" onSubmit={fazerLogin} action="#">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(elemento) => setEmail(elemento.target.value)}
          />
          <input
            type="submit"
            value="Vamos lá!"
            onClick={(elemento) =>
              (elemento.target.style.animation =
                "carregaBotao 2.5s linear alternate")
            }
          />
        </form>
      </div>
    </>
  );
}
