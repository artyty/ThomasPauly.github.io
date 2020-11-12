// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Optionchatbot from "./Optionchatbot";
import Lienchatbot from "./Lienchatbot";

const config = { 
  botName: "Thombot",
  initialMessages: [
    createChatBotMessage("Bonjour, que voulez-vous savoir?", {
      widget: "Optionchatbot",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "Optionchatbot",
      widgetFunc: (props) => <Optionchatbot {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <Lienchatbot {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "securityLinks",
      widgetFunc: (props) => <Lienchatbot {...props} />,
      props: {
        options: [
          {
            text: "Coucou",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "formationLinks",
      widgetFunc: (props) => <Lienchatbot {...props} />,
      props: {
        options: [
          {
            text: "A",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "B",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "C",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config