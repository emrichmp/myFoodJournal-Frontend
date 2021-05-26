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
                    <input type="submit" value="Calculate Macros!" />
                </form>
                <div className="result">
                    hi
                </div>
            </div>
        )
    }
}

export default Tdee