import React, { Component } from 'react';
import Circle from './components/circle';


class Donut extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        return(
            <div>
                <Circle hasPrimary shouldRemainEqual={true} pievalues={{p1:10,p2:20,p3:5,p4:40,p5:25}} />
            </div>
        );
    }
}

export default Donut;