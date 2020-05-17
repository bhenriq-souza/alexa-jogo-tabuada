const { getRequestType, SkillBuilders } = require('ask-sdk-core');

const { RequestTypes } = require('./constants');

// A primeira request realizada pelo Alexa LEX é a LanchRequest. Neste momento, podemos incluir 
// mensagens de boas vindas e informações iniciais que o usuário receberá.
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return getRequestType(handlerInput.requestEnvelope) == RequestTypes.LAUNCH_REQUEST;
  },
  handle(handlerInput) {

  }
};

// Para todas as ações seguintes, o LEX enviará uma request do tipo IntentHandlerRequest.
// Aqui, realizaremos todas as lógicas das intents da SKILL
const IntentHandler = {
  canHandle(handlerInput) {
    return getRequestType(handlerInput.requestEnvelope) == RequestTypes.INTENT_REQUEST;
  },
  handle(handlerInput) {

  }
};

// Em caso de erros, a SKILL requisitará o ErrorHandler
const ErrorHandler = {
  canHandle(handlerInput) {

  },
  handler(handlerInput) {

  }
};

// Criando a SKILL, reunindo os objetos criados anteriormente
exports.handler = SkillBuilders
  .custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    IntentHandler 
    )
  .addErrorHandlers(
    ErrorHandler
    )
  .lambda();