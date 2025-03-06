function AssistaSessao(){
    return(
    <>
        <div className="textos-sessao">
            <h1>Assista onde quiser</h1>
            <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
        </div>

        <div className="assistaDispositivos">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
            <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
            </video>
        </div>
        
    </>
    )
   
}
export default AssistaSessao;