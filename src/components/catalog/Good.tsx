import * as React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap';

export class Good extends React.Component {
    public render() {
        return (
            <Card>
                <CardImg top={true} width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        )
    }
}