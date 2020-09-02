import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        body: ''
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h1>{body}</h1>
            </div>
        )
    }
}

export default Test;