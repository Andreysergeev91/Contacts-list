import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
    
   

    render() {
        const user =this.props.item;
        
        return (
            //when contact is clicked the transferred function is called
            <div onClick={()=>this.props.handleLink(user)}  className="contact">
                <img className="contact__avatar" alt={user.name} src={user.avatar}/>
                <h2 className="contact__name">{this.props.name}</h2>
              </div>

        );

    };
}

export default Contact;
