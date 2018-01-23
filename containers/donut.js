import React, { Component } from 'react';
import FiveLayerCircle from './five-layer-donut';
import FourLayerCircle from './four-layer-donut';

class Donut extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <FiveLayerCircle />
                <FourLayerCircle  />
            </div>
        );
    }
}

export default Donut;
