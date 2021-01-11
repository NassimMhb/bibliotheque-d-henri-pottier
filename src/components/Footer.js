import React from "react";

class Footer extends React.Component{
	render(){
		return(
            <footer>
            <div className="wrapper"></div>
            <div className="footer">
              <div className="footer-content">
                <div className="footer-section about">
                  <p className="footer-para">
                    Developpé par <span className="my-name"> Nassim Mouhoubi</span>
                  </p>
                  <p className="copyright">
                    <a href="http://nassimmouhoubi.com">Accéder à mon site perso</a>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </footer>
		)
	}
}

export default Footer;