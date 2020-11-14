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
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Bonjour, comment vous appelez-vous?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Enchanté {previousValue}!',
    end: true,
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
    <br/>
    <div  class="container"> 
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} 
        speechSynthesis={{ enable: true, lang: 'fr' }}
        headerTitle={"Thombot"} 
        botAvatar={Robot} 
      />;
    </ThemeProvider></div>
  </div>
);

export default Home;