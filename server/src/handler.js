import { index, search, advancedSearchFussy } from './elastic-methods.js';
import { getAmountOfMatches, getMatch, getCurrentHourAndMinutes } from './utils.js';
import { answer, suggestions, noAnswer } from './bot-messages.js'; 

export async function indexQuestion(question, answer) {
  const ducument = {
    question,
    answer
  };
  try {
    await index('questions', ducument);
  }
  catch (e) {
    console.log(e);
  }
}

export async function responseHandler(content, questionID) {
  const exactMatches = await getExactMatches(content);
  if (exactMatches !== null) return answer(exactMatches, content, questionID);
  
  const closeMatches = await getCloseMatches(content);
  if (closeMatches !== null) return suggestions(closeMatches, content);

  return noAnswer(content);
}

async function getExactMatches(content) {
  try {
    const matchResult = await search('questions', content);
    const matchResultAmount = getAmountOfMatches(matchResult);
    if (matchResultAmount > 0) {
      const matchResultData = getMatch(matchResult)?.answer;
      return matchResultData;
    }
    return null;
  }
  catch (e) {
    console.log(e);
  }
}

async function getCloseMatches(content) {
  const SUGGESTIONS_AMOUNT = 3;
  try {
    const advancedSearchResult = await advancedSearchFussy('questions', content);
    const matchResultAmount = getAmountOfMatches(advancedSearchResult);
    if (matchResultAmount > 0) {
      const suggestions = [];
      for (let i = 0; i < Math.min(SUGGESTIONS_AMOUNT, matchResultAmount); i++) {
        suggestions.push(getMatch(advancedSearchResult, i)?.question);
      }
      return suggestions;
    }
    return null;
  }
  catch (e) {
    console.log(e);
  }
}