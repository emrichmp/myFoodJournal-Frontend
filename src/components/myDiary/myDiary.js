import React from 'react';
import FoodContainer from "./FoodContainer"
import AddFoods from './AddFoods'

class Mydiary extends React.Component {

    render () {
        return(
            <div>
                <FoodContainer />
                <AddFoods />
            </div>
        )
    }

}

export default Mydiary