import React from 'react';
import './style.css';
import {Container, Row, Col} from 'react-bootstrap';
import History from '../History';

function MainApp() {
    return (
        <Container>
            <Row>
                <Col className="header">
                    <Row className="headerText">
                        Git commit history
                    </Row>
                </Col>
                <Col className="main">
                    <History />
                </Col>
                <Col className="footer">
                    <Row className="footerText">
                        Developed by MebDevelop
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default MainApp;