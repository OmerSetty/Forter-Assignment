import { elasticClient } from "./elastic-client.js";

export async function index(indexName, data) {
  return elasticClient.index({
    index: indexName,
    document: data
  });
}

export async function search(indexName, question) {
  return elasticClient.search({
    index: indexName,
    query: {
      match_phrase: {
        question: { query: question }
      }
    }
  });
}

export async function advancedSearchFussy(indexName, question) {
  return elasticClient.search({
    index: indexName,
    query: { fuzzy: { question } }
  });
}

// export async function advancedSearch(indexName, question) {
//   return elasticClient.search({
//     index: indexName,
//     query: {
//       more_like_this: {
//         fields: ["question"],
//         like: question,
//         min_term_freq: 1
//       }
//     }
//   });
// }

// export async function deleteAll(indexName) {
//   return elasticClient.deleteByQuery({
//     index: indexName,
//     body: { query: { match_all: {} } }
//   });
// }
