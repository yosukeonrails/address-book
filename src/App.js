import React, { Component } from 'react';
import './App.css';
import AddressBookComponent from './components/address-book.js'
import Navigation from './components/navigation.js'
import {contact_list1, contact_list2,contact_list3,contact_list4} from './contacts.js';

let AddressBook = require('./AddressBook.js')
let User = require('./user.js');
let address_book_array= [contact_list1, contact_list2,contact_list3,contact_list4];

// creates a mock up user to create mock up data

  const user1 =  new User();

  user1.contactGenerator(100000 , address_book_array);
  user1.contactGenerator(1000 , address_book_array);
  user1.contactGenerator(100 , address_book_array);


class App extends React.Component {
  
   constructor(props){
      super(props)
      
      this.selectBook = this.selectBook.bind(this);
      this.sort = this.sort.bind(this);
      this.pagenate = this.pagenate.bind(this);
      this.addNewBook = this.addNewBook.bind(this);
      this.generateContacts= this.generateContacts.bind(this);

     user1.addressBooks[0].pageNate(10 , 0);
     user1.addressBooks[0].sortBookBy("last_name");

      this.state = { 
          user:user1 , 
          selected_book:0 , 
          book:user1.addressBooks[0],
          displayed:user1.addressBooks[0].displayed,
          current_chunk:10, // chunk default to be 10.
          filter:user1.addressBooks[0].filter
         };
    }

    generateContacts(n){

      let u = new User();
      let contact_array=u.contactGenerator(n , address_book_array);   
      let book =user1.addressBooks[this.state.selected_book]
            
      book.addList(contact_array);
      book.sortBookBy(book.filter);

       this.setState({    
        book:book,
        displayed:user1.addressBooks[this.state.selected_book].displayed   
        })

    }

    sort(criteria){
      let book = this.state.user.addressBooks[this.state.selected_book];

      book.sortBookBy(criteria);
      book.pageNate(this.state.book.chunk , this.state.book.page);
  
      this.setState({
        displayed:book.displayed,
        filter:book.filter
      })
     }
    
    addNewBook(){

       let book= new AddressBook();

       user1.addAddressBook(book)

       this.setState({
          user:user1
       })

       this.selectBook(user1.addressBooks.length-1)
    }

   pagenate( chunk , pages){

      let book = this.state.user.addressBooks[this.state.selected_book];

       book.pageNate(chunk, pages);

      this.setState({

        book:book,
        displayed:book.displayed,
        current_chunk:chunk

      });


  }

   selectBook(id){
      
      let book = this.state.user.addressBooks[id];

      //book.sortBookBy("last_name");
      book.pageNate(book.chunk, book.page );
      book.sortBookBy(book.filter);
      
      this.setState({ 
        selected_book:id,
        displayed: book.displayed,
        book:book,
        filter:book.filter
      })
  
   }

   render() {
    
    return (
      <div className="App">

          <Navigation user={this.state.user} addNewBook={this.addNewBook} selected_book={this.state.selected_book} selectBook={this.selectBook} />       
          <AddressBookComponent  generateContacts={this.generateContacts}  pagenate={this.pagenate} book={this.state.book} sort={this.sort} displayed={this.state.displayed} address_book={this.state.user.addressBooks[this.state.selected_book]} />

      </div>
    );
  }
}



export default App;
