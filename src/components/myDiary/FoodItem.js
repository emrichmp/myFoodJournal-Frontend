import React from 'react'

class FoodItem extends React.Component {
    render () {
        return(
            <div>{this.props.name} {this.props.calories} cals {this.props.protein} Protein {this.props.fat} Fat {this.props.carb} Carbs</div>
        )
    }
}

export default FoodItem;