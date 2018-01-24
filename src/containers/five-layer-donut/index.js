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
            return (<LargeSizedDoughnut style={{'marginTop' : '10px'}} bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}} pievalues={{p1:5,p2:20,p3:35,p4:40,p5:20}}/>);
        }
        else if(this.props.chartSize == 'medium') {
            return (<MediumSizedDoughnut style={{'marginTop' : '10px'}} bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}} pievalues={{p1:5,p2:20,p3:35,p4:40,p5:20}}/>);
        }
        else if(this.props.chartSize == 'small') {
            return (<SmallSizedDoughnut style={{'marginTop' : '10px'}} bgclr="white" shouldRemainEqual={this.props.toggleEquality} paintShades={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}} pievalues={{p1:5,p2:20,p3:35,p4:40,p5:20}}/>);
        }
        else {
            return(<Circle shouldRemainEqual={true} paintShades={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}} pievalues={{p1:5,p2:20,p3:35,p4:40,p5:20}}/> );
        }
    }
}

export default Main;
