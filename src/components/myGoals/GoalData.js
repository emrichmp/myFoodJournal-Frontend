import React from "react";

class GoalData extends React.Component {
    render(){
        return(
            <div>
                <h2>Weight Goal: {this.props.goalWeight} </h2>
                <h2>Calorie Goal: {this.props.calories} </h2>
                <h2>Macro Goal: {this.props.macros} </h2>
            </div>
        )
    }
}

export default GoalData