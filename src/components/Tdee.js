import React from 'react';

class Tdee extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
        //console.log("hi")
    }

    render () {
        return (
            <div>
                <h1 className="Header"> Calorie and Macro Calculator </h1>
                <form onSubmit= {this.submitHandler} className="tdee-form">
                    <label>
                        Weight:
                        <input className="tdee-inputs" type="text" name="weight" placeholder="kg" />
                    </label>
                    <label>
                        Height:
                        <input className="tdee-inputs" type="text" name="height" placeholder="cm" />
                    </label>
                    <label>
                        Age:
                        <input className="tdee-inputs" type="text" name="age" placeholder="years" />
                    </label>
                    <label>
                        Sex:
                        <select name="sex">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label>
                        Goal:
                        <select name="goal">
                            <option value="lose">lose weight</option>
                            <option value="gain">gain weight</option>
                            <option value="maintain">maintain weight</option>
                        </select>
                    </label>
                    <input type="submit" value="Calculate Macros!" />
                </form>
                <div className="result">
                    Here is your estimated calorie consumption based on your goals and a recommended macro breakdown
                </div>
            </div>
        )
    }
}

export default Tdee