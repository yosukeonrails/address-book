

import React, { Component } from 'react';
let Book = require('../address-book.js');

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

export default Sorter