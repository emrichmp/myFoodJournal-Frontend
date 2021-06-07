import React from 'react';

class FoodContainer extends React.Component {

    state = {
        todayJournal: {},
        date: "",
        foods: [],
        calories_consumed: "",
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
            })
            //Remove this when finished!
            //console.log(journal)
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
                <h1 className="Header"> myDiary!</h1>
                <div className="diary-container">
                    <h3 className ="info">Journal Date: {this.state.date} --------------------------- Calorie Goal: 
                    cals --------------------------- Calories Consumed: {this.state.calories_consumed} cals </h3>
                    <ul className="meals">
                    {this.state.foods.map((item, index) => {
                        return (
                        <li key={index}>{item.name} {item.calories} cals {item.protein} P {item.fat} F {item.carb} C</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FoodContainer