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

        // const response = fetch(url, {
        //     method: 'POST'
        // })

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
            <label>
              Email address:<br />
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label><br />
            <label>
              Nationality:<br />
              <input type="text" name="nationality" value={this.state.nationality} onChange={this.handleChange} />
            </label><br />
            <label>
              Birthday:<br />
              <input type="date" name="birtday" value={this.state.birthday} onChange={this.handleChange} />
            </label><br />
            <label>
              Phone number:<br />
              <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
            </label><br />
            <label>
              Address:<br />
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
            </label><br />
            <label>
              Zip code:<br />
              <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
            </label><br />
            <label>
              City:<br />
              <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default CreateUser