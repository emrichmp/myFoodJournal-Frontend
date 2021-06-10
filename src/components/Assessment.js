import React from "react";

class Assessment extends React.Component {

    state = {
        number1: 0,
        number2: 0,
        operation: "+",
        output: 0
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state.number1, this.state.number2)
    }

    clickHandler = (event) => {
        event.preventDefault();
        //console.log("in click handler")
        console.log(this.state.number1, this.state.number2, this.state.operation)
        if (this.state.operation === "+"){
            this.setState({
                output: parseInt(this.state.number1) + parseInt(this.state.number2)
            })
        }

    }
    //To do
    // 3 inputs - focus on 2
    // 2 inputs r gonna be the numbers
    // 3rd input is going to be a drop down
        //+ - * and /
    //Output - show the calculation

    render(){
        return(
            <div>
                <form>
                    <label>Number 1</label>
                        <input type="number" name="number1" value={this.state.number1} onChange={this.changeHandler}/>

                        <select name="operation" onChange={this.changeHandler}>
                            <option value="+">plus</option>
                            <option value="-">minus</option>
                            <option value="*">multiply</option>
                            <option value="/">divide</option>
                        </select>

                    <label>Number 2</label>
                        <input type="number" name="number2" value={this.state.number2} onChange={this.changeHandler} />
                    <button onClick={this.clickHandler}>calculate!</button>

                        {console.log(this.state.number1, this.state.number2)}
                </form>

                <p>Output: {this.state.output}</p>
            </div>
        )
    }

}

export default Assessment;