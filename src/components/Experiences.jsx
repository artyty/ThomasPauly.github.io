
import React from "react";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';

function Experiences() {
  return (
    <div className="competences">
      <div class="container text-left" >
        <h2 class="title featurette-heading">Expériences</h2>
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
      <hr class="container"/>
      <div class="container text-left">
        <h3> Stagiaire - Développeur VBA</h3>
        <h4> Stélia Aerospace Composites </h4>
        <h5> 03/2017 - 07/2017, Bordeaux- France</h5>
        <ul>
          <li> Améliorer et automatiser l'approvisionnement, en réduisant les stocks et les délais de livraison</li>
          <li> Automatiser plusieurs tâches effectuées (gains de temps, moins de dépenses, moins d'erreurs d'inattention) </li>
          <li> <i>Logiciels</i> : Excel, Word </li>
          <li> <i>Langage </i>Visual Basic for Applications</li>
        </ul>
      </div>      
      <hr class="container"/>
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

export default Experiences;