import * as React from 'react';
import './PanelAdmin.css'
import AddOrderForm from "../AddOrderForm/AddOrderForm";


export default class PanelAdmin extends React.Component {
    render() {
        return (
            <div className="PanelAdmin">
                <h2>Order management:</h2>
                <AddOrderForm addCarModel={this.props.addCarModel}/>
            </div>
        );
    };
};
