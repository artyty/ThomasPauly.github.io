import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Thomas from './img/Thomas.jpg';
import Linkedin from './img/linkedin.ico';
import Mail from './img/mail.ico';


//navbar navbar-default navbar-fixed-top navbar-inverse font-header
function App() {
  return (
    <div className="App">
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-color ">
          <div class="d-flex flex-grow-1">
           <span class="w-100 d-lg-none d-block"></span>
            <a class="navbar-brand po-AndaleMono Green" href="#pos-accueil" >tpauly ~ $</a>
            <div class="w-100 text-right">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarNav">
              <ul class="navbar-nav ml-auto flex-nowrap po-AndaleMono ">
                <li class="nav-item ">
                  <a class="nav-link" href="#pos-experience"> ~/Experiences <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pos_formation">~/Formations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pos_comp">~/Competences</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="#_langue">~/Infos</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </header> 
      </div>
      <body>
        <div class="demo">
          <div class="container">
            <div class="row center-div">
              <div class="col-md-offset-2  col-md-8 center-div">
                <div id="testimonial-slider" class="owl-carousel center-div">
                  <div class="testimonial testimonial-border">
                    <div class="pic">
                      <img src={Thomas} alt=""/>
                    </div>
                    <p class="description">
                      " blablabla "
                    </p>
                    <h3 class="testimonial-title">Thomas Pauly</h3>
                    <span class="post"> Consultant Business Intelligence </span>
                    <div class="col-xs-12 user-social text-center">
                      <a href="https://www.linkedin.com/in/thomas-pauly-/" target="_blank" title="Linkedin"> <img src={Linkedin} class ="img-pxl" alt=""/></a>
                      <a href="mailto:thomas.pauly@wanadoo.fr" target="_blank" title="Mail"> <img src={Mail} class ="img-pxl2" alt=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>coucou</p> <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="pos-accueil">
            <p>acceuil</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>caca</p>
        <br/>
        <br/>
        <p><button> test</button></p>
        <br/>
        <br/>
        <br/>
      </body>
      <footer>
        <p>Copyright © Thomas Pauly</p>
        </footer>
    </div>
  );
}

export default App;
