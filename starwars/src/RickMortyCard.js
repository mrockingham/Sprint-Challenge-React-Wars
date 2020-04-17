import React from 'react'
import { Card, CardBody, CardHeader, CardText, Col, CardImg, Button } from "reactstrap";

const RickMortyCard = props =>{

    const {RickMortys} = props

    return(
    <Col xs="6" md="4" xl="3">
        <Card>
    <CardHeader>{RickMortys.name}</CardHeader> 
                <CardImg top width="25%" src={RickMortys.image} alt="Card image cap" />
                <CardBody>
    <CardText>{RickMortys.status}</CardText>
    <CardText>{RickMortys.gender}</CardText>
    <Button color="warning">Hello!</Button>
                </CardBody>
        </Card>
    </Col>
    )
}


export default RickMortyCard