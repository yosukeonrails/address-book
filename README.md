
## ADDRESS BOOK WEB APPLICATION / UI UX CHALLENGE

By [Yosuke Hishinuma](mailto:yosukeonrails@gmail.com)

[yosukeonrails.github.io](https://github.com/yosukeonrails)

## Installations and Instructions

1. Clone or download the file from:
   https://github.com/yosukeonrails/address-book

   or use the Terminal or Command Line:

   $git clone https://github.com/yosukeonrails/address-book.git

2. Navigate to the folder with Terminal or Command Line:

   $cd address-book

3. Make sure to have the latest version of Node.
 
   For Macs install through terminal with:

   $brew install node

   or to upgrade node:

   $brew upgrade node 

   Or for Windows install through the website:
   https://nodejs.org/en/download/

4. Once in the directory, run `npm install` in order to install all dependencies. 
   
5. Run the program with `npm start`. This will start a server on localhost port 3000 and the application!

   Open your browser of choice and navigate to: http://localhost:3000/ and enjoy!

8. Navigate files inside "address-book" to see further in the code and the comments associated to the most relevant methods.


   ## Technologies and Dependancies 

   The application was built using React 16.2.0.

   ## Problem

   Given a javascript array of 100,000 objects where each object is an address containing the following fields (assume that this array is returned by an ajax call):

   FirstName
   LastName
   Country
   Street
   City
   State
   Zip
   Phone
   Build a single page and react JS component that implements an HTML/CSS table that displays the data as rows

   Each row should be one object from the array and each column should be one element of the object.

   The table should have following controls:

   Page Size dropdown: This dropdown will let you select the page size and have values like (5 Items, 10 Items, 25 Items, 50 Items, 75 Items, and 100 Items).
   Next Button: The next button pages forward and loads the next set of rows
   Prev Button: The previous button page pages backward and loads the previous set of rows
   Count: The count should show the current indices and total number of items (eg: 11-20 of 100)
   Sorting: The rows should be sortable by clicking the column header

   ## The Process

   The first step in this project was to create the structures for the data set necessary for the application. For this reason, I created two main classes, namely, User and AddressBook both which encompasses the methods and the data for the functionality of the whole application.

   My next step was to divide up the applications into components and sketch out the data flow between them. Thus, each component was created one by one unfolding from the master component App.js. 

   Additional functionalities then were added as a bonus for the project such as the ability to create more address books and generating random contacts.


   ## The Code

   See src folder in the main directory for reference.

   ### `App.js`  "Where it all begins."

   `App.js` is the main component of the React application and all of the components flows from this component.
   This component is responsible for the creation of the mockup user called `user1` which is an instance of the `User` class and handling the data flow between child components. 


   ### `components` "We are many, but we are one"  

   The components in the `components` folder, are each divided up according to their functionality, which keeps the code organized while making many functionalities and components in the application re-usable. 

   ## `User` and `AddressBook` class."On-Object-Orientation"

   The application was built from the beginning, with object oriented programming in mind. Reason being that most functions and data emanates from those two classes.
   The `User` class is a user that owns many address books and each `AddressBook` class is an address book that holds many contacts. Then each class has methods that will modify or add elements to the data that they hold such as the `sortBookBy` and the `pageNate` methods.


   ## Bonuses!

   #### Besides the implementation of the main requirements, some additional functionalities were added to the application.

   `addNewBook`
   In the main navigation you might notice a new green button with a plus sign. This button will generate a new instance of `AddressBook` and add it to the `User` class `AddressBooks` array, thus creating a new address book.

   `contactGenerator`
   Inside the `User` class, I created a method called `contactGenerator` which will take an array of contacts and mix and match random first names and last names as well as locations. Then it creates a new array of `n` number of contacts.

   Notice that `sort` function as well as `pagenate` function are able to keep each book with it's own persistant filters, so that 
   the user is able to look into each adress book by it's own settings.

   



