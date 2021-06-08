import React from "react";

class Assessment extends React.Component {

    state = {
        number: 0,
        string: ""
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    //# of chars of string should not be greater than in the num field
    //make it so you can't type more characters than that
    render(){
        return(
            <div>
                <form>
                    <label>Number</label>
                        <input type="number" name="number" value={this.state.number} onChange={this.changeHandler}/>
                    <label>String</label>
                        <input type="text" name="string" maxLength = {this.state.number} value={this.state.string} onChange={this.changeHandler} />
                </form>
            </div>
        )
    }

}

export default Assessment;