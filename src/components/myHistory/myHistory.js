import React from 'react';
import JournalHistory from './JournalHistory';

class myHistory extends React.Component {

    state = {goalCalories: "", journalData: [], error: ""}

    componentDidMount() {
        //HAVE TO CHANGE THIS SO IT IS THE ACTUAL USER ID
        const user_id = localStorage.getItem('user')

        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                if (result.data === null){
                    this.setState({
                        error: "You're new so there isn't any history yet! Go start on your food journal!"
                    })
                } else {
                    let calories = result.data.attributes.goal.calories
                    let journals = result.data.attributes.journals
                    this.historyHandler(calories, journals)
                }
            }
        )
    }
    historyHandler(calories, journals) {
        let journal_data = journals.map((journal) => {
            return {date: journal.date, calories_consumed: journal.calories_consumed}
        })
        this.setState({
            goalCalories: calories,
            journalData: journal_data
        })
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myHistory! </h1>
                <h2 className="tdee-form">Calorie Goal: {this.state.goalCalories} Calories</h2>
                <ul className="journal-data-list">
                    <li>{this.state.error}</li>
                    {this.state.journalData.map((item, index) => {
                        return(
                            <li key={index}>
                                <JournalHistory date={item.date} calories_consumed={item.calories_consumed}
                                goalCalories={this.state.goalCalories}/>
                            </li>
                        )
                    })}
                    <div className="disclaimer">remainder = calories over/under goal</div>
                </ul>
            </div>
        )
    }
}

export default myHistory