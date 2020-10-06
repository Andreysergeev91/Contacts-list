import React, { Component } from "react";
import "./styles.css";
import ContactsList from "./Components/Contacts-list";
import DetailedContact from "./Components/Detailed-contact";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  //initial state
      userData: [],
      user: null
    };
    this.gettingDataFromAPI = this.gettingDataFromAPI.bind(this); //binding class methods
    this.handleInfoChange = this.handleInfoChange.bind(this); //binding class methods
    this.handleLink = this.handleLink.bind(this); //binding class methods
  }

  componentDidMount() {
    //сhecking of data in localstorage
    if (localStorage.getItem("userData") === null) {
      return this.gettingDataFromAPI();
    } else {
      let data = JSON.parse(localStorage.getItem("userData"));
      return this.setState({ userData: data });
    }
  }


  //class method for receiving data from API
  gettingDataFromAPI() {

    return fetch("http://demo.sibers.com/users")
      .then(res => res.json())
      .then((data) => {
        this.setState({ userData: data });
        localStorage.setItem("userData", JSON.stringify(this.state.userData));
      });
  }


  //class method for updating data in component state when contact data is changed in Detail-contact component
  //this method is transfered with props to Detail-contact Component 
  handleInfoChange(info, id) {
    const userData = this.state.userData.slice();
    userData.map((item) => {
      if (item.name === id) {
        item.name = info.name;
        item.phone = info.phone;
        item.company.name = info.company;
        item.website = info.website;
      };
      return item;
    });
    this.setState({ userData: userData });
    localStorage.setItem("userData", JSON.stringify(this.state.userData));
  }

//class method for transfer individual user data to each Detail-contact component 
//this method is transfered with props to ContactsList Component 
  handleLink(item) {
    this.setState({ user: item });
  }



  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact>
              <Header />
              <ContactsList handleActiveLink={this.handleLink} data={this.state.userData} />
            </Route>
            <Route path="/:id" children={<DetailedContact user={this.state.user} onNameChange={this.handleInfoChange} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
