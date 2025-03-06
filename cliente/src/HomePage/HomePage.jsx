import './HomePage.css'
import { CookieBar, } from './CookieBar'
import { SessaoEmail } from './SessaoEmail'
import { SessaoVenda } from './SessaoVenda'
import { PadraoSessao } from './PadraoSessao'
import Footer from './Footer'

function HomePage() {
  return (
    <div className='all'>
      <CookieBar/>
      <SessaoEmail/>
      <SessaoVenda/>
      <PadraoSessao/>
      <Footer classe="footerHomePage"/>
    </div>
  )
}

export default HomePage;
