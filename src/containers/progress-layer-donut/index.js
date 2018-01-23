import React from 'react';
import Circle from './progresscircle';

class Main extends React.Component{
    render(){
        return(
            <Circle shouldRemainEqual={true} progressrate={300} sizeoffset="32"/>
        );
    }
}

export default Main;
