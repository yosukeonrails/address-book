
const AddressBook = require('./AddressBook.js');

 class User{
    
    constructor(addressBooks=[]){
        this.addressBooks = addressBooks
    }
    
    addAddressBook(book){
         let book_name = (book.name)? book.name : "untitled "+this.addressBooks.length;
         book.name = book_name;
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

    contactGenerator(n, arrays){
          
       
        let fields=["first_name","last_name","address", "city", "state", "zip","phone","country"]
        let new_array=[];
        
        for(let i=0; i < n ; i++){
           
            let ran_array= Math.floor(Math.random()* (arrays.length-1))+0;
             let array = arrays[ran_array];
             let max = array.length-1;
             let ranContact= {};
             let ranLocation= array[Math.floor(Math.random()*max)+0];
          
              for(let key in fields){
                  let random_number = Math.floor( Math.random()*max )+0;
                  let element = array[random_number][fields[key]];

                 if(fields[key] === "first_name" ){ ranContact[fields[key]]= element }
                     else if(fields[key] === "last_name" ){ ranContact[fields[key]]= element } 
                         else{ ranContact[fields[key]]= ranLocation[fields[key]] }         
                  
              }
              
              new_array.push(ranContact);
        }
        
        let number =(  this.addressBooks.length === 0 ) ? "" : this.addressBooks.length; 
        let b= new AddressBook(new_array,"untitled "+number);
        
        this.addAddressBook(b);
        return new_array;
    }

     
 }


 module.exports = User;



