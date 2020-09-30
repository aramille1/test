import React, { Component } from 'react'
import { FcBookmark } from 'react-icons/fc';
import './Home.scss'
import Header from '../Header/Header'
export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="con">
                    <div className="c-b-wrap">
                        <div className="c-b-item">
                            <FcBookmark size={50} />
                            <span>Мои счета</span>
                        </div>
                        <div className="c-b-item">
                            <FcBookmark size={50} />
                            <span>Мои счета</span>
                        </div>
                        <div className="c-b-item">
                            <FcBookmark size={50} />
                            <span>Мои счета</span>
                        </div>
                        <div className="c-b-item">
                            <FcBookmark size={50} />
                            <span>Мои счета</span>
                        </div>
                        <div className="c-b-item">
                            <FcBookmark size={50} />
                            <span>Мои счета</span>
                        </div>
                    </div>
                    <div className="c-s-wrap">
                        <div className="c-s-item"><img src="https://lh3.googleusercontent.com/proxy/KMlmyJL8SS_5ttwMDv_ABc837TqpNlGWvCPEXdiekrFNmsTAlk5ZVD--xx_hIWg5nSpsXNe8hcq3DINwLZSmGNQ7xLlwYoDKWUQIFdKGe59tzHdjsUGlY6bgaA" alt="" /></div>
                        <div className="c-s-item">small 2</div>
                        <div className="c-s-item">small 3</div>
                    </div>
                </div>
            </>
        )
    }
}
