import * as React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap';
import { IGood } from '../../common/content';

interface IProps {
    good: IGood
}

export class Good extends React.Component<IProps> {
    public render() {
        const { good } = this.props;
        return (
            <Card>
                <CardImg top={true} width="100%" src={good.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{good.name} / {good.categoryId}</CardTitle>
                    <CardSubtitle>{good.price}</CardSubtitle>
                    <CardText>{good.description}</CardText>
                    <Button>Buy</Button>
                </CardBody>
            </Card>
        )
    }
}