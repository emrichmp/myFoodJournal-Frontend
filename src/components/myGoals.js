import React from 'react';

class Mygoals extends React.Component {

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/goals")
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result)
            }
        )
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myGoals! </h1>
            </div>
        )
    }
}

export default Mygoals