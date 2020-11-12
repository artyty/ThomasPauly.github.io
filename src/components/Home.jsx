import React from "react";
/*images*/
import Thomas from '../img/Thomas.jpg';
import Linkedin from '../img/linkedin.ico';
import Mail from '../img/mail.ico';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';

function Home() {
  return (
    <div className="Home">
      <div class="container">
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
      <hr class="container"/>
      <div class="container text-left" >
        <h2 class="featurette-heading">Expériences</h2>
        <br/>
        <h3> Développeur Business Intelligence</h3>
        <h4> DTA Ingénierie - Business et Décision </h4>
        <h5> 06/2018 - 11/2018, Toulouse - France</h5>
        <ul>
          <li><i>Tâches</i> : Correction et traitement de données, Reporting pour l'aide à la décision et Gérer les droits d'accès des applications</li>
          <li> <i>Clients</i> : Orange et Toulouse Métropole Habitat </li>
          <li> <i>Logiciels</i> : Talend, QlikView, phpMyAdmin, Oracle </li>
        </ul>
      </div>
      <div class="container text-left">
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
      <div class="container text-left">
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
  );
}

export default Home;