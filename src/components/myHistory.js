import React from 'react';

class myHistory extends React.Component {

    state = {goalCalories: ""}

    componentDidMount() {
        //HAVE TO CHANGE THIS SO IT IS THE ACTUAL USER ID
        let user_id = 1

        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                let calories = result.data.attributes.goal.calories
                let journals = result.data.attributes.journals
                this.historyHandler(calories, journals)

            }
        )
    }
    historyHandler(calories, journals) {
        console.log(journals)
        this.setState({
            goalCalories: calories
        })
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myHistory! </h1>
                <h2 className="tdee-form">Calorie Goal: {this.state.goalCalories} calories</h2>
            </div>
        )
    }
}

export default myHistory