import React from 'react';
import Circle from './circle';

class Main extends React.Component{
    render(){
        return(
            <Circle hasPrimary shouldRemainEqual={true} pievalues={{p1:5,p2:5,p3:35,p4:40,p5:15}} />
        );
    }
}

export default Main;