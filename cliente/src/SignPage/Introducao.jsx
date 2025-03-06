
function Introducao({irProximo}){
    function lidarClique(){
        let mainSign=document.querySelector(".mainSign")
        mainSign.style.animation="noShowMainSign 1s ease-in forwards"
        irProximo()
    }

    return(
        <main className='mainSign'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="" />
            <p>PASSO <b>1</b> DE <b>3</b></p>
            <h1>Termine de configurar sua conta</h1>
            <p>A Netflix é personalizada para você. Crie uma senha para começar a assistir à Netflix.</p>
            <input type="button" value="Próximo" onClick={lidarClique}/>
        </main>
    
    )
}
export default Introducao;