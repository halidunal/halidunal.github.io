import React, { Component } from 'react'
import Card from "../components/Card"

export default class Home extends Component {
    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <Card/>
            </div>
        )
    }
}
