import React from 'react';
import Circle from './circle';
import MediumSizedDoughnut from './medium';
import LargeSizedDoughnut from './large';
import SmallSizedDoughnut from './small';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        if(this.props.chartSize == 'large'){
            return (<LargeSizedDoughnut  bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2'}} pievalues={{p1:5,p2:20}}/>);
        }
        else if(this.props.chartSize == 'medium') {
            return (<MediumSizedDoughnut  bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2'}} pievalues={{p1:5,p2:20}}/>);
        }
        else if(this.props.chartSize == 'small') {
            return (<SmallSizedDoughnut  bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2'}} pievalues={{p1:5,p2:20}}/>);
        }
        else {
            return(<Circle shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2'}} pievalues={{p1:5,p2:20}}/>);
        }
    }
}

export default Main;

