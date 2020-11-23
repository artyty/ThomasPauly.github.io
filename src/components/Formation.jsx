import React from "react";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';
// import images
import UnivPau from '../img/UnivPau.png';
import Openclassrooms from '../img/Openclassrooms.png';
import DTA from '../img/DTA.png';
import CCI from '../img/CCI.png';
import Udemy from '../img/udemy.jpg';

// Date
var d = new Date();
var day = d.getMonth()+1;
var year = d.getUTCFullYear();


function Formation() {
  return (
    <div className="formation">
      <div class="container">
        <h2 class=" title featurette-heading text-left " >Formations</h2>
      </div>
      <a class="link-formation" href="https://about.udemy.com/fr/" target="_blank">
        <div class="div-form draw meet container text-left ">
          <div class="row">
            <div class="col-md-auto-sm">
              <img src={Udemy} class ="img-formation" />
            </div>
            <div class="col-sm">
              <h3> Auto Formation</h3>
              <h4> Udemy,OpenClassroom </h4>
              <h5> 03/2020 - {day}/{year}</h5>
              <p><i>Domaines</i>: Java, GitHub, Python, React, Espagnol</p>
            </div>
          </div>
        </div>
      </a>
      <a class="link-formation" href="https://www.tarbes.cci.fr/cel-langues" target="_blank">
        <div class="div-form draw meet draw-border container text-left" >
          <div class="row">
            <div class="col-md-auto-sm">
              <img src={CCI} class ="img-formation"/>
            </div>
            <div class="col-sm">
              <h3> Formation intensive en Espagnol</h3>
              <h4> Chambre de Commerce et d'Industrie </h4>
              <h5> 10/2019 - 11/2019</h5>
              <p>Formation intensive en Espagnol d'une durée de 1 mois </p>
            </div>
          </div>            
        </div>
      </a>
      <a class="link-formation" href="https://www.dta-ingenierie.fr/metier/comprendre-le-metier-de-consultant-business-intelligence/" target="_blank">
        <div class="div-form draw meet container text-left" >
          <div class="row">
            <div class="col-md-auto-sm">
              <img src={DTA} class ="img-formation"/>
            </div>
            <div class="col-sm">
              <h3> Formation professionnalisante en Business Intelligence</h3>
              <h4> DTA Ingénierie </h4>
              <h5> 02/2018 - 06/2018, Nantes - France</h5>
              <p> Formation en Informatique Décisionnelles d'une durée de 4 mois </p>
            </div>
          </div>
        </div>
      </a>
      <a  class="link-formation" href="https://iutpa.univ-pau.fr/fr/formations/offre-de-formation/licence-professionnelle-13/sciences-technologies-sante-STS/licence-pro-metiers-du-decisionnel-et-de-la-statistique-59_1.html#programContentcfccffcf-ae65-4c0c-a9a3-63fabb161fc2-1" target="_blank">
        <div class="div-form draw meet container text-left" >
          <div class="row">
            <div class="col-md-auto-sm">
              <img src={UnivPau} class ="img-formation"/>
            </div>
            <div class="col-sm">
              <h3> Licence Professionnelle - Statistique et Informatique Décisionnelle pour le Management de la Qualité</h3>
              <h4> Université de Pau et des Pays de l'Adour </h4>
              <h5> 09/2016 - 02/2017, Pau - France</h5>
              <p> <i>Domaines étudiés</i>: Informatique Décisionnelle, Big Data, Statistique, Méthodes Agiles, Droit </p>
            </div>
          </div>
        </div>
      </a> 
      <a class="link-formation" href="https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/diplome-universitaire-de-technologie-dut-11/dut-statistiques-et-informatique-decisionnelle-IGXRLBJ9.html" target="_blank"> 
        <div class="div-form draw meet container text-left" >
         <div class="row">
            <div class="col-md-auto-sm">
              <img src={UnivPau} class ="img-formation"/>
            </div>
            <div class="col-sm">
              <h3> DUT - Statistique et Informatique Décisionnelle</h3>
              <h4> Université de Pau et des Pays de l'Adour</h4>
              <h5> 09/2013 - 05/2016, Pau - France</h5>
              <p> <i>Domaines étudiés</i>: Probabilité, Statistique, Sondage, Base de données, Programmation (Javascrip, HTML, CSS, PHP) </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Formation;