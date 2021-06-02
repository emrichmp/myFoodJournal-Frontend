import React from 'react';

class Mydiary extends React.Component {

    componentDidMount(){
        //let user_id = 1

        fetch(`http://localhost:3000/api/v1/journals`)
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result)

            }
        )
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myDiary! </h1>
                <div className="diary-container">

                </div>
            </div>
        )
    }
}

export default Mydiary