import React from 'react';

class myHistory extends React.Component {

    state = {goalCalories: "", journalData: []}

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
                    {this.state.journalData.map((item, index) => {
                        return(
                            <li key={index}>
                                diary date: {item.date} calories consumed:{item.calories_consumed} deficit: {item.calories_consumed - this.state.goalCalories}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default myHistory