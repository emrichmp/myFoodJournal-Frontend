import React from 'react';

class Mydiary extends React.Component {

    state = {
        todayJournal: {},
        date: "",
        foods: [],
        meals: []
    }

    componentDidMount(){
        let user_id = 1

        fetch(`http://localhost:3000/api/v1/journals`)
        .then(response => response.json())
        .then(
            (result) => {
                const today = new Date().toISOString().slice(0, 10)
                //const today = "blah"
                result.data.forEach((journal) => {
                    if (journal.attributes.user_id === user_id && journal.attributes.date === today) {
                        this.setState({
                            todayJournal: journal,
                            date: journal.attributes.date,
                            foods: journal.attributes.foods,
                            meals: journal.attributes.meals
                        })
                    }
                })
                this.fetchHandler()
            }
        )
    }

    fetchHandler(){
        const journal = this.state.todayJournal
        if (journal.attributes.date === ""){
            this.createJournal()
        } else {
            console.log(journal)
            console.log(this.state.foods)
            console.log(this.state.meals)
        }
    }

    createJournal() {
        //post req to create journcal
        console.log("create journal")
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myDiary! </h1>
                <div className="diary-container">
                    <h3 className ="info">Journal Date: {this.state.date}</h3>
                </div>
            </div>
        )
    }
}

export default Mydiary