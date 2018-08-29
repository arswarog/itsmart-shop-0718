import * as React from 'react';
import { Col, Row } from 'reactstrap';
import './Header.css';

export class Header extends React.Component {
    public render() {
      return (
        <Row className = "header">
            <Col xs="6">LOGO</Col>
            <Col xs="6">AUTH</Col>
        </Row>);
    }
}



