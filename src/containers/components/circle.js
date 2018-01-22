import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Doughnut = styled.div`
    top: 40px;
    left: 40px;
    background: white;
    width: 220px;
    height: 220px;
    display: block;
    -webkit-clip: auto;
    clip: auto;
    position: absolute;
    border-radius: 50%;
    z-index : 2147483647;
`

const Slice = styled.div`
    -webkit-transform:rotate(${props => props.slicedegree}deg);
    transform: rotate(${props => props.slicedegree}deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    clip : ${props => props.clipnative ? 'rect(0px, 300px, 300px, 150px)' : 'auto'};
    z-index : ${props => props.z_axis}
`
const Pie = styled.div`
    background-color: ${props => props.piebg};
    -webkit-transform:  rotate(${props => props.degree}deg);
    transform: rotate(${props => props.degree}deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    clip : ${props => props.clipnative ? 'rect(0px, 300px, 300px, 150px)' : 'auto'};
`

class Circle extends Component{
    constructor(props){
        super(props);
        this.state = {
            leaveEqual : this.props.shouldRemainEqual,
            pie : this.props.pievalues,
            slice : this.props.slicevalues,
            arbArr : {}
        }
    }

    componentWillMount(){
        let counter = 0;
        console.log(Object.values(this.state.pie));
        let val = Object.values(this.state.pie);
        console.log(val);
        var newval = val.sort(function (a,b) {
            return a - b;
        });
        console.log(newval);
        console.log(this.state.arbArr + 'arbarr');
    }
    
    render(){
        return(
            <div>
                <Button onClick={console.log(this.state.arbArr + ' arbarr')}> Not primary </Button> 
                <Button primary> Primary </Button>
                { 
                  this.state.leaveEqual === false ? (
                        <div> 
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
                    ) :
                    (
                    <div>
                    <Slice  slicedegree={36 - this.state.pie.p1}>
                        <Pie piebg="yellow" degree={ 252 + this.state.pie.p1} />
                    </Slice> 
                    <Slice clipnative slicedegree={ 72 - this.state.pie.p2}  z_axis={this.state.pie.p2}>
                        <Pie clipnative piebg="red" degree={ 252 + this.state.pie.p2} />
                    </Slice> 
                    <Slice clipnative slicedegree={ 144 - this.state.pie.p3}  z_axis={this.state.pie.p3}>
                        <Pie clipnative piebg="pink" degree={ 252 + this.state.pie.p3} />
                    </Slice> 
                    <Slice clipnative slicedegree={ 216 - this.state.pie.p4}  z_axis={this.state.pie.p4}>
                        <Pie clipnative piebg="blue" degree={ 252 + this.state.pie.p4} />
                    </Slice> 
                    <Slice clipnative slicedegree={ 288 - this.state.pie.p5}  z_axis={this.state.pie.p5}>
                        <Pie clipnative piebg="green" degree={ 252 + this.state.pie.p5} />
                    </Slice> 
                </div> 
                 )
                }
                
                <Doughnut />
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