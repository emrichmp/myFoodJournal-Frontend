import React from 'react';
import GoalForm from './GoalForm'

class Mygoals extends React.Component {

    state = {
        goalWeight: "",
        calories: "",
        macros: "",
    }

    componentDidMount() {
        //HAVE TO CHANGE THIS SO IT IS THE ACTUAL USER ID
        let user_id = 1

        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                let data = result.data.attributes.goal
                this.setState({
                    goalWeight: `${data.goalweight} kg`,
                    calories: `${data.calories} calories`,
                    macros: `${data.protein} protein, ${data.carbs} carbs and ${data.fats} fat`
                })
            }
        )
    }

    handleClick = (event) => {
        console.log("hey")
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myGoals! </h1>
                <div className="goal-data">
                    <h2>Weight Goal: {this.state.goalWeight} </h2>
                    <h2>Calorie Goal: {this.state.calories} </h2>
                    <h2>Macro Goal: {this.state.macros} </h2>
                    <button className="goal-edit-button" onClick={this.handleClick}>Edit Goals</button>
                </div>
            </div>
        )
    }
}

export default Mygoals;