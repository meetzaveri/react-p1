import React from 'react';
import Circle from './circle';

class Main extends React.Component{
    render(){
        return(
            <Circle hasPrimary shouldRemainEqual={true} pievalues={{p1:5,p2:25,p3:20,p4:40,p5:10}} />
        );
    }
}

export default Main;
