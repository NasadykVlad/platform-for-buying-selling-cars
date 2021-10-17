import React from 'react'
import './AddOrderForm.css'
import Button from '@mui/material/Button';
import uuid from "react-uuid";



export default class AddOrderForm extends React.Component {

    modelRef = React.createRef();
    yearRef = React.createRef();
    priceRef = React.createRef();
    volumeRef = React.createRef();
    runRef = React.createRef();
    fuelRef = React.createRef();
    transmissionRef = React.createRef();
    colorRef = React.createRef();
    imageRef = React.createRef();

    createCarModel = (event) => {
        event.preventDefault()
        const bmwModel = {
            id: uuid(),
            model: this.modelRef.current.value,
            year: parseFloat(this.yearRef.current.value),
            price: parseFloat(this.priceRef.current.value),
            volume: parseFloat(this.volumeRef.current.value),
            run: parseFloat(this.runRef.current.value),
            fuel: this.fuelRef.current.value,
            transmission: this.transmissionRef.current.value,
            color: this.colorRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addCarModel(bmwModel)
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.createCarModel}>
                    <input ref={this.modelRef} type="text" placeholder="Model"/>
                    <input ref={this.yearRef} type="text" placeholder="Year"/>
                    <input ref={this.priceRef} type="number" placeholder="Price in $"/>
                    <select ref={this.volumeRef} name="Volume" id="#">
                        <option defaultValue="" disabled selected>Engine volume:</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="4.4">4.4</option>
                    </select>
                    <input ref={this.runRef} type="number" placeholder="Run"/>
                    <select ref={this.fuelRef} name="Fuel" id="#">
                        <option defaultValue="" disabled selected>Fuel:</option>
                        <option value="Diesel">Diezel</option>
                        <option value="Gas">Gas</option>
                    </select>
                    <select ref={this.transmissionRef} name="Transmission" id="#">
                        <option defaultValue="" disabled selected>Transmission:</option>
                        <option value="Automat">Automat</option>
                        <option value="Manual">Manual</option>
                    </select>
                    <input ref={this.colorRef} type="text" placeholder="Color"/>

                    <input ref={this.imageRef} type="text" placeholder="Image link"/>

                    <Button type="submit" variant="contained" color="success">
                        Add car model
                    </Button>
                </form>
            </div>
        )
    }
}
