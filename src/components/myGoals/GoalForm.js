import React from 'react';

class GoalForm extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <label>Weight Goal</label>
                    <input className="goal-input" type="text" name="goalweight" placeholder="kg"/>
                    <label>Calorie Goal</label>
                    <input className="goal-input" type="text" name="goalcalories" placeholder="cals"/>
                    <label>Protein Goal</label>
                    <input className="goal-input" type="text" name="goalprotein" placeholder="cals"/>
                    <label>Fat Goal</label>
                    <input className="goal-input" type="text" name="goalfats" placeholder="cals"/>
                    <label>Carb Goal</label>
                    <input className="goal-input" type="text" name="goalcarbs" placeholder="cals"/>
                </form>
            </div>
        )
    }
}

export default GoalForm;