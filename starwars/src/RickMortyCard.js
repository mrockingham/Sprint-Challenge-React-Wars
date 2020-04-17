import React from 'react'
import { Card, CardBody, CardHeader, CardText, Col, CardImg, Button } from "reactstrap";

const RickMortyCard = props =>{

    const {Character} = props

    return(
    <Col xs="6" md="4" xl="4">
        <Card>
    <CardHeader tag="h2">{Character.name}</CardHeader> 
                <CardImg top width="25%" src={Character.image} alt="Card image cap" />
                <CardBody>
    <CardText>{Character.status}</CardText>
    <CardText>{Character.gender}</CardText>
    
                </CardBody>
        </Card>
    </Col>
    )
}


export default RickMortyCard