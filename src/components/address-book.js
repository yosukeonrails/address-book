import React, { Component } from 'react';
import Pagenator from './paginator.js';
import  Sorter  from './sorter.js';
let Book = require('../AddressBook.js');



export class AddressBook extends React.Component {
  
   constructor(props){
      super(props);
        this.handleInput = this.handleInput.bind(this);
        this.generate = this.generate.bind(this);
  
        this.state= { 
        volume:1000,
        displayed:this.props.address_book.displayed, name:this.props.address_book.name} 
    }

    handleInput(e){
        let num = parseInt(e.target.value);

        let vol  = ( num < 0 || num > 100000) ? 1000 : num

        this.setState({
            volume: num
        })

    }
    generate(){
        this.props.generateContacts(this.state.volume)
    }
  
     
    render() {

    

        let fied_size = {short:"8%", medium:"20%" ,large:"25%"} 

        let contacts = 
        <div className="no-addresses">
        <h1> There are no adresses yet.</h1>
        <button onClick={this.generate} >Generate Random Contacts </button> X
        <input onChange={ (event)=>{ this.handleInput(event) } } type="number" min="0" max="100000" ></input> 
        </div>;

        if(this.props.displayed.length !== 0 ){
           contacts = this.props.displayed.map((contact,i)=>{
                return <Contact data={contact} key={i} id={i}  />
            })
        }
     
     

    return (
      <div className="address-book">
        
        {/* Navigation */}
        <div className="address-book-nav">

        <div className="nav-left">
            <span id="address-book-name">{this.props.address_book.name}</span> <Sorter sort= {this.props.sort}/>     
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
        
        let delay = this.props.key;
     //   animation: "fade-in 0."+delay+"s ease-in forwards", transition:"opacity 300ms ease-out"
        let fied_size = {short:"8%", medium:"20%" ,large:"25%"} 
         let color = (this.props.id %2 === 0 ) ? "#F0F0F0" : "#F7F7F7"
         return(
           <div className="contact" style={{backgroundColor:color}}>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.first_name}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.last_name}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.country}</div>
                <div style={{width:fied_size.large}} className="contact-fields-col">{this.props.data.address}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.city}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.state}</div>
                <div style={{width:fied_size.short}} className="contact-fields-col">{this.props.data.zip}</div>
                <div style={{width:fied_size.mid}} className="contact-fields-col">{this.props.data.phone}</div>
           </div>
         )
    }

}




