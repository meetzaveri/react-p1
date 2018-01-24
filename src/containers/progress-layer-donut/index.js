import React from 'react';
import ProgressCircle from './progresscircle';
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
            return (<LargeSizedDoughnut  shouldRemainEqual={true} paintShades={{c1:'#D1A917',c2:'default_bg'}} progressrate={300} bgclr='white' />);
        }
        else if(this.props.chartSize == 'medium') {
            return (<MediumSizedDoughnut shouldRemainEqual={true} paintShades={{c1:'#D1A917',c2:'default_bg'}} progressrate={300} bgclr='white' />);
        }
        else if(this.props.chartSize == 'small') {
            return (<SmallSizedDoughnut shouldRemainEqual={true} paintShades={{c1:'#D1A917',c2:'default_bg'}} progressrate={300} bgclr='white' />);
        }
        else {
            return(<ProgressCircle shouldRemainEqual={true} paintShades={{c1:'#D1A917',c2:'default_bg'}} progressrate={300} bgclr='white' />);
        }
    }
}

export default Main;
