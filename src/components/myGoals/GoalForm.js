import React from 'react';

class GoalForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
        this.patchHandler()
    }

    patchHandler() {
        console.log("patch handler goal form")
    }

    render() {
        return(
            <div>
                <form onSubmit= {this.submitHandler} className="goal-form">
                    <label>Weight Goal</label>
                    <input className="goal-input" type="text" name="goalweight" placeholder="kg"/>
                    <label>Calorie Goal</label>
                    <input className="goal-input" type="text" name="goalcalories" placeholder="grams"/>
                    <label>Protein Goal</label>
                    <input className="goal-input" type="text" name="goalprotein" placeholder="grams"/>
                    <label>Fat Goal</label>
                    <input className="goal-input" type="text" name="goalfats" placeholder="grams"/>
                    <label>Carb Goal</label>
                    <input className="goal-input" type="text" name="goalcarbs" placeholder="grams"/>
                    <input type="submit" value="update goals!" />
                </form>
            </div>
        )
    }
}

export default GoalForm;