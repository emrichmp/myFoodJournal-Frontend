![logo](https://i.ibb.co/sQ6fJbr/Screen-Shot-2021-05-26-at-11-16-32-PM.png)

Backend Repo: https://github.com/emrichmp/myFoodJournal-Backend

### The Problem
I believe that the most effective way to reach a fitness related goal is by tracking daily! No matter if your goal is to lose, gain or maintain your weight you need to know how much you're eating. It's all about calories in vs calories out! Eat more calories than you burn? You'll gain weight. Eat less calories than you burn? You'll lose weight. It's that simple! The problem is that no one wants to track what they eat on pen and paper or their notes app. We need an all in one place for tracking food...

### The Solution
...Introducing myFoodJournal! This react.js based web app brings all your tracking needs! myFoodDiary lets a user to add food to their meals in their diary. They also may add their goals and macros so they can hit those goals and track along with it. If a user doesn't know where to start they can also use the included TDEE calculator to find an estimated caloric intake and a recommended macro breakdown!

### installation
if you want to experiment with this app or run it locally fork and clone this repo.
1. If you haven't already, go to the backend repo and follow those installation instructions to get that up and running.
2. Then run ``` npm install ``` to install all dependencies.
3. Then run ``` npm start ``` to get the react server started up and navigate to "http://localhost:5000/"
4. And you should be all set!


### Brief Project Explained
This project uses react.js to create the front end. I created a NavBar component that always renders and depending on what route is clicked or typed in, I would render the corresponding components into the DOM. The front-end handles fetch calls to the back-end to pull all the users data (journal entries, goals, etc..) and displays it depending on the current link the user has clicked on (utilizing react-router). This project is a Single Page Application made for the Final Project of the FlatIron School Software Engineering Course. The backend is an API created on ruby on rails. If you would like to learn more about that, check out the backend repo linked at the top of the README.

You can also gain more of my insight and the process of this project on my [Medium Blog!](https://emrichmp.medium.com/)

### Project Planning
#### I used this initial checklist to break up and plan aspects of the project:

[X] Login/sign up page
    [X] - form for login
    [X] - link to sign up page
    [X] - form for sign in

[X] myDiary page
    [X] - List meals
    [X] - List foods under meals
    [X] - add form under each meal after foods to add a food

[X] myGoals page 
    [X] - Section for Calorie and Macro goals
    [X] - Edit button -> renders form to change it

[X] myHistory
    [X] - Shows date
    [X] - under shoes calories consumed vs calories goal and the deficit
    [X] - pulls all journal instances that belongs to that user

[X] TDEE calc
    [X] - Form for inputs...
        [X] - weight
        [X] - age
        [X] - sex
        - calculates calories
    [X] - Takes calc calories and does macro split of...
        - 1 g Protein per gram of bw
        - 20% calories in fat
        - rest in carbs

### Contact Info
If you have any questions about this app or want to contact me in general, please email me at emrichmp@gmail.com.

### License
Copyright 2021 Emrich-Michael Perrier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Link to License: https://opensource.org/licenses/MIT