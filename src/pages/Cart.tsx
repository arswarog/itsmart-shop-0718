import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Map } from 'immutable';
import { ICartItem } from '../common/cart';
import { connect } from 'react-redux';
import { IGlobalState } from '../reducers/index';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap';

interface IProps {
    items: Map<string, ICartItem>,
}

export const Cart = connect(
    (state: IGlobalState) => ({
        items: state.cart.items
    })
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
            //        const buyGood = (item: IGood) => () => this.props.buyGood(item);
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
                                            <button className="btn btn-primary"> - </button>
                                            <span className="btn btn-light">{item.quant}</span>
                                            <button className="btn btn-primary"> + </button>
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