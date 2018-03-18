

import React, { Component } from 'react';
let Book = require('../AddressBook.js');
let fields={
    first_name:"First Name",
    last_name:"Last Name",
    address:"Address",
    city:"City",
    state:"State",
    zip:"Zip",
    phone:"Phone",
    country:"Country"
}



class Sorter extends React.Component {

    constructor(props){
       super(props);
    
        this.selectOption = this.selectOption.bind(this);

        this.state={ options_open:false,
            options_animation:"", arrow_style:{}, 
            sortingBy:"Last Name" }
           
    }

    openOptions (options_open){

        let arrow= {};

        let animation=  (options_open) ? "fade-out" : "fade-in";
        options_open = (options_open) ? false : true;
  
         if(options_open){  arrow =  {transform:"rotate(180deg)" , marginTop:"5px"} }
         this.setState({options_animation:animation, arrow_style:arrow, options_open:options_open}); 
    }

    selectOption(e){
       
        let sortBy= e.target.id;
        this.setState({sortingBy:e.target.innerText})
        this.props.sort(sortBy);
    }

    render(){
        
        let down= <i className="fas fa-sort-down"></i>;


         return(
             <div className="sorter">
                <span>Sort by:</span>
                
                <div className="sorter-criteria" >
                        <div className="sorter-toggable" onClick={()=>{ this.openOptions(this.state.options_open) }} >
                        <div className="sorter-criteria-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }}> 
                        <span id="sorter-tag" >{fields[this.props.book.filter]}</span> 
                        <span id="sorter-arrow-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }} style={this.state.arrow_style}  >{down}</span> 
                        </div>
                        </div>

                        <div style={{display:this.state.options, opacity:this.state.opacity}}  className={ "sorter-options-container " + this.state.options_animation}>
                                <div id="sorter-arrow-up" ><i className="fas fa-caret-up"></i></div>

                                <div onMouseLeave={()=>{this.openOptions(true)}} className="sorter-options">
                                    <div id="sort-by-header"  onClick={()=>{ this.openOptions(this.state.options) }} > <li ></li></div>
                                    <ul onClick={(event)=>{this.openOptions(true); this.selectOption(event)}}  >
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

export default Sorter