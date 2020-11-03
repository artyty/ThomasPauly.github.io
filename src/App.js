import React, { Component } from 'react';
import { Container,Button,lightColors, darkColors, Link } from 'react-floating-action-button';/**/
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*images*/
import Thomas from './img/Thomas.jpg';
import Linkedin from './img/linkedin.ico';
import Mail from './img/mail.ico';
import Up from './img/up.png';


var d = new Date();
var day = d.getMonth()+1;
var year = d.getUTCFullYear();


 document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("return-top").className = (window.pageYOffset > 100) ? "nothidden" : "hidden";
  };
});


//navbar navbar-default navbar-fixed-top navbar-inverse font-header
function App() {
  return (
    <div className="App">
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-color ">
          <div class="d-flex flex-grow-1">
           <span class="w-100 d-lg-none d-block"></span>
            <a class="navbar-brand po-AndaleMono Green" href="#" >tpauly ~ $</a>
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
                  <a class="nav-link" href="#pos_competence">~/Competences</a>
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
        <hr class="featurette-divider" id="pos-experience"/>
        <div class="row featurette" >
          <div class="col-md-7">
            <h2 class="featurette-heading">Expériences</h2>
            <h3> Développeur Business Intelligence</h3>
            <h4> DTA Ingénierie - Business et Décision </h4>
            <h5> 06/2018 - 11/2018, Toulouse - France</h5>
            <ul>
              <li><i>Tâches</i> : Correction et traitement de données, Reporting pour l'aide à la décision et Gérer les droits d'accès des applications</li>
              <li> <i>Clients</i> : Orange et Toulouse Métropole Habitat </li>
              <li> <i>Logiciels</i> : Talend, QlikView, phpMyAdmin, Oracle </li>
            </ul>
          </div>
        </div>
        <div class="row featurette">
          <div class="col-md-7">
            <h3>Stagiaire - Développeur VBA</h3>
            <h4> Stélia Aerospace Composites </h4>
            <h5> 03/2017 - 07/2017, Bordeaux- France</h5>
            <ul>
              <li>Améliorer et automatiser l'approvisionnement, en réduisant les stocks et les délais de livraison</li>
              <li> Automatiser plusieurs tâches effectuées (gains de temps, moins de dépenses, moins d'erreurs d'inattention) </li>
              <li> <i>Logiciels</i> : Excel, Word </li>
              <li> <i>Langage </i>Visual Basic for Applications</li>
            </ul>
          </div>
        </div>
        <div class="row featurette">
          <div class="col-md-7">
            <h3> Projet Universitaire Informatique et Statistique</h3>
            <h4> Section Paloise </h4>
            <h5> 09/2015 - 11/2016, Pau - France</h5>
            <ul>
              <li> Création d'une application analysant les données récoltées lors des matchs et des entrainements des joueurs de rugby de Pau</li>
              <li> Analyse de ces données pour anticiper les possibles douleurs et blessures </li>
              <li> <i>Logiciels</i> : Excel, Statistica, R Studio </li>
            </ul>
          </div>
        </div>
        <hr class="featurette-divider" id="pos_formation"/>
        <div class="row featurette" >
          <div class="col-md-7">
            <h2 class="featurette-heading">Formations</h2>
            <h3> Auto Formation</h3>
            <h4> Udemy, OpenClassroom </h4>
            <h5> 03/2020 - {day}/{year}</h5>
            <ul>
              <li><i>Domaines:</i> : Java, GitHub, Python, React, Espagnol </li>
            </ul>
          </div>
        </div>
        <div class="row featurette" >
          <div class="col-md-7">
            <h3> Formation intensive en Espagnol</h3>
            <h4> Chambre de Commerce et d'Industrie </h4>
            <h5> 10/2019 - 11/2019</h5>
            <ul>
              <li>formation intensive en Espagnol d'une durée de 1 mois  </li>
            </ul>
          </div>
        </div>
        <div class="row featurette" >
          <div class="col-md-7">
            <h3> Formation professionnalisante en Business Intelligence</h3>
            <h4> DTA Ingénierie </h4>
            <h5> 02/2018 - 06/2018, Nantes - France</h5>
            <ul>
              <li> <a href="https://www.dta-ingenierie.fr/formation/parcours-de-formation-developpeur-decisionnel/" target="_blank">Voir le programme </a> </li>
            </ul>
          </div>
        </div>
        <div class="row featurette" >
          <div class="col-md-7">
            <h3> Licence Professionnelle - Statistique et Informatique Décisionnelle pour le Management de la Qualité</h3>
            <h4> Université de Pau et des Pays de l'Adour </h4>
            <h5> 09/2016 - 02/2017, Pau - France</h5>
            <ul>
              <li> <a href="https://iutpa.univ-pau.fr/fr/formations/offre-de-formation/licence-professionnelle-13/sciences-technologies-sante-STS/licence-pro-metiers-du-decisionnel-et-de-la-statistique-59_1.html#programContentcfccffcf-ae65-4c0c-a9a3-63fabb161fc2-1" target="_blank">Voir le programme </a> </li>
            </ul>
          </div>
        </div>
        <div class="row featurette" >
          <div class="col-md-7">
            <h3> DUT - Statistique et Informatique Décisionnelle</h3>
            <h4> Université de Pau et des Pays de l'Adour </h4>
            <h5> 09/2013 - 05/2016, Pau - France</h5>
            <ul>
              <li> <a href="https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/diplome-universitaire-de-technologie-dut-11/dut-statistiques-et-informatique-decisionnelle-IGXRLBJ9.html" target="_blank">Voir le programme </a> </li>
            </ul>
          </div>
        </div>
        <hr class="featurette-divider" id="pos_competence"/>
        <div class="row featurette" >
          <div>
            <h2 class="featurette-heading">Technologies</h2>
            <h5> Compétences</h5>
            <div class="container">
              <div class="row text-center">
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Talend</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>QlikView</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Joomla</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Sphinx</p>  </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>HTMl</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Visuak Basic for Applications</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Méthodes Agiles</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>React</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>Github</p>
                </div>
              </div>
            </div>
            <h5> Langues</h5>
            <div class="container">
              <div class="row text-center">
                <div class="col-md-6 col-lg-4 p-3">
                  <p> Français ★★★★★</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>  Anglais ★★★✩✩</p>
                </div>
                <div class="col-md-6 col-lg-4 p-3">
                  <p>  Espagnol ★★✩✩✩</p>
                </div>
              </div>
             </div>
          </div>
        </div> 
      
        <Container>
          <div> 
           <a  id="return-top" class="hidden"  href="#"> <div class="div-top"> <img src={Up} class="img-up "/> </div></a>
          </div>
        </Container>
      </body>
      <footer>
        <p>Copyright © 2020 Thomas Pauly</p>
        </footer>
    </div>
  );
}

export default App;
