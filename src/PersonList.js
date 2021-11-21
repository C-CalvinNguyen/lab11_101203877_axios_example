import React, { Component } from 'react'
import axios from 'axios'
import PersonDetails from './PersonDetails'
import { Button, Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PersonList extends Component {
    
    //Define state default values
    state = {
        info: [],
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            //console.log(res.data);
            const persons = res.data.results;
            const info = res.data.info;
            this.setState({info: info, persons: persons});
        })
        .catch(error => console.log(error))
    }

    // axios get with SEED & filter out the specific person
    getUser = (email) => {
        axios.get(`https://randomuser.me/api/?seed=${this.state.info.seed}&results=10`)
        .then(res => {
            let seedPersons = res.data.results;
            //console.log(seedPersons)
            let newList = seedPersons.filter(u => {
                return u.email === email
            })
            //console.log(newList)
            this.setState({persons: newList})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1 style={{border:'1px', borderRadius:'5px', textAlign:'center', backgroundColor:'lightgreen'}}>User List</h1>
                {
                    this.state.persons.map(u => (
                        <>
                        <div style={{border:'1px', borderRadius:'5px', backgroundColor:'skyblue', margin:'20px'}}>
                            <p style={{clear:'both'}}></p>
                            <p style={{border:'1px', borderRadius:'5px', backgroundColor:'darkcyan', fontWeight:'bold'}}>{u.name.title} {u.name.first} {u.name.last} - {u.login.uuid}</p>
                            <div>
                                <Card style={{backgroundColor:'skyblue', width:'10rem', display:'table', float:'left', border:"none", marginLeft:'20px'}}>
                                <Image src={u.picture.large} roundedCircle></Image>
                                <Button style={{marginLeft:'1.5rem', marginTop:'1rem'}} onClick={() => this.getUser(u.email)}>Details</Button>
                                </Card>
                            </div>
                            <PersonDetails person={u}/>
                            <p style={{clear:'both'}}></p>
                        </div>
                        </>
                    ))
                }
            </div>
        )
    }
}
