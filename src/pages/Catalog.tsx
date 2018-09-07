import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { match } from 'react-router';
import { List } from 'immutable';
import { createSelector } from 'reselect';
import * as Actions from '../actions/cart';
// import { IGlobalState } from '../reducers';
import { Goods } from '../components/catalog/Goods';
import { Groups } from '../components/catalog/Groups';
import { IGood, ICategory, ICategoryBase } from '../common/content';
import { IGlobalState } from '../reducers';

interface IParams {
    id: string,
    idSub: string
}

interface IProps {
    groups: List<ICategory>,
    goods: List<IGood>,
    catId: string,
}


const filter = createSelector(
    (state: IGlobalState) => state.catalog.goods,
    (state: IGlobalState) => state.catalog.groups,
    (state: IGlobalState, props: { match: match<IParams> }) => props.match.params.id,    
    (state: IGlobalState, props: { match: match<IParams> }) => props.match.params.idSub,

    filterate,
)

export const Catalog = connect(
    (state: IGlobalState, props: { match: match<IParams> }) => ({
        groups: state.catalog.groups,
        // goods: filter(state.catalog.goods, props.match.params.id),
        goods: filter(state, props),
        catId: props.match.params.id,
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(
    class CatalogCompomemt extends React.Component<IProps> {
        public render() {
            return (
                <Row>
                    <Col xs="3">
                        <Groups groups={this.props.groups} catId={this.props.catId} />
                    </Col>
                    <Col xs="9">
                        <Goods goods={this.props.goods} />
                    </Col>
                </Row>);
        }
    }
);



function filterate(goods: List<IGood>, groups: List<ICategory>, catId: string, subCatId: string): List<IGood> {
    if (subCatId) {
        return goods.filter((item: IGood) => item.categoryId === subCatId) as List<IGood>;
    } else
    {
        const subCats = groups.find((item: ICategory) => item.id === catId)
                              .children.map((item: ICategoryBase) => item.id) as List<string>;
        return goods.filter((item: IGood) => 
            subCats.indexOf(item.categoryId) !== -1) as List<IGood>;
    }
}

