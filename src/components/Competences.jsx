
import React from "react";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';

function Competences() {
  return (
    <div className="competences">
       <hr class="container" id="pos_competence"/>
      <div class="container">
        <div>
          <h2 class="featurette-heading">Technologies</h2>
          <br/>
          
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
    </div>
  );
}

export default Competences;