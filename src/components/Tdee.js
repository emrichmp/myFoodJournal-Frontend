import React from 'react';

class Tdee extends React.Component {
    render () {
        return (
            <div>
                <h1 className="Header"> Calorie and Macro Calculator </h1>
                <form className="tdee-form">
                    <label>
                        Weight:
                        <input className="tdee-inputs" type="text" placeholder="kg" />
                    </label>
                    <label>
                        Height:
                        <input className="tdee-inputs" type="text" placeholder="cm" />
                    </label>
                    <label>
                        Age:
                        <input className="tdee-inputs" type="text" placeholder="years" />
                    </label>
                    <label>
                        Sex:
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <input type="submit" value="Calculate Macros!" />
                </form>
            </div>
        )
    }
}

export default Tdee