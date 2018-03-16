import React, { Component } from 'react';
import Pagenator from './paginator.js';
import  Sorter  from './sorter.js';
let Book = require('../address-book.js');



export class AddressBook extends React.Component {
  
   constructor(props){
      super(props);

      this.state= { 
          
        displayed:this.props.address_book.displayed, name:"Untitled"}
   
    }

  
     
   render() {

    let fied_size = {short:"8%", medium:"20%" ,large:"25%"} 
    let contacts = this.props.displayed.map((contact,i)=>{
        return <Contact data={contact} key={i} id={i}/>
    })
     

    return (
      <div className="address-book">
        
        {/* Navigation */}
        <div className="address-book-nav">

        <div className="nav-left">
            <span id="address-book-name">{this.state.name}</span> <Sorter sort= {this.props.sort}/>     
        </div>
       

        <div className="nav-right">
            <Pagenator pagenate= {this.props.pagenate} book={this.props.book}/>
        </div>

        </div>  
      
      {/* Address Book*/}
           
        <div className="address-book-fields">

          <div style={{width:fied_size.short}} className="address-book-fields-col">First Name</div>
          <div style={{width:fied_size.short}} className="address-book-fields-col">Last Name</div>
          <div style={{width:fied_size.short}} className="address-book-fields-col">Country</div>
          <div style={{width:fied_size.large}} className="address-book-fields-col">Address</div>
          <div style={{width:fied_size.short}} className="address-book-fields-col">City</div>
          <div style={{width:fied_size.short}} className="address-book-fields-col">State</div>
          <div style={{width:fied_size.short}} className="address-book-fields-col">Zip</div>
          <div style={{width:fied_size.mid}} className="address-book-fields-col">Phone</div>

        </div>

        <div className="address-book-contacts">
        
            {contacts}

        </div>

      </div>
    );
  }
}

export default AddressBook


class Contact extends React.Component {
    constructor(props){
       super(props);
    }

    render(){
   

        let fied_size = {short:"8%", medium:"20%" ,large:"25%"} 
         let color = (this.props.id %2 === 0 ) ? "#F0F0F0" : "#F7F7F7"
         return(
           <div className="contact" style={{backgroundColor:color}}>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.first_name}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.last_name}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.country}</div>
                <div style={{width:fied_size.large}} className="contact-fields-col">{this.props.data.street} St</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.city}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.state}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.zip}</div>
                <div style={{width:fied_size.mid}} className="contact-fields-col">{this.props.data.phone}</div>
           </div>
         )
    }

}




