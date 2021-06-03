import React from 'react';

class AddFoods extends React.Component {
    render () {
        return(
            <div>
                <form>
                    <label>Food Name: </label>

                    <label>Calories: </label>

                    <label>Protein: </label>

                    <label>Fat: </label>

                    <label>Carb: </label>

                    <button> Add Food to Diary </button>
                </form>
            </div>
        )
    }
}

export default AddFoods;