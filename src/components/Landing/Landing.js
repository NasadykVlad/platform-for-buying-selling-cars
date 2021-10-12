import React from 'react'
import './Landing.css'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default class Landing extends React.Component {

    state = {
        display: false,
        brand: '',
        url: '',
    }

    displayList = () => {
        const {display} = this.state;

        if (!this.state.brand) {
            this.setState({display: !display})
        }

    }

    getBrand = (car) => {
        let {brand, url} = car;
        this.setState({brand: brand, url: url, display: false})
    }

    goToPlatform = () => {
    const {url} = this.state;
    this.props.history.push(`/cars/${url}`)
    }

    goBackToSelect = () => {
        this.setState({brand: '', url: '', display: false})
    }

    render() {
        return (
            <div className="Landing">
                <div className="select_brand">
                    <div className="select_brand_top">
                        <div onClick={this.displayList} className="select_brand_top_header">
                            { this.state.brand ? <h1>{this.state.brand}</h1> : <Button className="btn_show" variant="contained">Click to show car brand</Button>}
                        </div>
                    </div>

                    {this.state.display === true ?
                        <div className="selects_brand_bottom">
                            <ul>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.brand}
                                            label="Brand">
                                            {
                                                this.props.carsBrands.map((brand) => {
                                                    return (
                                                        <MenuItem value={brand.brand} onClick={() => this.getBrand(brand)} key={brand.id} >
                                                            {brand.brand}
                                                        </MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>

                            </ul>
                        </div>
                        : false}
                    </div>

                {this.state.brand && !this.state.display ?  (<Button onClick={this.goToPlatform} className="btn_selected" variant="contained">selected car brand</Button>) : false}
                {this.state.brand && !this.state.display ?  (<Button onClick={this.goBackToSelect} className="btn" variant="contained">back to brands</Button>) : false}
            </div>
            )
        }
}

Landing.propTypes = {
    carsBrands: PropTypes.arrayOf(PropTypes.object)
}


