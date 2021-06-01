import React from 'react';

class Tdee extends React.Component {

    state = {
        tdee: "",
        tdee_protein: "",
        tdee_fats: "",
        tdee_carbs: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        let weight = this.state.weight
        let height = this.state.height
        let age = this.state.age
        let sex = this.state.sex
        let goal = this.state.goal
        this.calorieCalculator(weight, height, age, sex, goal);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    calorieCalculator(weight, height, age, sex, goal) {
        let tdee = 0;
        if (sex==="female") {
            tdee = 655 + (9.6*weight) + (1.8*height) - (4.7*age)
        } else {
            tdee = 66 + (13.7*weight) + (5*height) - (6.8*age)
        }
        if (goal==="maintain") {
            tdee += 250
        } else if (goal==="gain") {
            tdee += 500
        }

        tdee = parseInt(tdee)
        let tdee_protein = parseInt(2.4*weight)
        let tdee_fats = parseInt((0.2*tdee)/9)
        let tdee_carbs = parseInt(((tdee - tdee_protein - tdee_fats)/4)/1.8)

        this.setState({
            tdee: tdee,
            tdee_protein: tdee_protein,
            tdee_fats: tdee_fats,
            tdee_carbs: tdee_carbs
        })
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
                        Calories: {this.state.tdee} Protein: {this.state.tdee_protein} Fats: {this.state.tdee_fats} Carbs: {this.state.tdee_carbs}
                </div>
                <div className="disclaimer">
                    ** DISCLAIMER: These results are loosely based off the research of Jeff Nippard and the bmr algorithm from the <a href="https://steelfitusa.com/blogs/health-and-wellness/calculate-tdee"> Harris-Benedict Equation </a>, you may need to consume slightly more or less calories based on activity level **
                </div>
            </div>
        )
    }
}

export default Tdee