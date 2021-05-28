import React from 'react';

class Mygoals extends React.Component {

    componentDidMount() {
        //let user_id = 1

        fetch("http://localhost:3000/api/v1/users")
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result.data)
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