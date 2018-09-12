import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Map } from 'immutable';
import { ICartItem } from '../common/cart';
import { connect } from 'react-redux';
import { IGlobalState } from '../reducers/index';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap';
import * as Actions from '../actions/cart';
import { IGood } from '../common/content';
import { bindActionCreators } from 'redux';

interface IProps {
    items: Map<string, ICartItem>,
    buyGood: (item: IGood) => void,
    removeGood: (item: IGood) => void,        
    deleteGood: (item: IGood) => void,            
}

export const Cart = connect(
    (state: IGlobalState) => ({
        items: state.cart.items
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(
    class extends React.Component<IProps> {
        public render() {
            const cfg = {
                lg: 3,
                md: 4,
                sm: 6,
                xs: 12
            }

            const { items } = this.props;
            const buyGood = (item: IGood) => () => this.props.buyGood(item);
            const removeGood = (item: IGood) => () => this.props.removeGood(item);            
            const deleteGood = (item: IGood) => () => this.props.deleteGood(item);                        
            return (
                <Row>
                    {items.map((item: ICartItem, index) =>
                        <Col key={index} {...cfg}>
                            <Card>
                                <CardImg top={true} width="100%" src={item.good.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{item.good.name} / {item.good.categoryId}</CardTitle>
                                    <CardSubtitle>{item.good.price}</CardSubtitle>
                                    <CardText>{item.good.description}</CardText>
                                    {/* <Button onClick={this.props.buyGood}>Buy</Button> */}
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <button onClick={removeGood(item.good)} className="btn btn-primary"> - </button>
                                            <span className="btn btn-light">{item.quant}</span>
                                            <button onClick={buyGood(item.good)} className="btn btn-primary"> + </button>
                                            <span className="btn btn-light" />    
                                            <button onClick={deleteGood(item.good)} className="btn btn-primary"> Удалить товар </button>                                                                                    
                                        </div>
                                        <span className="btn btn-light">На сумму: {item.quant*item.good.price}</span>
                                    </div>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>);
        }
    })