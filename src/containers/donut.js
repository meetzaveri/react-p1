import React, { Component } from 'react';
import FiveLayerCircle from './five-layer-donut';
import FourLayerCircle from './four-layer-donut';
import ThreeLayerCircle from './three-layer-donut'
import TwoLayerCircle from './two-layer-donut';
import ProgressBar from './progress-layer-donut';

class Donut extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                {/* <FiveLayerCircle />
                <FourLayerCircle  />
                <ThreeLayerCircle />
                <TwoLayerCircle /> */}
                <ProgressBar />
            </div>
        );
    }
}

export default Donut;
