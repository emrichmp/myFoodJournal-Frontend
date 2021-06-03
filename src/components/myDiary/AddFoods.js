import React from 'react';

class AddFoods extends React.Component {

    state = {
        name: "",
        calories: "", 
        protein: "",
        fat: "",
        carb: ""
    }

    clickHandler = (event) => {
        event.preventDefault()
        console.log("in click")
        let calories = this.state.calories
        let protein = this.state.protein
        let fat = this.state.fat
        let carb = this.state.carb
        console.log(calories, protein, fat, carb)
        //Update state to add food
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render () {
        return(
            <div>
                <button className="save-button">Save Diary!</button>
                <form>
                    <label>Food Name: </label>
                    <input className="add-food" type="text" name="name" placeholder="ex: chicken" onChange={this.changeHandler} />
                    <label>Calories: </label>
                    <input className="add-food" type="text" name="calories" placeholder="cals" onChange={this.changeHandler} />
                    <label>Protein: </label>
                    <input className="add-food" type="text" name="protein" placeholder="g" onChange={this.changeHandler} />
                    <label>Fat: </label>
                    <input className="add-food" type="text" name="fat" placeholder="g" onChange={this.changeHandler} />
                    <label>Carb: </label>
                    <input className="add-food" type="text" name="carb" placeholder="g" onChange={this.changeHandler} />
                    <button className="food-button" onClick={this.clickHandler} > Add Food to Diary </button>
                </form>
            </div>
        )
    }
}

export default AddFoods;