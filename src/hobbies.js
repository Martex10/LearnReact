import React, { Component } from 'react';

    class Hobbies extends Component{
        render(){
            const liStyle = {fontSize: '1.5em'};
            return(
                <ul>
                    <li style={liStyle}>Sleep</li>
                    <li style={liStyle}>Eat</li>
                </ul>
                );
        }
    }

export default Hobbies;