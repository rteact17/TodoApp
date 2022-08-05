import React from 'react';
class CompForTest extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    increment = () => {
        //let data = fetchapi
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return <>
            <p data-testid = "p1">
                {this.state.count}
            </p>
            <button  data-testid="btn1" onClick={this.increment}>Inc</button>
        </>
    }
}

export default CompForTest;