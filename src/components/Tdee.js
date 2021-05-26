import React from 'react';

class Tdee extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
        let weight = this.state.weight
        let height = this.state.height
        let age = this.state.age
        let sex = this.state.sex
        let goal = this.state.goal
        this.macroCalculator(weight, height, age, sex, goal);
        //console.log(weight, height, age, sex, goal);
    }

    changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    }

    macroCalculator(weight, height, age, sex, goal) {
        console.log(weight, height, age, sex, goal);
    }

    render () {
        return (
            <div>
                <h1 className="Header"> Calorie and Macro Calculator </h1>
                <form onSubmit= {this.submitHandler} className="tdee-form">
                    <label>
                        Weight: 
                        <input className="tdee-inputs" type="text" name="weight" placeholder="kg" onChange={this.changeHandler} />
                    </label>
                    <label>
                        Height:
                        <input className="tdee-inputs" type="text" name="height" placeholder="cm" onChange={this.changeHandler} />
                    </label>
                    <label>
                        Age:
                        <input className="tdee-inputs" type="text" name="age" placeholder="years" onChange={this.changeHandler} />
                    </label>
                    <label>
                        Sex:
                        <select name="sex" onChange={this.changeHandler} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label>
                        Goal:
                        <select name="goal" onChange={this.changeHandler} >
                            <option value="lose">Lose weight</option>
                            <option value="gain">Gain weight</option>
                            <option value="maintain">Maintain weight</option>
                        </select>
                    </label>
                    <input type="submit" value="Calculate Macros!" />
                </form>
                <div className="result-text">
                    Here is your estimated calorie consumption based on your goals and a recommended macro breakdown!
                </div>
                <div className="result">
                    
                </div>
            </div>
        )
    }
}

export default Tdee