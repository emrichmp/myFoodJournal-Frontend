import React from 'react';

class Tdee extends React.Component {
    render () {
        return (
            <div>
                <h1 className="Header"> Calorie and Macro Calculator </h1>
                <form className="tdee-form">
                    <label>
                        Weight:
                        <input type="text"/>
                    </label>
                    <label>
                        Age:
                        <input type="text" />
                    </label>
                    <label>
                        Sex:
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <input type="submit" value="Calculate!" />
                </form>
            </div>
        )
    }
}

export default Tdee