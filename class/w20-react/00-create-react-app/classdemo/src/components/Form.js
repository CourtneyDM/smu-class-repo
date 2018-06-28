import React, { Component } from "react";

class Form extends Component {
     // Setting the initial values of this.state.username and this.state.password
     state = {
          username: "",
          password: ""
     };

     // Handle any change
     handleInputChange = event => {
          // Pull the name and value properties off the event.target (the element which triggered the event)
          const { name, value } = event.target;

          // Set the state for the appropriate input field
          this.setState({
               [name]: value
          });
     };

     handleFormSubmit = event => {
          event.preventDefault();
          alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
     };

     render() {
          return (
               <form>
                    <p>Username: { this.state.username }</p>
                    <p>Password: { this.state.password }</p>
                    <input
                         type="text"
                         placeholder="Username"
                         name="username"
                         value={ this.state.username }
                         onChange={ this.handleInputChange }
                    />
                    <input
                         type="password"
                         placeholder="Password"
                         name="password"
                         value={ this.state.password }
                         onChange={ this.handleInputChange }
                    />
                    <button onClick={ this.handleFormSubmit }>Submit</button>
               </form>
          );
     }
}

export default Form;
