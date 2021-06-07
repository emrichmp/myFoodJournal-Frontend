import React from "react";

class Delete extends React.Component {

    clickHandler = (event) => {
        const id = event.target.id
        console.log(id)
        this.destroyFetch(id)
    }

    destroyFetch(id){
        console.log(id)
        fetch(`http://localhost:3000/api/v1/foods/${id}`, {
        method: 'DELETE'
        })
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