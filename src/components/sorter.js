

import React, { Component } from 'react';
let Book = require('../address-book.js');

class Sorter extends React.Component {
    constructor(props){
       super(props);
    
        this.selectOption = this.selectOption.bind(this);
        this.state={ options_open:false,options_animation:"", arrow_style:{}}
           
    }

    openOptions (options_open){
        let arrow= {};
        console.log(options_open)

        let animation=  (options_open) ? "fade-out" : "fade-in";
            options_open = (options_open) ? false : true;
            if(!options_open){  arrow =  {transform:"rotate(180deg)" , marginTop:"5px"} }
            
         this.setState({options_animation:animation, arrow_style:arrow, options_open:options_open}); 
    }

    selectOption(e){
        let sortBy= e.target.id;
        console.log(this.props)
        this.props.sort(sortBy);
    }

    render(){
        
        let down= <i className="fas fa-sort-down"></i>;
       // let up = <i className="fas fa-sort-up"></i> 
        // let arrow= (this.state.options === "block") ? : ;
        console.log(this.state.options_animation)

         return(
             <div className="sorter">
                <span>Sort by:</span>
                
                <div className="sorter-criteria" >
                        <div className="sorter-criteria-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }}> 
                        <span >Last Name</span> 
                        <span id="sorter-arrow-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }} style={this.state.arrow_style}  >{down}</span> 
                        </div>
                      
                        <div style={{display:this.state.options, opacity:this.state.opacity}}  className={ "sorter-options-container " + this.state.options_animation}>
                                <div id="sorter-arrow-up" ><i className="fas fa-caret-up"></i></div>

                                <div onMouseLeave={()=>{this.openOptions(true)}} className="sorter-options">
                                    <div id="sort-by-header"  onClick={()=>{ this.openOptions(this.state.options) }} >  <li ></li></div>
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