import React from 'react';
import './style.css';
import {Row, Col} from 'react-bootstrap';
import History from '../History';

function MainApp() {
    return (
        <div>
            <Row className="header">
                <Col className="headerText">
                    Git commit history
                </Col>
            </Row>
            <Row xs={10} className="main">
                <History />
            </Row>
            <Row className="footer">
                <Col className="footerText">
                    Developed by MebDevelop
                </Col>
            </Row>
        </div>
    )
}
export default MainApp;