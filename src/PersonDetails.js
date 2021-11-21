import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PersonDetails(props) {
    return (
                <div style={{float:'left', backgroundColor:'skyblue'}}>
                    <p>User Name: {props.person.login.username}</p>
                    <p>Gender: {props.person.gender.toUpperCase()}</p>
                    <p>Time Zone Description: {props.person.location.timezone.description}</p>
                    <p>Address: {props.person.location.street.number} {props.person.location.street.name}, 
                    {props.person.location.city}, {props.person.location.state}, 
                    {props.person.location.country} - {props.person.location.postcode}</p>
                    <p>Email: {props.person.email}</p>
                    <p>Birth Date and Age: {props.person.dob.date} ({props.person.dob.age})</p>
                    <p>Register Date: {props.person.registered.date}</p>
                    <p>Phone#: {props.person.phone}</p>
                    <p>Cell#: {props.person.cell}</p>
                </div>
    )
}
