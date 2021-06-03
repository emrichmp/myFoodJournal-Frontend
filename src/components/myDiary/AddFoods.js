import React from 'react';

class AddFoods extends React.Component {
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
                    <button className="food-button"> Add Food to Diary </button>
                </form>
            </div>
        )
    }
}

export default AddFoods;