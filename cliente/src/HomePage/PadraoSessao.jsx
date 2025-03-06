import { AproveiteSessao } from "./AproveiteSessao"
import AssistaSessao from "./AssistaSessao"
import InfantilSessao from "./InfantilSessao"
import { AssistaOffSessao } from "./AssistaOffSessao"
import PerguntasSessao from "./PerguntasSessao"

export function PadraoSessao(){
    return(
        <>
            <div className="containerSessao">
                <div className="sessao-flex">
                    <AproveiteSessao></AproveiteSessao>
                </div>
            </div>
            <div className="containerSessao">
                <div className="sessao-flex">
                    <AssistaSessao></AssistaSessao>
                </div>
            </div>
            <div className="containerSessao">
                <div className="sessao-flex">
                    <InfantilSessao></InfantilSessao>
                </div>
            </div>
            <div className="containerSessao">
                <div className="sessao-flex">
                    <AssistaOffSessao></AssistaOffSessao>
                </div>
            </div>
            <div className="containerSessao" style={{height:'auto'}}>
                <div className="sessao-flex">
                    <PerguntasSessao></PerguntasSessao>
                </div>
            </div>
        </>
    )
}