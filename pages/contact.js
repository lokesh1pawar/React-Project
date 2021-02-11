import react,{Component} from 'react';
import {Link} from 'react-router-dom';
import MapContainer from './map';


class Contact extends react.Component{
    render(){
        return(
            <div>
                	
                    <div class="container menu">
    	<div class="row">
            <div class="col-sm-4">
            	<div class="templatemo_webtitle"><img src="images/templatemo_logo.png" alt="logo"/></div>
            </div>
            <div class="col-sm-8">
            	<nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid"> 
         {/*    <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
            </div>
          {/*   <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div id="top-menu">
              <div class="collapse navbar-collapse main_menu" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><Link to="/Home">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/gallery">GALLERY</Link></li>
                  <li class="current"><Link to="/contact">CONTACT</Link></li>
                </ul>
              </div>
            </div>
           {/*  <!-- /.navbar-collapse -->  */}
          </div>
         {/*  <!-- /.container-fluid -->  */}
        </nav>
            </div>
        </div>
    </div>
   
    
  {/*   <!-- contact start --> */}
    <div class="container">
   	  <div class="row">
        	<div class="col-md-12">
              <div class="templatemo_contact_top shadow">
               	<div class="templatemo_contact_top_title">CONTACT INFORMATION</div>
                        <div class="templatemo_contact_top_sub">LOREM RUIS BIBENDUM</div>
                    	<p>This is free website template from templatemo. Morbi sagittis, purus eu vestibulum facilisis, dolor enim lacinia dui, vulputate dapibus lacus tortor at elit. Integer neque. Aenean molestie mollis sapien. Morbi scelerisque pellentesque nulla. Duis blandit, nunc sed porttitor congue, eros nisl consectetuer purus, quis elementum leo risus pharetra quam. Nulla posuere. Morbi et nisi in augue accumsan imperdiet. Cras eget ante ac leo pretium mollis. Duis convallis rutrum leo.</p>
              </div>
                </div>
        	
      </div>
    </div>
    <div class="container"/>
    	<div class="row margin30">
        	<div class="col-md-12">
            	<div class="templatemo_contact shadow">
                	<div class="title">CONTACT US</div>
                    <div class="subtitle">LOREM RUIS BIBENDUM</div>
                	<div class="col-md-6">
                    	<form action="#" method="post">
                        	<input type="text" name="textfield" id="nametext" class="name" placeholder="NAME"/>
                            <input type="text" name="textfield" id="emailtext" class="email" placeholder="EMAIL"/>
                            <textarea name="" class="message" placeholder="MESSAGE ... "></textarea>
                            <button type="submit" class="blue">SEND</button>
                        </form>
                    
                
                <div>
          			<div class="col-md-6">
                    	<div id="templatemo_map">
                        <MapContainer/>
                      </div>
                    </div>
                     <div class="clear"></div>
                </div>
               
            </div>
            
        </div>
    </div>
            </div>
            </div>
        )
    }
} 

export default Contact;