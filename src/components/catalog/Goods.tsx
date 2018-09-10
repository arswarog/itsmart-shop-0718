import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { Good } from './Good';
import { IGood } from '../../common/content';
import { List } from 'immutable';

interface IProps {
    goods: List<IGood>,
    buyGood: (item: IGood) => void;
}

export class Goods extends React.Component<IProps> {
    public render() {
        const cfg = {
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12
        }

        const { goods } = this.props;
        const buyGood = (item: IGood) => () => this.props.buyGood(item);
        return (
            <Row>    
                {goods.map((item:IGood, index) =>           
                <Col key={index} {...cfg}>
                    <Good buyGood={buyGood(item)} good={item} />
                </Col>
                )}
            </Row>);
    }
}