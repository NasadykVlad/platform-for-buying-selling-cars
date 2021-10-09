import React from 'react'
import './Landing.css'
import SelectedCarBrand from "../SelectCarBrand";

export default function Landing(props) {
        return (
            <div className="Landing">
                <div className="select_brand">
                    <div className="select_brand_top">
                        <div className="select_brand_top_header">
                            <span>Select the car brand</span>
                        </div>
                        <div className="arrow_picker">
                            <div className="arrow_picker_up">

                            </div>
                            <div className="arrow_picker_down">

                            </div>
                        </div>
                    </div>

                    <div className="select_brand_bottom">
                        <ul>
                            {
                                props.carsBrands.map((brand) => {
                                    return (
                                        <SelectedCarBrand brandName={brand.brand} key={brand.id}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <button>Go to the store of the selected car brand</button>

            </div>
        )
}
