import React from "react";
import { Redirect, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Display from './Display'

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName:'',
            phone: '',
            email: '',
            show: false,

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ show: true });

        //    <Link to="/Display" message="Data from first component"/>

            //    this.props.history.push('/Display');

        //    const firstName = this.state.firstName;
        //    const lastName = this.state.lastName;
        //    const phone = this.state.phone;
        //    const email = this.state.email;
        //    console.log(firstName, lastName, phone, email)
    }

    nameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    lastChange = (e) => {
        this.setState({ lastName: e.target.value })
    }
    phomeChange = (e) => {
        this.setState({ phone: e.target.value })
    }
    emailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    render() {
        const { firstName } = this.state
        const { lastName } = this.state
        const { phone } = this.state
        const { email } = this.state
        return (
            <main>
                <form className="m3" >
                <label>First Name:</label>
                    <input type="text" name="firstName" className="name" placeholder="enter Your First Name" onChange={this.nameChange} />
                    <br /><br />
                    <label>Last Name:</label>
                    <input type="text" name="lastName" className="name" placeholder="enter Your Last Name" onChange={this.lastChange} />
                    <br /><br />
                    <label>Phone Number:</label>
                    <input type="number" name="phone" className="name" placeholder="enter Your Phone Number" onChange={this.phomeChange} />
                    <br /><br />
                    <label>Email:</label>
                    <input type="email" name="email" className="" placeholder="enter Your Email" onChange={this.emailChange} />
                    <br /><br />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    {
                        this.state.show === true ?
                            <Display firstName={firstName} lastName={lastName} phone={phone} email={email}/>
                            // <Redirect push to={{pathname: "/Display", firstName: "hello"}}/>
                             :
                            <div></div>
                    }



                </form>
                {/* <Link to="/Gmap">Map</Link>  */}
            </main>
        )
    }

}


export default FormComponent;