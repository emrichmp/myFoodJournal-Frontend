import React from 'react';
import GoalForm from './GoalForm'

class Mygoals extends React.Component {

    state = {
        goalWeight: "",
        calories: "",
        macros: "",
        form: "",
        goal_id: "",
        error: ""
    }

    componentDidMount() {
        const user_id = localStorage.getItem('user')

        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                if (result.data.attributes.goal === null){
                    this.createGoal()
                    this.setState({
                        error: "**Looks like you don't have a goal yet! Click on the 'edit goals!' form to add your weight, calorie and macro goals!**"
                    })
                } else {
                    console.log(result)
                    let data = result.data.attributes.goal
                    this.setState({
                        goalWeight: `${data.goalweight} kg`,
                        calories: `${data.calories} calories`,
                        macros: `${data.protein} protein, ${data.carbs} carbs and ${data.fats} fat`,
                        goal_id: data.id
                    })
                }
            }
        )
    }

    createGoal() {
        //POST REQ for creating a goal for the user!
        console.log("In create goal")
    }

    handleClick = (event) => {
        this.setState({
            form: < GoalForm goal_id={this.state.goal_id}/>
        })
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myGoals! </h1>
                <div className="goal-data">
                    <h4>{this.state.error}</h4>
                    <h2>Weight Goal: {this.state.goalWeight} </h2>
                    <h2>Calorie Goal: {this.state.calories} </h2>
                    <h2>Macro Goal: {this.state.macros} </h2>
                    <button className="goal-edit-button" onClick={this.handleClick}>Edit Goals</button>
                </div>
                <div>{this.state.form}</div>
            </div>
        )
    }
}

export default Mygoals;