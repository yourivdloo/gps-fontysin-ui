import React from "react";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pcn: '', firstName: '', lastName: ''}
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          const target = event.target;
          const value = target.value;
          const name = target.name;

          this.setState({
              [name]: value 
          })
      }
    
      handleSubmit(event) {
        const url = new URL("https://fontysin.azurewebsites.net/users/new")
        url.search = new URLSearchParams(this.state).toString();

        const response = fetch(url, {
            method: 'POST'
        })

        event.preventDefault();
      }
    
      render() {
        return (
          <form class="col-sm-6" onSubmit={this.handleSubmit}>
            <label>
              PCN:<br />
              <input type="text" name="pcn" value={this.state.pcn} onChange={this.handleChange} />
            </label><br />
            <label>
              First Name:<br />
              <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
            </label><br />
            <label>
              Last Name:<br />
              <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
            </label><br /><br />
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default CreateUser