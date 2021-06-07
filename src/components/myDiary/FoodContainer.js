import React from 'react';
import AddFoods from './AddFoods';
import FoodItem from './FoodItem'
import Delete from './Delete'

class FoodContainer extends React.Component {

    state = {
        todayJournal: {},
        date: "",
        foods: [],
        calories_consumed: "",
        calorie_goal: "",
        protein_goal: "",
        fat_goal: "",
        carb_goal: "",
        journal_id: "",
        totalCalories: 0
    }

    componentDidMount(){
        const user_id = parseInt(localStorage.getItem('user'))

        fetch(`http://localhost:3000/api/v1/journals`)
        .then(response => response.json())
        .then(
            (result) => {
                const today = new Date().toISOString().slice(0, 10)
                //const today = "blah"
                result.data.forEach((journal) => {
                    if (journal.attributes.user_id === user_id && journal.attributes.date === today) {
                        this.setState({
                            todayJournal: journal
                        })
                    }
                })
                this.fetchHandler()
            }
        )
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(response => response.json())
        .then(
            (result) => {
                if (Object.keys(result.data).length === 0){
                    console.log("no goals")
                } else {
                    console.log(result.data.attributes.goal)
                    this.setState({
                        calorie_goal: result.data.attributes.goal.calories,
                        protein_goal: result.data.attributes.goal.protein,
                        fat_goal: result.data.attributes.goal.fats,
                        carb_goal: result.data.attributes.goal.carbs
                    })
                }
            })
    }

    fetchHandler(){
        const journal = this.state.todayJournal
        //console.log(journal)
        if (Object.keys(journal).length === 0){
            this.createJournal()
        } else {
            this.setState({
                date: journal.attributes.date,
                foods: journal.attributes.foods,
                calories_consumed: journal.attributes.calories_consumed,
                journal_id: journal.id
            })
            this.totalCalories(journal.attributes.calories_consumed, journal)
            //Remove this when finished!
            //console.log(this.state.journal_id)
            //console.log(this.state.foods)
            //console.log(this.state.meals)
        }
    }

    totalCalories(calories_consumed, journal){
        //console.log(calories_consumed, journal)
        if (calories_consumed !== this.state.totalCalories){
            journal.attributes.foods.forEach((item) => {
                // console.log(item.calories)
                // console.log(this.state.totalCalories)
                this.setState({
                    totalCalories: parseInt(this.state.totalCalories) + parseInt(item.calories)
                })
            })
            this.postCaloriesConsumed()
        }
    }

    postCaloriesConsumed(){
        console.log("Impliment this in v2 to have calories consumed corrected")
    }

    createJournal() {
        const user_id = localStorage.getItem('user')
        //post req to create journal
        console.log("create journal")
        fetch("http://localhost:3000/api/v1/journals", {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                    date: new Date().toISOString().slice(0, 10),
                    user_id: user_id,
                    calories_consumed: 0
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    render () {
        return(
            <div>
                <AddFoods journal_id={this.state.journal_id}/>
                <div className="diary-container">
                    <h3 className ="info">Journal Date: {this.state.date}  Calorie Goal: {this.state.calorie_goal} cals</h3>
                    <h3 className="info">Goal Protein: {this.state.protein_goal}g Goal Fat: {this.state.fat_goal}g Goal Carb: {this.state.carb_goal}g</h3>
                    <h3 className="info">Calories Consumed: {this.state.totalCalories} cals </h3>
                    <h3 className="info">Consumed Protein: Consumed Fat: Consumed Carb: </h3>
                    <ul className="meals">
                    {this.state.foods.map((item, index) => {
                        return (
                        <li key={index}> <FoodItem name={item.name} calories={item.calories} protein={item.protein} 
                        fat={item.fat} carb={item.carb}/> <Delete foodId={item.id}/></li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FoodContainer