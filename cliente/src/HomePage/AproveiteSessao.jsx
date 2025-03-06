export function AproveiteSessao(){
    return(
        <>
            <div className="textos-sessao">
                <h1>Aproveite na TV</h1>
                <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
            <div className="videoNaTv">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                <video autoPlay playsInline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source></video>
            </div>
        </>
    )
}