import React, { Component } from 'react';
import styled from 'styled-components';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';

const distributedLayerDoughnut = () => (
    <div style={{position : 'relative'}}> 
        <Slice  slicedegree="36">
            <Pie piebg="yellow" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="72">
            <Pie clipnative piebg="red" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="144" >
            <Pie clipnative piebg="pink" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="216">
            <Pie clipnative piebg="blue" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="288">
            <Pie clipnative piebg="green" degree="252" />
        </Slice>
    </div>
)

export default distributedLayerDoughnut;