import * as React from 'react';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-head">
                    <div className="Header-rating">
                        <p>Rating - </p>
                        <img id="first-star" src="star-solid.svg" alt="star-solid-rating"/>
                        <img src="star-solid.svg" alt="star-solid-rating"/>
                        <img src="star-solid.svg" alt="star-solid-rating"/>
                        <img src="star-solid.svg" alt="star-solid-rating"/>
                        <img src="star-solid.svg" alt="star-solid-rating"/>
                    </div>
                    <div className="Header-head-text">
                        <span className="slog-header">Sell and buy for the benefit of <span>#everyone</span></span>
                        <span>platform-for-buying-selling-cars</span>
                    </div>
                </div>
            </div>
        );
    };
};
