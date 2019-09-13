# [Rock_on](https://rock-on-5566.herokuapp.com/)

A full-stack project. Clone of [Robinhood](https://robinhood.com/)

The milestones are as below:

9/2 
* Finished sign up/sign in functionality and set up some of the backend stuff/views

9/4
* Polished the navbar, using flex container
  
9/5
* Implemented all functional requirements from Trevor

  Functionality
    - [x] The main button with logo should link to `/`
    - [x] Has working demo login
    - [x] Smooth, bug free navigation
  ​

  Before Login
    - [x] The `/login` page should not display a link to `Log In`. Same for `/signup`
    - [x] Going to a random route `/#/oweiniouewbrviuwebv` should redirect or display a 404 page
    - [x] Errors should display for both `/signup` and `/login`.
    - [x] Errors should clear when moving between `/signup` and `/login`.
    - [x] Can sign up a user
    - [x] Can sign in as a user
    - [x] Can log out a user
    - [x] Can't sign up with the same username/email
    - [x] Pressing enter after filling out the session form should use the form data, not the demo user
  ​

  After Login
    - [x] Should not be able to visit `/login` or `/signup`
    - [x] Should be able to refresh the page and still be logged in
  ​

  ​Style
  - [ ] The site should look exactly like the actual site
  - [x] All relevant elements should have `cursor: pointer` on hover
  - [x] When errors are displayed, most elements should not move around the page (particularly input boxes)
  - [x] Remove Redux logger and all console.log()'s from production

  Seeds
    - [x] Adequate and appropriate seeds

9/6
* Refactored the code
* Added a search form with icon

9/7
* Refactored the code, Use only one session form.
* Ready for stock api test
* Read the document

9/8
* Cleaned up scss files, organized them properly

9/9
* Deployed to Heroku, fixed bugs
* Can fetch and display stocks from the api, needs to render them properly

9/10
* Finished the stock panel, can display all available stocks
* Implemented search function and kayboard navigation
* Added mouse hover effect on the search result

9/11
* Finished the transaction box

9/12
* Refactored the code, use a transaction_form_container to handle the props
* Removed all unnecessary states, use props instead

9/13
* Buy/Sell stocks function working properly
* Fixed all known bugs