import React, { Component } from "react";
import "./Contacts-list.css";
import Contact from "./Contact";
import { Link } from "react-router-dom";

class ContactsList extends Component {

    render() {
        const userData = this.props.data;
        return (
            <ul className="contacts-list">
                {userData.map((item, index) => {

                    return <li className="list-item-contact" key={index}>
                        <Link className="contact-link" to={item.name}>
                            <Contact handleLink={this.props.handleActiveLink} item={item} name={item.name} />
                        </Link></li>
                })}
            </ul>
        );
    }
}

export default ContactsList;
