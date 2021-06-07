import React from 'react';
import FoodContainer from "./FoodContainer"

class Mydiary extends React.Component {

    componentDidMount(){
        window.history.pushState('correct', 'Title', '/');
    }

    render () {
        return(
            <div>
                <h1 className="Header"> myJournal!</h1>
                <FoodContainer />
            </div>
        )
    }

}

export default Mydiary