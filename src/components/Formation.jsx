import React from "react";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';
// Date
var d = new Date();
var day = d.getMonth()+1;
var year = d.getUTCFullYear();


function Formation() {
  return (
    <div className="formation">
      <hr class="container" id="pos_formation"/>
      <div class="container text-left" >
          <h2 class="featurette-heading " >Formations</h2>
          <br/>
          <h3> Auto Formation</h3>
          <h4> Udemy, OpenClassroom </h4>
          <h5> 03/2020 - {day}/{year}</h5>
          <ul>
            <li><i>Domaines:</i> : Java, GitHub, Python, React, Espagnol </li>
          </ul>
      </div>
      <div class="container text-left" >
          <h3> Formation intensive en Espagnol</h3>
          <h4> Chambre de Commerce et d'Industrie </h4>
          <h5> 10/2019 - 11/2019</h5>
          <ul>
            <li>Formation intensive en Espagnol d'une durée de 1 mois  </li>
          </ul>
      </div>
      <div class="container text-left" >
          <h3> Formation professionnalisante en Business Intelligence</h3>
          <h4> DTA Ingénierie </h4>
          <h5> 02/2018 - 06/2018, Nantes - France</h5>
          <ul>
            <li> <a href="https://www.dta-ingenierie.fr/formation/parcours-de-formation-developpeur-decisionnel/" target="_blank">Voir le programme </a> </li>
          </ul>
      </div>
      <div class="container text-left" >
          <h3> Licence Professionnelle - Statistique et Informatique Décisionnelle pour le Management de la Qualité</h3>
          <h4> Université de Pau et des Pays de l'Adour </h4>
          <h5> 09/2016 - 02/2017, Pau - France</h5>
          <ul>
            <li> <a href="https://iutpa.univ-pau.fr/fr/formations/offre-de-formation/licence-professionnelle-13/sciences-technologies-sante-STS/licence-pro-metiers-du-decisionnel-et-de-la-statistique-59_1.html#programContentcfccffcf-ae65-4c0c-a9a3-63fabb161fc2-1" target="_blank">Voir le programme </a> </li>
          </ul>
      </div>
      <div class="container text-left" >
          <h3> DUT - Statistique et Informatique Décisionnelle</h3>
          <h4> Université de Pau et des Pays de l'Adour </h4>
          <h5> 09/2013 - 05/2016, Pau - France</h5>
          <ul>
            <li> <a href="https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/diplome-universitaire-de-technologie-dut-11/dut-statistiques-et-informatique-decisionnelle-IGXRLBJ9.html" target="_blank">Voir le programme </a> </li>
          </ul>
      </div>
    </div>
  );
}

export default Formation;