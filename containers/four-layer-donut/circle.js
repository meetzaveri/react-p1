import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';
import DistributedLayerDoughnut from './distributedLayerDoughnut';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Circle extends Component{
    constructor(props){
        super(props);
        this.state = {
            leaveEqual : this.props.shouldRemainEqual,
            pie : this.props.pievalues,
            slice : this.props.slicevalues,
        }
    }
    
    render(){
        const { p1,p2,p3,p4,p5 } = this.state.pie;
        return(
            <div>
                <Button > Not primary </Button> 
                <Button primary> Primary </Button>
                { 
                  this.state.leaveEqual === false ? (<DistributedLayerDoughnut />) :(
                <div className ="wrapper" style={{position : 'relative'}}>
                    <Slice piebg="yellow">
                        <Slice  slicedegree={ 36 - p1 } >
                            <Pie piebg="black" degree={ 36 + p1} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 72 - p2}  z_axis={p2}>
                            <Pie clipnative piebg="red" degree={ 252 + p2} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 144 - p3  }  z_axis={p3}>
                            <Pie clipnative piebg="pink" degree={ 252 + p3} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 216 - p4 }  z_axis={p4}>
                            <Pie clipnative piebg="blue" degree={ 252 + p4} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 288 - p5 }  z_axis={p5}>
                            <Pie clipnative piebg="green" degree={ 252 + p5} />
                        </Slice> 
                    </Slice>
                </div> 
                 )
                }
                
                <DoughnutWrapper />
            </div>
        );
    }
}

Circle.propTypes = {
    shouldRemainEqual : PropTypes.bool,
    pievalues : PropTypes.object,
    slicevalues : PropTypes.object
}

export default Circle;