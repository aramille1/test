import React, { Component } from 'react'
import Header from '../Header/Header'
import axios from 'axios';

export default class About extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }
    render() {
        return (
            <div>
                <Header />
                <ul>
                    {this.state.users.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}
