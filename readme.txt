This project is to mock a website like Netflix.

Here are the main functions for each catalog:
public: static resource (like JSON files)
index: the root directory
src/pages: different components
src/store: the store and reducer for Redux
src/http: http request (GET) to fetch the data

I used React to realize the website.

I used Redux for the state management. The store has store the data of num, listData, recommendData. We can dispatch different actions (like update Mylist, update recommend list, add, remove) to the reducer and return new state, so that we can change the data. Using the connect() method to bind the state to the components.

I also used the axios of the AJAX to fetch the backend data.




