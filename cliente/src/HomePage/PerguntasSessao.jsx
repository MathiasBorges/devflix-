import { EmailBox } from "./EmailBox";

function Pergunta({ id, pergunta, conteudo }) {
    return (
        <div className="pergunta">
            <input type="checkbox" id={id} className="input-perguntas" />
            <label htmlFor={id}>{pergunta}</label>
            <hr />
            <div className="conteudo-pergunta">
                {conteudo}
            </div>
        </div>
    );
}

function PerguntasSessao() {
    return (
        <div className="container-perguntas">
            <h1 className="texto-pergunta">Perguntas frequentes</h1>
            <Pergunta
                id="btn-shows"
                pergunta="O que é a Devflix?"
                conteudo={
                    <>
                        <p>A Devflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>
                        <p>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>
                    </>
                }
            />
            <Pergunta
                id="btn-shows1"
                pergunta="Quanto custa a Devflix?"
                conteudo={
                    <>
                        <p>Assista à Devflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 00,00 a R$ 00,00 por mês. Sem contrato nem taxas extras.</p>
                    </>
                }
            />
            <Pergunta
                id="btn-shows2"
                pergunta="Onde posso assistir?"
                conteudo={
                    <>
                        <p>Assista onde quiser, quando quiser. Faça login com sua conta Devflix em Devflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Devflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.</p>
                        <p>Você também pode baixar a sua série favorita com o aplicativo Devflix para iOS, Android ou Windows 10. Use downloads para levar a Devflix para onde quiser sem precisar de conexão com a Internet. Leve a Devflix com você para qualquer lugar.</p>
                    </>
                }
            />
            <Pergunta
                id="btn-shows3"
                pergunta="Como faço para cancelar?"
                conteudo={
                    <>
                        <p>A Devflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.</p>
                    </>
                }
            />
            <Pergunta
                id="btn-shows4"
                pergunta="O que eu posso assistir na Devflix?"
                conteudo={
                    <>
                        <p>A Devflix tem um grande catálogo de filmes, documentários, séries, originais Devflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
                    </>
                }
            />
    
            <Pergunta
                id="btn-shows5"
                pergunta="A Devflix é adequada para crianças?"
                conteudo={
                    <>
                        <p>A experiência infantil da Devflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.</p>
                        <p>O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.</p>
                    </>
                }
            />
            <EmailBox></EmailBox>
        </div>
    );
}

export default PerguntasSessao;
