import React from 'react'
import './App.css';
import Header from './Header/Header'
import Order from './Order/Order'
import PanelAdmin from './PanelAdmin/PanelAdmin'



export default class App extends React.Component {

    state = {
        carModel: {},
        order: {}
    }

    addCarModel = (carModel) => {
        console.log(carModel)
        // copy model car
        let carModels = {...this.state.carModel}
        // add new model in variable
        carModels = carModel;
        // write new object model to state
        this.setState({carModels})
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Order/>
                <PanelAdmin addCarModel={this.addCarModel}/>
            </div>
        );
}}

