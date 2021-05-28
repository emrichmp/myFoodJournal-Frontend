import React from 'react';

class GoalForm extends React.Component {
    render() {
        return(
            <div>
                <form>
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
                </form>
            </div>
        )
    }
}

export default GoalForm;