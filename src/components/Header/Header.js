import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="#default" className="logo"></a>
                <h1>My Account</h1>
                <div className="header-right ">
                    <NavLink exact to="/">Главная</NavLink>
                    <NavLink to="/about">О нас</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                </div>
            </div>
        )
    }
}
