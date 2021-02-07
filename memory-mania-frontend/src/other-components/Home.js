import React, { Component } from 'react';
import GameStats from '../stats-components/GameStats';
import PlayStats from '../stats-components/PlayStats';
import Menu from './Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {

    render () {
    return (
        <div>
        <Container fluid>
        <Row>
            <Col><GameStats /></Col>
            <Col xs={6}><Menu /></Col>
            <Col><PlayStats /></Col>
        </Row>
        </Container>
        </div>
    )
    }
}

export default Home