
 class AddressBook {

    constructor(addressList=[], name =null, chunk = 5 , page =0, filter= "last_name" ){    

       this.addressList= addressList ;  
       this.displayed = this.pageNate(5,0);
       this.name=name;
       this.page= page;
       this.chunk= chunk;
       this.page_end= this.page*this.chunk+this.chunk;
       this.page_start = this.page_end - this.chunk +1;
       this.length= this.addressList.length;
       this.filter = filter;
    }

    addList(array){
       // concats a new list to the addressList
       this.addressList= [...this.addressList, ...array];
       this.displayed = this.pageNate(this.chunk, this.page);
    }

    pageNate(chunk, page){
    
       let start= page*chunk;
       let end= start+chunk;

       if(page < 0  ){
            return null
       }

       let section = this.addressList.slice(start, end)

       if(section.length === 0 && this.addressList.length > 0 || start > this.addressList.length){ return null  }
       
       this.displayed = section;
       this.chunk = chunk;
       this.page= page;
       this.page_end= (end > this.addressList.length)? this.addressList.length : this.page*this.chunk+this.chunk;

       this.page_start = (this.page_end ===0 )? 0 : start+1;
       this.length= this.addressList.length;

        return section
   } 

   sortBookBy(criteria){

       let sorted= this.addressList.sort(function(a , b ) {
          
           var nameA = (a[criteria])? a[criteria].toUpperCase() : "Ω" ; // ignore upper and lowercase
           var nameB = (b[criteria])? b[criteria].toUpperCase() : "Ω" ; // ignore upper and lowercase
       

           if (nameA < nameB) {
           return -1;
           }
           if (nameA > nameB) {
           return 1;
           }

           return 0;
           });
            
       this.addressList = sorted;
       this.displayed= this.pageNate(this.chunk,this.page);
       this.filter = criteria;

       return this.addressList
   } 



   

}


module.exports = AddressBook;