import React from 'react';
import { Container} from 'react-floating-action-button';
// Import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import pages
import { Navigation, Footer, Home, Competences, Formation, Experiences } from "./components";
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import './App.css';
/*images*/
import Up from './img/up.png';


// Return top
 document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("return-top").className = (window.pageYOffset > 100) ? "nothidden" : "hidden";
  };
});





function App() {

  return (
  <div className="App">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
    </head>   
    {/*Menu*/}
      <Router>
        <Navigation/>
        <HashRouter>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/experiences" exact component={() => <Experiences />} />
          <Route path="/competences" exact component={() => <Competences />} />
          <Route path="/formation" exact component={() => <Formation />} />
        </HashRouter>
        <Footer/>
      </Router>
      <Container>

        {/* Return Top*/}
        <div> 
          <a  id="return-top" class="hidden"  href="#"> <div class="div-top"> <img src={Up} class="img-up "/> </div></a>
        </div>
      </Container>  
  </div>
  );
}

export default App;
