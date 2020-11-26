import React from "react";
/*images*/
import Thomas from '../img/Thomas.jpg';
import Linkedin from '../img/linkedin.ico';
import Mail from '../img/mail.ico';
import Smiley from '../img/Smiley.gif';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import CSS
import '../App.css';
// import Chatbot
import ChatBot from 'react-simple-chatbot';
// CSS Chatbot
import { ThemeProvider } from 'styled-components';
import Robot from '../img/robotic2.png';

// all available props
const theme = {
  botAvatar: <img src="Mail"></img>,
  background: '#1d1d1d',
  fontFamily: 'Consolas',
  headerBgColor: '#af8505',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#af8505',
  botFontColor: '#fff',
  userBubbleColor: '#af8505',
  userFontColor: '#fff',
};

const steps = [
  {
    // Hello
    id: '1',
    message: 'Salut, moi c\'est Thombot, comment t\'appelles-tu?',
    trigger: '2',
  },
  {
     // Name
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    // 
    id: '3',
    message: 'Enchanté {previousValue}! Si tu veux en savoir plus sur moi, tu peux cliquer sur les liens ci-dessous',
    trigger: '4',
  },
  {
    // Menu principal
    id: '4',
    options: [
      { value: 1, label: 'A propos de moi', trigger: '5' },
      { value: 2, label: 'Mes Expériences', trigger: '6' },
      { value: 3, label: 'Mes Formations', trigger: '7'},
      { value: 4, label: 'Mes Compétences', trigger: '8' },
    ],
  },
  {
    // Menu Me
    id: '5',
    component: (
      <div>Je m'appelle Thomas Pauly, je viens d'un village proche de Lourdes (dans le 65).
      <br/>J'ai 25 ans et je recherche un emploi en Informatique Décisionnelles </div>
    ),
    asMessage: true,
    trigger: '4',
  },
  {
    // Menu Exp
    id: '6',
    component: (
      <div>J'ai travaillé en Informatique Décisionnelle pour DTA Ingénierie, qui m'ont envoyé en mission chez Businees et Décision durant 6 mois.
      <br/>J'ai aussi effectués des stages et des projets universitaires où j'ai mis en pratique mes connaissances en programmation VBA, Création de site internet et en Statistiques - Sondages.  </div>
    ),
    asMessage: true,
    trigger: '4',
  },
  {
    // Menu Form
    id: '7',
    component: (
      <div>J'ai un diplôme de Licence Professionnelle en Statistique et Informatique Décisionnelle fait à Pau.
      <br/> J'ai aussi effectué une formation de 4 mois en Informatique Décisionnelle chez DTA Ingénierie (équivalent à un niveau bac +5). </div>
    ),
    asMessage: true,
    trigger: '4',
  },
  {
    // Menu Comp
    id: '8',
    options: [
      { value: 1, label: 'Langues',trigger: '9'},
      { value: 2, label: 'Technologie',trigger: '10'},
      { value: 3, label: 'Retourner aux choix précédent', trigger: '4' },
    ],
  },
  {
    // Menu Exp
    id: '9',
    component: ( 
      <div> Je suis natif français et je comprends et parle un peu Anglais et Espagnol ! </div>
    ),
    asMessage: true,
    trigger: '8',
  },
  {
    // Menu Exp
    id: '10',
    component: ( 
      <div>Je maitrise les logiciels suivant : Talend, QlikView, Joomla, Sphinx.
      <br/>Ansi que  Je connais les languagus de programmation VBA, HTML, CSS, Javascript, Java.
      <br/> Et je sais me servir de Git </div>
    ),
    asMessage: true,
    trigger: '8',
  },
];


const Home = () => (
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
                  Bienvenue sur mon site !  <img src={Smiley} /> <br/>
                  Vous pouvez utiliser le Chatbot pour rechercher des informations ou alors naviguer en cliquant sur les liens.
                </p> 
                <ThemeProvider theme={theme}>
                  <ChatBot steps={steps} 
                    width = "100%"
                    height = "400px"
                    hideUserAvatar = "true"
                    headerTitle={"Thombot"} 
                    botAvatar={Robot} 
                  />
                </ThemeProvider>
                <br/>
                <h3 class="testimonial-title">Thomas Pauly</h3>
                <span class="post"> Consultant Business Intelligence </span>
                <div class="col-xs-12 user-social text-center">
                  <a href="https://www.linkedin.com/in/thomas-pauly-/" target="_blank" title="Linkedin"><img src={Linkedin} class ="img-pxl" alt=""/></a>
                  <a> </a>
                  <a href="mailto:thomas.pauly@wanadoo.fr" target="_blank" title="Mail"><img src={Mail} class ="img-pxl2" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);

export default Home;