import React, { Component } from 'react';
import './App.css';

import AddressBookComponent from './components/address-book.js'
import Navigation from './components/navigation.js'
import {contact_list1, contact_list2,contact_list4} from './contacts.js';


let address_book_array= [contact_list1, contact_list2,contact_list4];
let nameArray= ["Nav Item 1", "Nav Item 2", "Nav Item 3"];
let AddressBook = require('./address-book.js')

let User = require('./user.js');
// creates a mock up user to create mock up data

const user1 =  new User();
user1.addManyAddressBooks(address_book_array, nameArray);


class App extends React.Component {
  
   constructor(props){
      super(props)
      
      this.selectBook = this.selectBook.bind(this);
      this.sort = this.sort.bind(this);
      console.log(user1)
      this.state = { user:user1 , selected_book:0 , displayed: user1.addressBooks[0].displayed , chunk:5, page:0 };

    }

    sort(criteria){

      let book = this.state.user.addressBooks[this.state.selected_book];
      book.sortBookBy(criteria);
      book.pageNate(this.state.chunk , this.state.page);
      console.log(book);
      this.setState({displayed:book.displayed})

   }


     
   selectBook(id){

  
      this.setState({ selected_book:id,
        displayed: this.state.user.addressBooks[id].displayed
      })
  
   }

   render() {
    console.log('re-rendering')
    console.log(this.state.displayed);

    return (
      <div className="App">

          <Navigation user={this.state.user} selected_book={this.state.selected_book} selectBook={this.selectBook} />
         
          <AddressBookComponent  sort={this.sort} displayed={this.state.displayed} address_book={this.state.user.addressBooks[this.state.selected_book]} />

      </div>
    );
  }
}



export default App;
