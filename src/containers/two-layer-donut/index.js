import React from 'react';
import Circle from './circle';

class Main extends React.Component{
    render(){
        return(
            <Circle hasPrimary shouldRemainEqual={true} pievalues={{p1:1,p2:30}}/>
        );
    }
}

export default Main;
