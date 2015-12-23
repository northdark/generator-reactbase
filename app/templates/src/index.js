import React from 'react';

let App = React.createClass({
    render(){
        return (
            <p>Hello World</p>
        );
    }
});

React.render(
    <App />,
    document.body
);


/*
    //CMD模式

    var React = require('react');

    var App = React.createClass({
        render:function(){
            return (
                <p>Hello World</p>
            );
        };
    });

    React.render(<App/>,document.body);

 */