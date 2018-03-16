import React, { Component } from 'react';
let Book = require('../address-book.js')

export class AddressBook extends React.Component {
  
   constructor(props){
      super(props);

      this.state= { chunk:5 , page:0 , displayed:this.props.address_book.displayed, name:"Untitled"}
   
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
            <Pagenator/>
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


class Sorter extends React.Component {
        constructor(props){
           super(props);
        
            this.selectOption = this.selectOption.bind(this);
            this.state={options:"none"}
               
        }

        openOptions (option){
           let switch_to=  (option ==="none") ? "block" : "none";
           this.setState({options:switch_to}); 
        }

        selectOption(e){
            let sortBy= e.target.id;
            console.log(this.props)
            this.props.sort(sortBy);
        }

        render(){
            
            let arrow= <i className="fas fa-sort-down"></i>;
            

             return(
                 <div className="sorter">
                    <span>Sort by:</span>
                    
                    <div className="sorter-criteria" >
                            <div className="sorter-criteria-toggle" onClick={()=>{ this.openOptions(this.state.options) }}> Last Name {arrow} </div>
                            <div style={{display:this.state.options}}  className="sorter-options-container">
                                    <div id="sorter-arrow-up" ><i className="fas fa-caret-up"></i></div>

                                    <div onMouseLeave={()=>{this.openOptions("block")}} className="sorter-options">
                                        <div id="sort-by-header">  <li ></li></div>
                                        <ul onClick={(event)=>{this.openOptions("block"); this.selectOption(event)}}  >
                                            <li id="first_name">First Name</li>
                                            <li id="last_name">Last Name</li>
                                            <li id="country">Country</li>
                                            <li id="city">City</li>
                                            <li id="state">State</li>
                                        </ul> 
                                    </div>
                            </div>
                    </div>

                
                 </div>
             )
        }

}



class Pagenator extends React.Component {
    constructor(props){
       super(props);
       this.state={options:"none"}
    }

    openOptions (option){
        let switch_to=  (option ==="none") ? "block" : "none";
        this.setState({options:switch_to}); 
     }

     selectOption(e){
         let items= e.target.value;
        console.log(items)
     }



    render(){
        let arrow= <i className="fas fa-sort-down"></i>;
            
         return(
             <div className="pagenator">

               <div className="items-per-page">items per page:</div>
                <div className="pagenator-chunk">
                <div className="pagenator-toggle" onClick={()=>{ this.openOptions(this.state.options) }}> 10 {arrow}  </div>
               

                <div style={{display:this.state.options}}  className="sorter-options-container">

                        <div id="pagenate-arrow" ><i className="fas fa-caret-up"></i></div>

                        <div onMouseLeave={()=>{this.openOptions("block")}} id="pagenate-options" className="sorter-options">
                            <div id="sort-by-header">  <li ></li></div>
                            <ul onClick={(event)=>{this.openOptions("block"); this.selectOption(event)}}  >
                                <li>5</li>
                                <li>10</li>
                                <li>25</li>
                                <li>50</li>
                                <li>75</li>
                                <li>100</li>
                            </ul> 
                        </div>

                </div>
                </div>
               

               <div className="items-of-total">
                1-10 of 30
          

               </div>

                <div className="pagenator-arrows">
                   
                   <span id="pagenator-arrow"><i className="fas fa-chevron-left"></i></span>
                   <span id="pagenator-arrow"><i className="fas fa-chevron-right"></i></span>
                   
                </div>

             </div>
         )
    }

}

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




