import * as React from 'react';
import './OtherCar.css'

export default class OtherCar extends React.Component {
    render() {

        const {model, year, price, volume, run, fuel, transmission, color, img_link} = this.props.details

        return (
            <li className="OtherCar">
                <div className="picture">
                    <img src={img_link} alt="car-model-image"/>
                </div>
                <div className="info-car">
                    <span className="first-letter">Model: <span>BMW {model}</span></span>
                    <span className="first-letter">Year: <span>{year}</span></span>
                    <span className="first-letter">Engine volume: <span>{(volume + 0.01).toFixed(1)} {fuel}</span></span>
                    <span className="first-letter">Run: <span>{run}</span></span>
                    <span className="first-letter">Transmission: <span>{transmission}</span></span>
                    <span className="first-letter">Color: <span>{color}</span></span>
                    <span className="first-letter">Price: <span className="price">{price}$</span></span>
                </div>
            </li>
        );
    };
};
