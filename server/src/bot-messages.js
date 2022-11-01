import { getCurrentHourAndMinutes } from './utils.js';

const basicMessage = {
  time: getCurrentHourAndMinutes()
}

export function greeting() {
  return {
    ...basicMessage,
    type: 'greeting',
    content: 'Hello, I am your bot. You can ask here anything you want, and I will do my best to help you. Enjoy!',
  };
};

export function answer(content, question, questionID) {
  return {
    ...basicMessage,
    type: 'answer-from-bot',
    content,
    question,
    questionID
  };
};

export function suggestions(suggestions, question) {
  return {
    ...basicMessage,
    type: 'no-answer-from-bot',
    content: 'I don\'t have the answer for this exact question. Please click on one of these similar questions if it fits your intention :)',
    suggestions,
    question
  };
};

export function noAnswer(question) {
  return {
    ...basicMessage,
    type: 'no-answer-from-bot',
    content: 'Sadly, I don\'t know the answer yet...',
    question
  };
};

