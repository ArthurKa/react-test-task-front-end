import { request, gql } from 'graphql-request';
import { GraphQLData, ListNode } from 'types';

export const fetchData = async (): Promise<ListNode[]> => {
  const { continents } = await request<GraphQLData>(process.env.REACT_APP_GRAPHQL_API_URL, gql`{
    continents {
      name
      countries {
        name
        languages {
          name
        }
      }
    }
  }`);

  return continents.map(({ name, countries }) => ({
    name,
    children: countries.map(({ name, languages }) => ({
      name,
      children: languages.map(({ name }) => ({
        name,
        children: [],
      })),
    })),
  }));
};
