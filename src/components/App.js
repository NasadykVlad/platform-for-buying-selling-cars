import React from 'react'
import './App.css';
import Header from './Header/Header'
import Order from './Order/Order'
import PanelAdmin from './PanelAdmin/PanelAdmin'
import OtherCar from './carModels/carModels'



export default class App extends React.Component {

    state = {
        carModel: {},
        order: {}
    }

    addCarModel = (carModel) => {
        // copy model car
        let carModels = {...this.state.carModel}
        // add new model in variable
        carModels = carModel;
        // write new object model to state
        this.setState({carModels})
    }

    loadAllCarModels = (carModels) => {
        this.setState({carModel: carModels})
        console.log(this.state.carModel)
    }

    render() {
        return (
            <div className="App">
                <div className="Menu">
                    <Header/>
                    <ul className="CarModels">
                        {Object.keys(this.state.carModel).map(key => {
                            return <OtherCar key={key} index={key} details={this.state.carModel[key]}/>
                        })}
                    </ul>
                </div>
                <Order/>
                <PanelAdmin addCarModel={this.addCarModel} loadAllCarModels={this.loadAllCarModels}/>
            </div>
        );
}}

