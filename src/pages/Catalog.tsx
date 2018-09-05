import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { withRouter, match } from 'react-router';
import { List } from 'immutable';
import * as Actions from '../actions/catalog';
// import { IGlobalState } from '../reducers';
import { Goods } from '../components/catalog/Goods';
import { Groups } from '../components/catalog/Groups';
import { IGood, ICategory } from '../common/content';
import { IGlobalState } from '../reducers';

interface IParams {
    id: string;
}

interface IProps {
    groups: List<ICategory>,
    goods: List<IGood>,
    match: any,// match<IParams>,
    history?: any,
    location?: any,
}

export const Catalog = withRouter(
    connect(
        (state: IGlobalState, params: { match: match<IParams> }) => ({
            groups: state.catalog.groups,
            goods: state.catalog.goods,
        }),
        dispatch => bindActionCreators(Actions, dispatch)
    )(
        class CatalogCompomemt extends React.Component<IProps> {
            public render() {
                return (
                    <Row>
                        <Col xs="3">
                            <Groups />
                        </Col>
                        <Col xs="9">
                            <Goods goods={this.props.goods} />
                        </Col>
                    </Row>);
            }
        }
    )
);
