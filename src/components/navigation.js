import React, { Component } from 'react';


export class Navigation extends React.Component {
  
   constructor(props){
      super(props)
    }
     
   render() {
    let selected_book = this.props.selected_book;
    let navItems = this.props.user.addressBooks.map((book, i )=>{

          let selected = (selected_book == i ) ? true : false
         
          return <NavItem name={book.name} selected={selected} id={i} key={i} selectBook={this.props.selectBook} />
    })

    return (
      <div className="navigation">
          
         <div>
            {navItems}
         </div>
         <div onClick={this.props.addNewBook} className="nav-item new-address-book">
                  <h2><i class="fas fa-plus-square"></i></h2>
         </div>   
      </div>
    );
  }
}


export default Navigation

class NavItem extends React.Component {
    
    constructor(props){
        super(props)
        this.select= this.select.bind(this);

    }

    select(id){
    
       this.props.selectBook(id)
    }

    render (){
     let backColor= (this.props.selected) ? '#7F56C5' :  '#282653';

         return(

            <div onClick={()=>{this.select(this.props.id)}} className="nav-item" style={{backgroundColor:backColor}}  >
                <h1> {this.props.name} </h1>
            </div>

         )
        
    }
    
}