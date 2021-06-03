import React from 'react';

class Mydiary extends React.Component {

    state = {
        todayJournal: {
            attributes: {
                date: ""
            }
        }
    }

    componentDidMount(){
        let user_id = 1

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
    }

    fetchHandler(){
        const journal = this.state.todayJournal
        if (journal === ""){
            console.log("empty")
        } else {
            console.log(journal)
        }
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myDiary! </h1>
                <div className="diary-container">
                    <h3 className ="info">Journal Date: {this.state.todayJournal.attributes.date}</h3>
                </div>
            </div>
        )
    }
}

export default Mydiary