import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/catalog';
// import { IGlobalState } from '../reducers';
import { Goods } from '../components/catalog/Goods';
import { Groups } from '../components/catalog/Groups';
import { ICatalogState } from '../reducers/catalog';

export const Catalog = connect(
    (state: ICatalogState) => ({
      state
    }),
    dispatch => bindActionCreators(Actions, dispatch)
  )(
  class CatalogCompomemt extends React.Component {
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
});
