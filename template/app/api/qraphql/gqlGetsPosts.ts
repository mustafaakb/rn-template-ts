import {gql} from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($limit: Int) {
    posts(limit: $limit) {
      id
      body
      title
      createdAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    insert_posts(objects: {title: $title, body: $body}) {
      affected_rows
    }
  }
`;
