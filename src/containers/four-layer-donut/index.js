import React from 'react';
import Circle from './circle';

class Main extends React.Component{
    render(){
        return(
            <Circle hasPrimary shouldRemainEqual={true} pievalues={{p1:5,p2:20,p3:35,p4:40}}/>
        );
    }
}

export default Main;
