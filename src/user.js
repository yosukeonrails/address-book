
const AddressBook = require('./address-book.js');

 class User{
    
    constructor(addressBooks=[]){
        this.addressBooks = addressBooks
    }
    
    addAddressBook(book){
         this.addressBooks.push(book);       
    }

    addManyAddressBooks(address_boook_array , name_array=[]){
      
        for(let n in address_boook_array){
           
           let contactlist= address_boook_array[n];
           let number = parseInt(n)+1;
           let name = (name_array[n]) ? name_array[n] : "AddressBook "+number; 
           let ab = new AddressBook(contactlist, name);
           this.addAddressBook(ab); 

        }

    }
     
 }


 module.exports = User;



