# To-do
[X] - fix readme
[X] - start front end
[X] - Change port
[X] - finish Nav bar
[X] - look at layout
[X] - Get all components linked and loaded
[X] - Change tdee to use state
[X] - Fetch call for myGoals page
[X] - Format fetch call to pull the correct data
[X] - Format data on page
[X] - css styling for myGoals
[X] - add edit button for myGoals
[X] - Load edit form on click of button
[X] - style myGoal form
[X] - patch to api on submit
    - needs to pull data from form
    - then assigns it in patch
[X] - Start myhistory by making fetch call
[X] - iterate over each journal instance to grab calories consumed and date
[X] - have login find user and grab user_id
[X] - have signup create new user
    [X] - POST req on submit
    [X] - fix post req
[X] - Finish setting up back end for logging in and signing up
[X] - sign in needs to authenticate - rails validations
[X] - finish fetchhandler in myDiary

Sign up/login to dos
[X] - After user signs up or logs in, have it switch login to App component using the loggedIn state
[] - have all components access the window.localStorage('user') to pull the correct data on GETs

myDiary to dos
[X] - finish POST req to create journal if none exists - dont forget utc - DateTime.now.utc in BACKEND
[] - format the myDiary data
[] - Make meal component that will hold food
[] - Add food form
[] - POST req for food being added
    - POST to food
[] - upon creation of journal, also create Journal with 3 meals - Breakfast, Lunch and Dinner?
[X] - adding food form
[] - save button action

# NEED
- need to make sure user_id and goal_id is the one for the actual user, not 1
    - in myGoals and GoalForm and myHistory and myDiary
- Divide up component duties and get to 5 stateless components
- Fix validation for password/fix has_secure_password

# Stretch Goals:
[] - Form validations using onChange
[] - have form render in and out
[] - error messages for mis input
[] - have sign up check if user exists

# Sections
[] Login/sign up page
    - form for login
    - link to sign up page
    - form for sign in

[] myDiary page
    - List meals
    - List foods under meals
    - add form under each meal after foods to add a food

[X] myGoals page 
    [X] - Section for Calorie and Macro goals
    [X] - Edit button -> renders form to change it

[X] myHistory
    [X] - Shows date
        - under shoes calories consumed vs calories goal and the deficit
    [X] - pulls all journal instances that belongs to that user

[X] TDEE calc
    [X] - Form for inputs...
        [X] - weight
        [X] - age
        [X] - sex
        [X] - calculates calories
    [X] - Takes calc calories and does macro split of...
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

[X] - There should be 3 routes
    - home, myDiary, myHistory, myGoals, TDEE, etc...

[X] - The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate
    - Used react-router

[ ] - Use Redux middleware to respond to and modify state change

[X] - Make use of async actions and redux-thunk middleware to send data to and receive data from a server
    - used fetch() to send and receive data

[X] - Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API (do not use jQuery methods).
    - Rails API handles data that are GET, POST, PATCH and DELETED

[X] - Your client-side application should handle the display of data with minimal data manipulation
    - Only really manipulates data in myHistory but that's because it needed to be (to calculate remainder), rest of components show data

[X] - Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
    - Styled w/ my CSS

[ ] - Once your app is complete, fill out the checklist