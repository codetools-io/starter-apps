/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookmark = /* GraphQL */ `
  query GetBookmark($id: ID!) {
    getBookmark(id: $id) {
      id
      componentId
      categoryId
      moduleId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        componentId
        categoryId
        moduleId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
