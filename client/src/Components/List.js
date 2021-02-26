import axios from 'axios';
import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import GET_CATEGORIES from '../Queries/queries';

export default class List extends Component {
    
    state = {
        categoriesList: []
                              
    }

    onComponentDidMount() {
        const data = axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({categoriesList: data})
    }

    render() {
        function Categories({ onCategorySelected }) {
            const { loading, error, data } = useQuery(GET_CATEGORIES);
          
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
          
            return (
              <select name="category" onChange={onCategorySelected}>
                {data.categories.map(category => (
                  <option key={category.title} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            );
          }
          
        return (
            <div>

            <ul>
                {
                    
                    this.state.categoriesList.map((categoryItem) => {
                        return <li key={categoryItem.toString()}>
                            {categoryItem.toString()}
                        </li>
                    })
                    
                }
                </ul>
                {Categories()}
            </div>
        )
    }
}
