import React from 'react';

class GoalForm extends React.Component {

    state = {
        goalWeight: "",
        goalcalories: "",
        goalprotein: "",
        goalfats: "",
        goalcarbs: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        let goalweight = this.state.goalweight
        let goalcalories = this.state.goalcalories
        let goalprotein = this.state.goalprotein
        let goalfats = this.state.goalfats
        let goalcarbs = this.state.goalcarbs
        this.patchHandler(goalweight, goalcalories, goalprotein, goalfats, goalcarbs)
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    patchHandler(goalweight, goalcalories, goalprotein, goalfats, goalcarbs) {
        console.log("in patchHandler")
        //console.log(goalweight, goalcalories, goalprotein, goalfats, goalcarbs)
        //HAVE TO CHANGE THIS SO IT IS THE ACTUAL Goal ID
        let goal_id = 1
        console.log("patch handler goal form")
        fetch(`http://localhost:3000/api/v1/goals/${goal_id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                calories: goalcalories,
                protein: goalprotein,
                fats: goalfats,
                carbs: goalcarbs,
                goalweight: goalweight,
            //what needs to be changed
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render() {
        return(
            <div>
                <form onSubmit= {this.submitHandler} className="goal-form">
                    <label>Weight Goal</label>
                    <input className="goal-input" type="text" name="goalweight" placeholder="kg" onChange={this.changeHandler}/>
                    <label>Calorie Goal</label>
                    <input className="goal-input" type="text" name="goalcalories" placeholder="grams" onChange={this.changeHandler}/>
                    <label>Protein Goal</label>
                    <input className="goal-input" type="text" name="goalprotein" placeholder="grams" onChange={this.changeHandler}/>
                    <label>Fat Goal</label>
                    <input className="goal-input" type="text" name="goalfats" placeholder="grams" onChange={this.changeHandler}/>
                    <label>Carb Goal</label>
                    <input className="goal-input" type="text" name="goalcarbs" placeholder="grams" onChange={this.changeHandler} />
                    <input type="submit" value="update goals!" />
                </form>
            </div>
        )
    }
}

export default GoalForm;