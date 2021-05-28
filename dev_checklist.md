# To-do
[X] - fix readme
[X] - start front end
[X] - Change port
[X] - finish Nav bar
[X] - look at layout
[X] - Get all components linked and loaded
[X] - Change tdee to use state

Stretch Goals:
[] - use onChange and state to make input only number for age, weighta and height inputs on form form
[] - Stretch Goal: to make app mobile friendly




[] Login/sign up page
    - form for login
    - link to sign up page
    - form for sign in

[] myDiary page
    - List meals
    - List foods under meals
    - add form under each meal after foods to add a food

[] myGoals page 
    - Section for Calorie and Macro goals
    - Edit button -> renders form to change it

[] myHistory
    - Shows date
        - under shoes calories consumed vs calories goal and the deficit
    - pulls all journal instances that belongs to that user

[] TDEE calc
    - Form for inputs...
        [X] - weight
        [X] - age
        [X] - sex
        - calculates calories
    - Takes calc calories and does macro split of...
        - 1 g Protein per gram of bw
        - 20% calories in fat
        - rest in carbs
    - Estimated TDEE algorithm
    Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
    Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)
    https://steelfitusa.com/blogs/health-and-wellness/calculate-tdee

# Requirements

[ ] - The code should be written in ES6 as much as possible

[X] - Use the create-react-app generator to start your project.

[X] - Your app should have one HTML page to render your react-redux application

[ ] - There should be 5 stateless components
    - Navbar - stateless
    - myHistory - stateless

[ ] - There should be 3 routes
    - home, myDiary, myHistory, myGoals, TDEE, etc...

[ ] - The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate
    - Used react-router

[ ] - Use Redux middleware to respond to and modify state change

[ ] - Make use of async actions and redux-thunk middleware to send data to and receive data from a server

[ ] - Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

[ ] - Your client-side application should handle the display of data with minimal data manipulation

[X] - Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
    - Styled w/ my CSS

[ ] - Once your app is complete, fill out the checklist