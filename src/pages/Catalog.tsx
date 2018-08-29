import * as React from 'react';
import { Col, Row } from 'reactstrap';
// import { IGlobalState } from '../reducers';
import { Goods } from '../components/catalog/Goods';
import { Groups } from '../components/catalog/Groups';

export class Catalog extends React.Component {
    public render() {
      return (
        <Row> 
            <Col xs="3">
                <Groups/>
            </Col>
            <Col xs="9">
                <Goods/>
            </Col>
        </Row>);
    }
}
