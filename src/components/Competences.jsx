
import React from "react";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';

function Competences() {
  return (
    <div className="competences">
      <div class="container">
        <div>
          <h2 class=" title featurette-heading">Compétences</h2>
          <br/>
          <h3> Technologies</h3>
          <div class="container">
            <div class="row">
              <div class="div-comp-l w-100 p-3 col-sm">
                Talend
              </div>
              <div class="div-comp-r w-100 p-3 col-sm">
                QlikView
              </div>
            </div>
            <div class="row">
              <div class="div-comp-l w-100 p-3 col-sm">
                HTML
              </div>
              <div class="div-comp-r w-100 p-3 col-sm">
                Joomla
              </div>
            </div>
            <div class="row">
              <div class="div-comp-l w-100 p-3 col-sm">
                Visual Basic for Applications
              </div>
              <div class="div-comp-r w-100 p-3 col-sm">
                React
              </div>
            </div>
            <div class="row">
              <div class="div-comp-l w-100 p-3 col-sm">
                Méthodess Agiles
              </div>
              <div class="div-comp-r w-100 p-3 col-sm">
                Github
              </div>
            </div>
          </div>
          <br/>
          <h3> Langues</h3>
          <div class=" container text-middle ">
            <div class="row">
              <div class="div-comp-l w-100 p-3 col-sm">
                Anglais ★★★✩✩
              </div>
              <div class="div-comp-r w-100 p-3 col-sm">
                Espagnol ★★✩✩✩
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;