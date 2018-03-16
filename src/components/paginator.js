
import React, { Component } from 'react';
let Book = require('../address-book.js');

class Pagenator extends React.Component {
    constructor(props){
       super(props);
       this.state={options:"none"}
       this.selectOption = this.selectOption.bind(this);
    
    }

    openOptions (option){
        let switch_to=  (option ==="none") ? "block" : "none";
        this.setState({options:switch_to}); 

     }

     selectOption(e){
   
         let chunk= e.target.value;
         this.props.pagenate(chunk, this.props.book.page);
     }



    render(){
        let arrow= <i className="fas fa-sort-down"></i>;
          
         return(
             <div className="pagenator">

               <div className="items-per-page">items per page:</div>
                <div className="pagenator-chunk">
                <div className="pagenator-toggle" onClick={()=>{ this.openOptions(this.state.options) }}> {this.props.book.chunk} {arrow}  </div>
               

                <div style={{display:this.state.options}}  className="sorter-options-container">

                        <div id="pagenate-arrow" ><i className="fas fa-caret-up"></i></div>

                        <div onMouseLeave={()=>{this.openOptions("block")}} id="pagenate-options" className="sorter-options">
                            <div id="sort-by-header">  <li ></li></div>
                            <ul onClick={(event)=>{this.openOptions("block"); this.selectOption(event)}}  >
                                <li value="5">5</li>
                                <li value="10">10</li>
                                <li value="25">25</li>
                                <li value="50">50</li>
                                <li value="75">75</li>
                                <li value="100">100</li>
                            </ul> 
                        </div>

                </div>
                </div>
               

               <div className="items-of-total">
                {this.props.book.page_start} - {this.props.book.page_end} of {this.props.book.length}
          

               </div>

                <div className="pagenator-arrows">
                   
                   <span id="pagenator-arrow"><i className="fas fa-chevron-left"></i></span>
                   <span id="pagenator-arrow"><i className="fas fa-chevron-right"></i></span>
                   
                </div>

             </div>
         )
    }

}

export default Pagenator;