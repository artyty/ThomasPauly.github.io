import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thomas from './Thomas.jpg';
//navbar navbar-default navbar-fixed-top navbar-inverse font-header
function App() {
  return (
    <div className="App">
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark  bg-dark ">
          <div class="d-flex flex-grow-1">
           <span class="w-100 d-lg-none d-block"></span>
            <a class="navbar-brand po-AndaleMono Green" href="#pos-accueil" >tpauly@business_intelligence ~ $</a>
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
                  <a class="nav-link " href="#_langue">~/Langues</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </header> 
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
      
<section class="section pb-3 text-center">

  
  <h1 class="section-heading h1 pt-4">Testimonials</h1>
  
  <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur
    accusamus veniam.</p>

  <div class="row">

   
    <div class="col-lg-4 col-md-12 mb-4">

     
      <div class="card testimonial-card">

       
        <div class="card-up lighten-2 ">
        </div>

       
        <div class="avatar mx-auto white"><img src={Thomas}
            alt="avatar mx-auto white" class="rounded-circle img-fluid"/>
        </div>

        <div class="card-body">
         
          <h4 class="card-title mt-1">John Doe</h4>
          <hr/>
         
          <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            adipisci.</p>
        </div>

      </div>
     

    </div>
    

   
    <div class="col-lg-4 col-md-12 mb-4">

     
      <div class="card testimonial-card">

     
        <div class="card-up lighten-2" style={{ backgroundColor: "green" }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>

       
        <div class="avatar mx-auto white"><img src={Thomas}
            alt="avatar mx-auto white" class="rounded-circle img-fluid"/>
        </div>

        <div class="card-body">
        
          <h4 class="card-title mt-1">Anna Aston</h4>
          <hr/>
         
          <p><i class="fas fa-quote-left"></i> Neque cupiditate assumenda in maiores repudiandae mollitia
            architecto.</p>
        </div>

      </div>
   

    </div>
  

    
    <div class="col-lg-4 col-md-12 mb-4">

    
      <div class="card testimonial-card">

     
        <div class="card-up deep-purple lighten-2"a></div>

    
        <div class="avatar mx-auto white"><img src={Thomas}
            alt="avatar mx-auto white" class="rounded-circle img-fluid"/>
        </div>

        <div class="card-body">
         
          <h4 class="card-title mt-1">Maria Kate</h4>
          <hr/>
        
          <p><i class="fas fa-quote-left"></i> Delectus impedit saepe officiis ab aliquam repellat, rem totam
            unde ducimus.</p>
        </div>

      </div>
     

    </div>
    

  </div>

</section>

        
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
    </div>
  );
}

export default App;
