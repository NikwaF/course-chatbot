const dialogflow = require('dialogflow');
const config = require('../config/keys');
const projectID = config.googleProjectID;
const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey
}
const sessionCLient = new dialogflow.SessionsClient({projectID : projectID, credentials: credentials});
const sessionPath = sessionCLient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);

module.exports = {
  textQuery: async function(text, parameters = {}){
    let self = module.exports;

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: config.dialogFlowSessionLanguangeCode,
        },
      },
      queryParams: {
        payload : {
          data:  parameters
        }
      }
    };

    try{
      let responses = await sessionCLient.detectIntent(request);
      responses = await self.handleAction(responses);
      
      return responses;
    } catch(err) {
      console.log(err);
    }
  },

  handleAction: function(response){
    return response;
  }
}