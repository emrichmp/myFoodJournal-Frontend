import React from "react";

class ResultTdee extends React.Component {
    render(){
        return(
            <div>
                Calories: {this.props.tdee} Protein: {this.props.tdee_protein} Fats: {this.props.tdee_fats} Carbs: {this.props.tdee_carbs}
            </div>
        )
    }
}

export default ResultTdee;