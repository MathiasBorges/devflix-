import { Link } from "react-router-dom"
import { EmailBox } from "./EmailBox.jsx"
export function SessaoEmail(){

    return(
        <div className="container">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/72cddd06-691d-400a-b7d3-c4666f2e3199/BR-pt-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
            <div className="shadowImg"></div>
            <header className="headerDevFlix">
                <h1>DEVFLIX</h1>
                <div className="options">
                    <div className="selects">
                        <i className="material-icons">&#xe8e2;</i>
                        <select className="selectLanguage">
                            <option defaultValue="pt" selected>Português</option>
                            <option defaultValue="en">English</option>
                        </select>
                    </div>
                    <Link className="linkRoutes btnEntrar" to="/login">Entrar</Link>
                </div>
            </header>
            <EmailBox></EmailBox>
        </div>
        
    )
}