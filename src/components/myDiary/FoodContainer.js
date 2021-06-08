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
        totalCalories: 0,
        totalProtein: 0,
        totalFat: 0,
        totalCarb: 0
    }

    componentDidMount(){
        const user_id = parseInt(localStorage.getItem('user'))

        fetch(`http://localhost:3000/api/v1/journals`)
        .then(response => response.json())
        .then(
            (result) => {
                const today = new Date().toISOString().slice(0, 10)
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
        }
    }

    totalCalories(calories_consumed, journal){
            journal.attributes.foods.forEach((item) => {
                this.setState({
                    totalCalories: parseInt(this.state.totalCalories) + parseInt(item.calories),
                    totalProtein: parseInt(this.state.totalProtein) + parseInt(item.protein),
                    totalFat: parseInt(this.state.totalFat) + parseInt(item.fat),
                    totalCarb: parseInt(this.state.totalCarb) + parseInt(item.carb)
                })
            })
            //this.postCaloriesConsumed()
    }

    // postCaloriesConsumed(){
    //     //Add this after assessment
    //     //Readd caloriesconsumed vs totalcals
    //     //console.log("Impliment this in v2 to have calories consumed corrected")
    // }

    createJournal() {
        const user_id = localStorage.getItem('user')
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
                <h2 className="info"> Add your food here! </h2>
                <AddFoods journal_id={this.state.journal_id}/>
                <div className="diary-container">
                    <h3 className ="info">Journal Date: {this.state.date}  Calorie Goal: {this.state.calorie_goal} cals</h3>
                    <h3 className="info">Goal Protein: {this.state.protein_goal}g Goal Fat: {this.state.fat_goal}g Goal Carb: {this.state.carb_goal}g</h3>
                    <h3 className="info">Calories Consumed: {this.state.totalCalories} cals </h3>
                    <h3 className="info">Consumed Protein: {this.state.totalProtein}g Consumed Fat: {this.state.totalFat}g Consumed Carb: {this.state.totalCarb}g</h3>
                    <ul className="foods">
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