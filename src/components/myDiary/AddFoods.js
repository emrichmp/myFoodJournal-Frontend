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
        let name = this.state.name
        let calories = this.state.calories
        let protein = this.state.protein
        let fat = this.state.fat
        let carb = this.state.carb
        this.fetchHandler(name, calories, protein, fat, carb)
    }

    fetchHandler(name, calories, protein, fat, carb){
        console.log(name, calories, protein, fat, carb)

        // fetch("http://localhost:3000/api/v1/foods", {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json; charset=UTF-8"},
        //     body: JSON.stringify({
        //             name: name,
        //             calories: calories,
        //             protein: protein,
        //             fat: fat,
        //             carb: carb,
        //             user_id: user_id
        //     })
        // })
        // .then(response => response.json())
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
                <form className="add-food">
                    <label>Food Name: </label>
                    <input className="add-food-inputs" type="text" name="name" placeholder="ex: chicken" onChange={this.changeHandler} />
                    <label>Calories: </label>
                    <input className="add-food-inputs" type="text" name="calories" placeholder="cals" onChange={this.changeHandler} />
                    <label>Protein: </label>
                    <input className="add-food-inputs" type="text" name="protein" placeholder="g" onChange={this.changeHandler} />
                    <label>Fat: </label>
                    <input className="add-food-inputs" type="text" name="fat" placeholder="g" onChange={this.changeHandler} />
                    <label>Carb: </label>
                    <input className="add-food-inputs" type="text" name="carb" placeholder="g" onChange={this.changeHandler} />
                    <button className="food-button" onClick={this.clickHandler} > Add Food to Diary </button>
                </form>
            </div>
        )
    }
}

export default AddFoods;