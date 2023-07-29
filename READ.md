Rest-rant App:

We will build a project together throughout this course in multiple steps. This is part one. This activity is a fully RESTful restaurant reviewer app that we will call REST-Rant. At any time, you can view a finished example of REST-Rant. This app will have a real database powering the information behind it, and we will be able to add, update, and delete restaurants (full CRUD) as well as add and delete comments and reviews.

To give you an idea of where we are headed, here is the roadmap for project REST-Rant. These steps may occur as homework, labs, or code-alongs depending on your class schedule.

Part 1: Project setup, stub three routes, and creating a README file
Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
Part 3: Making more views, creating a layout page, and expanding your README
Part 4: Adding some style with CSS
Part 5: Forms, validation, and navigation
Part 6: Implementing delete functionality and adding a DELETE route
Part 7: Implementing edit form and functionality, adding a PUT route
Part 8: Implementing the Mongoose ODM
Part 9: Seed data, validations, and helper methods
Part 10: Adding commentary: rants and raves
Part 11: Populating data for star ratings
Part 12: Deploying your project
You may feel intimidated by a large project, but we are going to start really small with some things we already know how to do. Trust that we can go far by taking a lot of small steps!

Let's get started.

Part 1:

Part One: Get Your Personalized Checklist
Find that handy, personalized list of how to build an Express app from scratch. Just in case you have lost yours, here is Jane's list.

Directions
Follow the directions for setting up an Express app from scratch.
This time, your folder should be named rest-rant.
When you are done following the directions for setting up an Express app from scratch, you should have:

<!-- 
A folder named rest-rant
A package.json file in rest-rant
An index.js file in rest-rant
Code in index.js that looks like the code below:

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000) 
-->

Part Two: Set Up a .gitignore File
A good practice with every big project is to upload it to GitHub right away. You may have the impression that you should wait until your project is polished and perfect to start using Git and GitHub. Quite the contrary! Remember, version control helps us by tracking working code at each stage of development that we can roll back to. It also allows multiple developers to work on a project at the same time, which will become more and more important throughout your career. It is rare that you will be working on something by yourself as a developer.

Our first step will be ensuring files that we do not want to have on GitHub are never posted there. In our next step, we will focus on initializing a GitHub repository.

Directions
Create a file called .gitignore in your rest-rant folder.
Note: If you are on a Mac, a warning message may pop up asking if you want to start a file name with a dot. You definitely do. Ignore the warning.
In the .gitignore file, add the text node_modules.
In the .gitignore file, add the text .env on a new line.
In the .gitignore file, add the text .DS_Store.
Check to make sure the text in your .gitignore file looks like the code snippet below:

<!-- 
node_modules
.env
.DS_Store 
-->

Part Three: Set Up GitHub
This part you have done before, but as a refresher, we will post the directions step by step. We will create a repository on GitHub, link it to our existing project, and push the project up.

Directions
1. Run the command git init on your terminal program in the rest-rant folder.

2. Run the command git add . or git add -A on your terminal.

3. Run the command git commit -m "Initial commit" on your terminal. This will serve as your very first commit for this project!

4. Open your internet browser and navigate to GitHub. Make sure you are logged in.

5. Click the New button (shown below) to make a new repository.

GitHub New Repository Button
6. Name your repository project-REST-rant or something similar that you prefer. Do not allow GitHub to automatically create a README or .gitignore file for you. We are making both of those on our own.

7. You can copy the terminal code from GitHub if you like. Return to your terminal for steps 8 and 9.

8. You will need to run the git remote add origin [YOUR_REPO_LINK] to link the project to your existing code. You can copy the repository link from GitHub by clicking the clipboard icon.

9. Run the command git push origin main to push your project code to the newly created and linked repository.

10. Back in your browser, refresh the GitHub page. You should now see your code up on GitHub. From now on, all we need to do to put more code on GitHub is add, commit, and push.

Part Four: Add a .env File
For now, all we are going to add is a PORT variable. Later, however, we will use this file for other important private data, like database connection strings.

Note: Your .env file is NOT a JavaScript file. Skip the semicolons, parentheses, spaces, and other JS-like formatting.

Directions
Create a .env file. Again, if you are on a Mac, you may receive a warning message, which you can ignore.
In your .env file, add the text PORT=3000 (feel free to substitute the port number to another if you prefer).
Run the command npm i dotenv in your terminal.
Open your index.js file and add require('dotenv').config() to the top line.
Change app.listen(3000) to app.listen(process.env.PORT) so that we pull the PORT variable from the .env file.
Ensure your code matches the code snippets below.
.env
<!-- PORT=3000 -->
index.js
<!-- require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT) -->

Part Five: Make a Wildcard Route
Let's make a 404 route! This way, if a user of our application types in a route that does not exist (that we have not defined), then we can make sure they get a nice 404 page kindly telling them they are trying to access a page that does not exist, instead of letting the app show an ugly error to them.

Directions
1. Make another route below your homepage route with the path set to the wildcard operator. It is important that this route is at the bottom, otherwise it will override your other pages.

index.js

<!-- require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    
})

app.listen(process.env.PORT) -->
2. Set your res.send() content to an h1 tag containing the text 404 Page.

index.js
<!-- require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT) -->

3. Let's have our 404 page route legitimately return a status code 404. We can do this by calling .status(404) on the response. You can chain this call together with .send(), and it will look like the code below.

index.js

<!-- require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT) -->


