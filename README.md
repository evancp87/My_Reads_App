# MyReads Project

This is my final  project for Udacity's React Fundamentals course. I refactored a static example of the CSS and HTML markup provided by Udacity, adding functionality and interactivity to the app.


To install:

* install all project dependencies with `npm install`
* start the development server with `npm start`

# Details

This app is a collection of 3 shelves on a main page, with a search page that allows the user to search a database of books and add the books to the shelves, 'Currently Reading', 'Want to Read' and 'Read'. Each book in the search has a selector button that allows the user to designate a shelf and users can move the books between shelves as they wish. The books are not assigned to a shelf as default, but once assigned to a shelf appears in both the search and main page labelled on the shelf to which they were allocated. The number search terms are limited due to the nature of the API used.


# How to use

git clone the repository
Install npm
run: npm install
The app will run on localhost:3000

NB:
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.