
import react,{Component} from 'react';
import {Link} from 'react-router-dom';

class About extends react.Component{
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
          {/*   <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div id="top-menu">
              <div class="collapse navbar-collapse main_menu" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><Link to="/Home">HOME</Link></li>
                  <li class="current"></li><Link to="/about">ABOUT</Link>
                  <li><Link to="/gallery">GALLERY</Link></li>
                  <li><Link to="/contact">CONTACT</Link></li>
                </ul>
              </div>
            </div>
         {/*    <!-- /.navbar-collapse -->  */}
          </div>
         {/*  <!-- /.container-fluid -->  */}
        </nav>
            </div>
        </div>
    </div>
     {/*   <!-- about start --> */}
    	<div class="container">
        	<div class="row">
            	<div class="col-md-12">
                    <div class="templatemo_about_top shadow">
                    	<div class="templatemo_about_top_title">WHO WE ARE !</div>
                        <div class="templatemo_about_top_sub">LOREM RUIS BIBENDUM</div>
                    	<p>This is free website template from templatemo. Morbi sagittis, purus eu vestibulum facilisis, dolor enim lacinia dui, vulputate dapibus lacus tortor at elit. Integer neque. Aenean molestie mollis sapien. Morbi scelerisque pellentesque nulla. Duis blandit, nunc sed porttitor congue, eros nisl consectetuer purus, quis elementum leo risus pharetra quam. Nulla posuere. Morbi et nisi in augue accumsan imperdiet. Cras eget ante ac leo pretium mollis. Duis convallis rutrum leo.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
        	<div class="row margin30">
            	<div class="col-md-4">
                	<Link to="#">
                	<div class="templatemo_aboutmid shadow">
                    	<div class="circle">1</div>
                        <div class="title">DUIS SED ODIO SIT AMET</div>
                        <div class="text">Cate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</div>
                	</div>
                    </Link>
                </div>
                <div class="col-md-4 s_margin30">
                	<Link to="#">
                	<div class="templatemo_aboutmid shadow">
                    	<div class="circle">2</div>
                        <div class="title">DUIS SED ODIO SIT AMET</div>
                        <div class="text">Cate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</div>
                	</div>
                    </Link>
                </div>
                <div class="col-md-4 s_margin30">
                	<Link to="#">
                	<div class="templatemo_aboutmid shadow">
                    	<div class="circle">3</div>
                        <div class="title">DUIS SED ODIO SIT AMET</div>
                        <div class="text">Cate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</div>
                	</div>
                    </Link>
                </div>
            </div>
        </div>
        <div class="container">
        	<div class="row margin30">
            	<div class="col-md-12">
                    	<div class="templatemo_aboutmid_image clearfix">    
                        	<Link to="#">        
                            <figure class="threecol first about-item">
                           	  <img src="images/templatemo_about01.jpg" alt="templatemo about1" class="shadow"/>
                                <figcaption class="img-title">
                                	<div class="circle">
                                    	<i class="fa fa-search"></i>
                                    </div>
                                    <div class="text">
                                		LOREM IPSUM DOLOR ALIQUET. AENEAN SOLLICITUDIN, LOREM QUIS BIBENDUM AUCTOR.  
                                    </div>
                                </figcaption>
                            </figure>
                            </Link>
                         </div>                      
                     <div class="templatemo_aboutmid_image clearfix">  
	                     <Link to="#">          
                            <figure class="threecol first about-item">
                           	  <img src="images/templatemo_about02.jpg" alt="templatemo about2" class="shadow"/>
                                <figcaption class="img-title">
                                	<div class="circle">
                                    	<i class="fa fa-search"></i>
                                    </div>
                                    <div class="text">
                                		LOREM IPSUM DOLOR ALIQUET. AENEAN SOLLICITUDIN, LOREM QUIS BIBENDUM AUCTOR.  
                                    </div>
                                </figcaption>
                      		</figure>
                         </Link>
                      </div>
                  </div>
            </div>
        </div>
        <div class="container">
        	<div class="row">
            	<div class="col-md-12">
                	<div class="templatemo_about_bot shadow">
                    	<div class="col-md-6">
                      	<div class="templatemo_about_botbox">
                      	<div class="image">
                                <img src="images/templatemo_about03.jpg" alt="templatemo about 03"/>
                        </div>
                        <div class="text">
                            <div class="title">ENEAN SOLCITUD</div>
                            <div class="subtitle">DUIS SED ODID SIT AMET NIBH</div>
                            <div class="para">Fusce a diam. Etiam mollis, lorem vel luctus malesuada, libero mauris viverra massa, vulputate elementum nunc urna non felis. Phasellus sed metus. 
							</div>
                        </div>
                        </div>
                	</div>
               		 <div class="col-md-6">
                     <div class="templatemo_about_botbox s_margin30">
                      	<div class="image">
                            <img src="images/templatemo_about04.jpg" alt="templatemo about 04"/>
                        </div>
                        <div class="text">
                            <div class="title">MAURIS LUCTUS</div>
                            <div class="subtitle">DUIS SED ODID SIT AMET NIBH</div>
                            <div class="para">Fusce a diam. Etiam mollis, lorem vel luctus malesuada, libero mauris viverra massa, vulputate elementum nunc urna non felis. Phasellus sed metus. 
							</div>
                        </div>
                        </div>
                	</div>
                    </div>
				</div>
            </div>
        </div>	
   
            </div>
        )
    }
} 
export default About;