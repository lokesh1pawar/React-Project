import react ,{component} from 'react';
import {Link} from 'react-router-dom';


class Header extends react.Component{
render(){
    return(
       
       <div>

<div className="row ">
	           <div className="medium-12 columns">
               <div class="container menu">
    	
        <div class="row">
        	<div class="col-sm-4">
                <div class="templatemo_webtitle"><img src="images/LOGOO (1).jpg" alt="logo"/></div>
            </div>
        	<div class="col-sm-8">
            	<nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid"> 
            
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
            </div>
            
            <div id="top-menu">
              <div class="collapse navbar-collapse main_menu" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><Link to="/">INFO & ABOUT</Link></li>
                  {/* <li><a href="./abt.js">ABOUT</a></li> */}
                  {/* <li><a href="gallery.html">GALLERY</a></li> */}
                  <li><Link to="/abt.js">CONTACT</Link></li>
                  <li><Link to="/LoginForm.js">LOGIN</Link></li>
                  <li><Link to="/Reg.js">REGISTER</Link></li>
                </ul>
              </div>
            </div>

          </div>
        
        </nav>
            </div>
        </div>
    </div>
   </div>
        </div>
        </div>
    )
}

}
export default Header;