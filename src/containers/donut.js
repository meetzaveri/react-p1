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
                <FiveLayerCircle toggleEquality={false} chartSize="large"/>
                <FourLayerCircle toggleEquality={false} chartSize="large"/>
                <ThreeLayerCircle toggleEquality={false} chartSize="large"/>
                <TwoLayerCircle toggleEquality={false} chartSize="large"/>
                <ProgressBar chartSize="large"/>
            </div>
        );
    }
}

export default Donut;
