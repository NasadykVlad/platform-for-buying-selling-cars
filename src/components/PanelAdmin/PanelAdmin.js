import * as React from 'react';
import './PanelAdmin.css'
import AddOrderForm from "../AddOrderForm/AddOrderForm";
import bmwModels from "../../data/bmw-models";
import Button from "@mui/material/Button";


export default class PanelAdmin extends React.Component {
    render() {
        return (
            <div className="PanelAdmin">
                <h2>Order management:</h2>
                <AddOrderForm addCarModel={this.props.addCarModel}/>
                <Button onClick={() => {this.props.loadAllCarModels(bmwModels)}} className="button" type="submit" variant="contained" color="success">
                    Download all car models from history
                </Button>
            </div>
        );
    };
};
