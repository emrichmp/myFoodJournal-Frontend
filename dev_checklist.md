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
[X] - have all components access the window.localStorage('user') to pull the correct data on GETs
   [X] - myGoals
   [X] - myHistory
   [X] - myDiary
myDiary to dos
[X] - finish POST req to create journal if none exists - dont forget utc - DateTime.now.utc in BACKEND
[X] - NO NEED - Change up backend so there are no longer meals and just food belongs to journal
[X] - List all food that belongs to user
    - iterate thru array and then pass the food instance as a prop and have each food item be a component
    - this way when a food is added it will be able to call the same component and pass the new data as a prop aswell
[X] - Edit backend to make food belong to journal, get rid of meals
[X] - Make sure food correctly pull from journal on fetch
[X] - pass journal id to AddFoods(form) as a prop, use this for post fetch
[X] - When "add food" button clicked, post food item to that journal
[X] - Get new FoodItem to render on page when that happens
[X] - Refresh page on delete
[X] - updates calories consumed
[X] - Pass goal_id to goalfrom to patch the right goal
[X] - Goal needs to handle case of no goal
[X] - Have a goal created if no goal is present
[X] - Get logout button to work

[] - break up myHistory - make a 6th stateless component
[] - replace lets w/ const
[] - Redux-Thunk?
[] - Figure out login thing
[] - Fix validation for password/fix has_secure_password

# NEED
[X] - need to make sure user_id and goal_id is the one for the actual user, not 1
    [X] - in myGoals and GoalForm and myHistory and myDiary
[X] - Divide up component duties and get to 5 stateless components

# Stretch Goals:
[] - Form validations using onChange
[] - have form render in and out
[] - error messages for mis input
[] - have sign up check if user exists

# Sections
[X] Login/sign up page
    - form for login
    - link to sign up page
    - form for sign in

[X] myDiary page
    - List foods under meals
    - add form for foods to add a food

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

[X] - The code should be written in ES6 as much as possible

[X] - Use the create-react-app generator to start your project.

[X] - Your app should have one HTML page to render your react-redux application

[X] - There should be 5 stateless components
    - Navbar - stateless
    - Loginpage - stateless
    - Logout - stateless
    - myDiary - stateless
    - GoalData - stateless

[X] - There should be 3 routes
    - myDiary - '/', /myHistory, /myGoals, /TDEE, /logout

[X] - The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate
    - Used react-router

[X] - Use Redux middleware to respond to and modify state change

[X] - Make use of async actions and redux-thunk middleware to send data to and receive data from a server
    - used fetch() to send and receive data

[X] - Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API (do not use jQuery methods).
    - Rails API handles data that are GET, POST, PATCH and DELETED

[X] - Your client-side application should handle the display of data with minimal data manipulation
    - Only really manipulates data in myHistory but that's because it needed to be (to calculate remainder), rest of components show data

[X] - Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
    - Styled w/ my CSS

[X] - 2 Container Components -  - how things work, they rarely have any html markup stateful, provides data and behavior to children
    - FoodContainer - fetches data and passes data to <FoodItem /> and <Delete />
    - myGoal - fetches data and passes data to <GoalData />

[ ] - Once your app is complete, fill out the checklist