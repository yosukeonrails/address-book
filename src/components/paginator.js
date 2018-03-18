
import React, { Component } from 'react';
let Book = require('../AddressBook.js');

class Pagenator extends React.Component {

    constructor(props){
       super(props);
       this.state={ options_open:false, options_animation:"", arrow_style:{}}
       this.selectOption = this.selectOption.bind(this);
       this.selectPage = this.selectPage.bind(this);
    }

    openOptions (options_open){

        let arrow= {};

        let animation=  (options_open) ? "fade-out" : "fade-in";
            options_open = (options_open) ? false : true;
            if(options_open){  arrow =  {transform:"rotate(180deg)" , marginTop:"5px"} }
  
         this.setState({options_animation:animation, arrow_style:arrow, options_open:options_open}); 
    }

     selectPage(direction){

        let current_page = this.props.book.page;   
        let newPage =  (direction == "next") ? current_page+1 : current_page-1;
        let end = newPage*this.props.book.chunk+this.props.book.chunk;
        let start = end - this.props.chunk+1;

        if(current_page < 0 || current_page >= end){ newPage= this.props.book.page };
        this.props.pagenate(this.props.book.chunk , newPage)

     }

     selectOption(e){
   
         let chunk= e.target.value;
         this.props.pagenate(chunk, this.props.book.page);
     }



    render(){
        let arrow= <i className="fas fa-sort-down"></i>;  

         return(
             <div className="pagenator">

                <div className="pagenator-left">
                    <div className="items-per-page">items per page:</div>

                    <div className="pagenator-chunk">

                    <div  className={"sorter-options-container "+ this.state.options_animation}>

                    <div id="pagenate-arrow" ><i className="fas fa-caret-up"></i></div>

                    <div onMouseLeave={()=>{this.openOptions(true)}} id="pagenate-options" className="sorter-options">
                    
                    <div id="sort-by-header">  <li ></li></div>
                        <ul onClick={(event)=>{this.openOptions(true); this.selectOption(event)}}  >
                        <li value="5">5</li>
                        <li value="10">10</li>
                        <li value="25">25</li>
                        <li value="50">50</li>
                        <li value="75">75</li>
                        <li value="100">100</li>
                        </ul> 
                    </div>

                    </div>

                    <div className="pagenator-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }}> 
                        <span >{this.props.book.chunk}</span> 
                        <span id="pagenation-arrow-toggle" onClick={()=>{ this.openOptions(this.state.options_open) }} style={this.state.arrow_style} > {arrow} </span> 
                    </div>
                 </div>

              
                </div>
               

               <div className="items-of-total">
                {this.props.book.page_start} - {this.props.book.page_end} of {this.props.book.length}
          
                        <div className="pagenator-arrows" >
                        
                        <span onClick={(event)=>{ this.selectPage("prev")}} id="pagenator-arrow" ><i className="fas fa-chevron-left"></i></span>
                        <span onClick={(event)=>{ this.selectPage("next")}} id="pagenator-arrow" ><i  className="fas fa-chevron-right"></i></span>
                        
                        </div>
               </div>

            

             </div>
         )
    }

}

export default Pagenator;