import '../styles/logo.css'
import github from "../images/github.png"
import twitter from "../images/twitter.png"
import gmail from "../images/gmail.png"



function Logo() {
    return ( 
        <div id="logo-section">
        <div id="container">
          <div id="owl">
              <div id="square">
              </div>
              <div id="circle">     
                  <div id="beak"></div>
              </div>
          </div>
          <div id="github">
            <a href="https://github.com/Jeff-Maina" target="_blank"> <img src={github} class="fa fa-github"/></a> 
          </div>
          <div id="twitter">
              <a href="#"> <img src={twitter} class="fa fa-twitter"/></a>
          </div>
          <div id="logoemail">
            <a href="mailto:jeffgichuki68@gmail.com" ><img src={gmail} class="logo-material-icons"/></a>  
          </div>
      </div>
    </div>
     );
}

export default Logo;