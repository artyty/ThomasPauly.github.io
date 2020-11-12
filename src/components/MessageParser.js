// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
      if (lowerCaseMessage.includes("security")) {
        this.actionProvider.handleSecurityList();
      }
      if (lowerCaseMessage.includes("formation")) {
        this.actionProvider.handleFormationList();
      }
    }
  }
  
  export default MessageParser;
  