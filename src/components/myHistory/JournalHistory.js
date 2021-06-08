import React from "react"

class JournalHistory extends React.Component{
    render(){
        return(
            <div>
                Diary Date: {this.props.date} Caloric Intake:{this.props.calories_consumed} Remainder: {this.props.calories_consumed - this.props.goalCalories}
            </div>
        )
    }

}

export default JournalHistory;