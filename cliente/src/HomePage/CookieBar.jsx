import { useEffect, useState } from "react"

export function CookieBar(){
    
    function closeBar(){
        const cookieHeader= document.querySelector(".cookieHeader")
        cookieHeader.style.animation="byeCookieHeader 2s ease-out forwards"
    }

    const [cookie, setCookie]= useState(false)

    function aceitarCookie(e){
        const cookieHeader= document.querySelector(".cookieHeader")
        cookieHeader.style.animation="byeCookieHeader 2s ease-out forwards"
        setTimeout(() => {
            setCookie(true)
            localStorage.setItem("cookie", true)
        }, 2100);
    }
    useEffect(()=>{
        const preCookie=localStorage.getItem("cookie")

        if (preCookie){
            setCookie(true)
        }

    },[])

    if (cookie){
        return null
    }


    return(
        <div>
            <header className="cookieHeader">
                <div className="content">
                    <p>Ao clicar em “Aceitar todos os cookies”, você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar o uso do site e ajudar em nossos esforços de marketing.</p>
                    <p>Obs.: Este site utiliza a versão gratuita do Render, possível lentidão com requisições</p>
                    <button className="aceitaCookie-btn" onClick={(e)=>aceitarCookie(e)}>Aceitar Cookies</button>
                </div>
                <div className="closeBox"><button className="bi bi-x-circle closeBar" onClick={closeBar}></button></div>
            </header>
        </div>
    )
}