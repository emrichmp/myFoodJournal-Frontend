import React from 'react';

class myHistory extends React.Component {

    componentDidMount() {
        //HAVE TO CHANGE THIS SO IT IS THE ACTUAL USER ID
        let user_id = 1

        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                let goalcalories = result.data.attributes.goal.calories
                console.log(goalcalories)
                let journals = result.data.attributes.journals
                console.log(journals)
            }
        )
    }
    render () {
        return(
            <div>
                <h1 className="Header"> myHistory! </h1>
            </div>
        )
    }
}

export default myHistory