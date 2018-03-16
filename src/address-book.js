 
 
 
 class AddressBook {

     constructor(addressList, name = null, chunk = 5 , page =0){     
        this.addressList=addressList;  
        this.displayed = this.pageNate(5,0);
        this.name=name;
     }

     pageNate(chunk, page){
        
        let start= page*chunk;
        let end= start+chunk;

        if(page < 0  ){
        return null
        }

        let section = this.addressList.slice(start, end)
        if(section.length === 0 ){ return null  }

        this.displayed = section;
        
         return section
    } 

    sortBookBy(criteria){
                
         this.addressList.sort(function(a , b ) {

            var nameA = a[criteria].toUpperCase(); // ignore upper and lowercase
            var nameB = b[criteria].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            // names must be equal
            return 0;
            });
        return this.addressList
    } 
 }


module.exports = AddressBook;

 

// class Contact{

    

// }
