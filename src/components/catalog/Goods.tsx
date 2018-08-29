import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Good } from './Good';

export class Goods extends React.Component {
    public render() {
        const cfg = {
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12
        }

        return (
            <Row>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>
                <Col {...cfg}>
                    <Good />
                </Col>y
            </Row>);
    }
}