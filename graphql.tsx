import { gql } from "@apollo/client";

export const Getdata = gql`
  query gettodosdata {
    todos {
      id
      text
      isCompleted
    }
  }
`;

export const Add_list = gql`
  mutation create($text: String!) {
    createTodo(data: { text: $text }) {
      text
      id
    }
  }
`;
