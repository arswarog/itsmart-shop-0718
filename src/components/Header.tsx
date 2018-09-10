import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import './Header.css';
import { IGlobalState } from '../reducers/index';
import { Link } from 'react-router-dom';


interface IProps {
    quant: number,
    summ: number
}

export const Header = connect(
    (state: IGlobalState) => ({
        quant: state.cart.items.size,
        summ: state.cart.summ
    }),
)(
    class extends React.Component<IProps> {
        public render() {
            return (
                <Row className="header">
                    <Col xs="6">
                        <Link to='/'>
                            <div>В каталог</div>
                        </Link>
                    </Col>
                    <Col xs="6">
                        <Link to='/cart'>
                            <div>Заказано различных товаров: {this.props.quant}</div>
                            <div>На сумму: {this.props.summ}</div>
                        </Link>
                       
                    </Col>
                </Row>);
        }
    })



