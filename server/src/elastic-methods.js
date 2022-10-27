import { elasticClient } from "./elastic-client.js";

export async function index(indexName, data) {
  return await elasticClient.index({
    index: indexName,
    document: data
  });
}

export async function search(indexName, question) {
  return await elasticClient.search({
    index: indexName,
    query: {
      match_phrase: {
        question: { query: question }
      }
    }
  });
}

export async function advancedSearch(indexName, question) {
  console.log(question);
  return await elasticClient.search({
    index: indexName,
    query: {
      more_like_this: {
        fields: ["question"],
        like: question,
        min_term_freq: 1
      }
    }
  });
}

export async function advancedSearchFussy(indexName, question) {
  console.log(question);
  return await elasticClient.search({
    index: indexName,
    query: { fuzzy: { question } }
  });
}