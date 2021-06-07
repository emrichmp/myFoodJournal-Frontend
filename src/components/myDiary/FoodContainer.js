import React from 'react';
import AddFoods from './AddFoods';
import FoodItem from './FoodItem'

class FoodContainer extends React.Component {

    state = {
        todayJournal: {},
        date: "",
        foods: [],
        calories_consumed: "",
        calorie_goal: "",
        journal_id: ""
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
                    this.setState({
                        calorie_goal: result.data.attributes.goal.calories
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
            //Remove this when finished!
            console.log(this.state.journal_id)
            console.log(this.state.foods)
            //console.log(this.state.meals)
        }
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
                    //THIS NEED TO BE CHANGED TO REAL ID
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
                    <h3 className ="info">Journal Date: {this.state.date} --------------------------- Calorie Goal: {this.state.calorie_goal}
                    cals --------------------------- Calories Consumed: {this.state.calories_consumed} cals </h3>
                    <ul className="meals">
                    {this.state.foods.map((item, index) => {
                        return (
                        <li key={index}> <FoodItem name={item.name} calories={item.calories} protein={item.protein} 
                        fat={item.fat} carb={item.carb}/> </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

//<li key={index}>{item.name} {item.calories} cals {item.protein} P {item.fat} F {item.carb} C</li>

export default FoodContainer