import React, { Component } from 'react';
import FiveLayerCircle from './five-layer-donut';

class Donut extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <FiveLayerCircle />
            </div>
        );
    }
}

export default Donut;