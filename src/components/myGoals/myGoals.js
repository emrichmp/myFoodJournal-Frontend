import React from 'react';
import GoalData from './GoalData';
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
        const user_id = localStorage.getItem('user')
        fetch(`http://localhost:3000/api/v1/goals`, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                    calories: 0,
                    protein: 0,
                    fats: 0,
                    carbs: 0,
                    goalweight: 0,
                    user_id: user_id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
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
                    <GoalData goalWeight={this.state.goalWeight} 
                    calories={this.state.calories} 
                    macros={this.state.macros} />
                    <button className="goal-edit-button" onClick={this.handleClick}>Edit Goals</button>
                </div>
                <div>{this.state.form}</div>
            </div>
        )
    }
}

export default Mygoals;