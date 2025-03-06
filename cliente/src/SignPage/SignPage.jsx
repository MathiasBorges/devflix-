import './SignPage.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../HomePage/Footer';
import Introducao from './Introducao';
import Form from './Form';

function SignPage(){
    const [sessao,setSessao]=useState(1)
    console.log(sessao)

    function avancarSessao(){
        setTimeout(() => {
            setSessao(sessao+1)
        }, 650);
    }

    return(
        
        <body className='bodySign'>
            <header className="headerDevFlix">
                <Link className='linkRoutes' to={'/'}><h1>DEVFLIX</h1></Link>
                <Link className="btnEntrar" to="/login">Entrar</Link>
            </header>
            { sessao===1 ? <Introducao irProximo={avancarSessao}/> : <Form/>}
           <Footer classe="footerSign"></Footer>
        </body>
        
    )

}
export default SignPage;