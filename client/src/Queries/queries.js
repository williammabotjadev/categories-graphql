import { gql, useQuery } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            title
            }
        }
    `;

  