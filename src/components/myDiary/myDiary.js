import React from 'react';
import FoodContainer from "./FoodContainer"

class Mydiary extends React.Component {

    render () {
        return(
            <div>
                <h1 className="Header"> myDiary!</h1>
                <FoodContainer />
            </div>
        )
    }

}

export default Mydiary