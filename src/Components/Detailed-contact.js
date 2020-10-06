import React, { useState } from "react";
import "./Detailed-contact.css";
import {
    useParams
} from "react-router-dom";

export default function DetailedContact(props) {
    let { id } = useParams();
    const { phone, company, website } = props.user;
    const [edittingState, setEdittingState] = useState(false); //state hook for toggle editting state
    const [companyValue, setCompany] = useState(company.name); //state hook for user's company name
    const [phoneValue, setPhone] = useState(phone); //state hook for user's phone
    const [websiteValue, setWebsite] = useState(website); //state hook for user's website
    const [name, setName] = useState(id); //state hook for user's name


    const handleClick = () => {
        let userInfo = {
            name,
            phone: phoneValue,
            company: companyValue,
            website: websiteValue
        };

        setEdittingState(false);
        props.onNameChange(userInfo, id);

    };


    if (!edittingState) {
        return (
            <div className="detailed-contact">
                <div className="background-container"></div>
                <img className="detailed-contact__avatar" alt={props.user.name} src={props.user.avatar} />
                <h1 className="detailed-contact__name">{name}</h1>
                <div className="detailed-contact__info-container">
                    <p className="detailed-contact__info-field">Phone:</p>
                    <p className="detailed-contact__info">{phoneValue}</p>
                    <p className="detailed-contact__info-field">Company:</p>
                    <p className="detailed-contact__info">{companyValue}</p>
                    <p className="detailed-contact__info-field">Website:</p>
                    <p className="detailed-contact__info">{websiteValue}</p>
                </div>
                <button className="detailed-contact__button" onClick={() => setEdittingState(true)}>Edit</button>
            </div>

        );
    } else {
        return (

            <div className="detailed-contact">
                <div className="background-container"></div>
                <img className="detailed-contact__avatar" alt={props.user.name} src={props.user.avatar} />
                <input className="detailed-contact__input-name" type="text" name="name" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                <div className="detailed-contact__info-container">
                    <p className="detailed-contact__info-field">Phone:</p>
                    <input className="detailed-contact__input" type="text" name="phone" defaultValue={phoneValue} onChange={(e) => setPhone(e.target.value)}></input>
                    <p className="detailed-contact__info-field">Company:</p>
                    <input className="detailed-contact__input" type="text" name="company" defaultValue={companyValue} onChange={(e) => setCompany(e.target.value)}></input>
                    <p className="detailed-contact__info-field">Website:</p>
                    <input className="detailed-contact__input" type="text" name="website" defaultValue={websiteValue} onChange={(e) => setWebsite(e.target.value)}></input>
                </div>
                <button className="detailed-contact__button" onClick={handleClick}>Save</button>
            </div>

        );
    }

};

