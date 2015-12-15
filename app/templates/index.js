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