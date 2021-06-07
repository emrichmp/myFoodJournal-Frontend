import React from "react";

class Delete extends React.Component {

    clickHandler = (event) => {
        const id = event.target.id
        console.log(id)
    }
    
    render(){
        return(
            <div>
            <button className="delete" onClick={this.clickHandler} id={this.props.foodId}>
                Delete Food
            </button>
            </div>
        )
    }
}

export default Delete