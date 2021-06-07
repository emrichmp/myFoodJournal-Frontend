import React from 'react';
import FoodContainer from "./FoodContainer"
import AddFoods from './AddFoods'

class Mydiary extends React.Component {

    render () {
        return(
            <div>
                <h1 className="Header"> myDiary!</h1>
                <AddFoods />
                <FoodContainer />
            </div>
        )
    }

}

export default Mydiary