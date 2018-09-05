import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Groups extends React.Component {
    public render() {
        return (

            <ListGroup>
                <ListGroupItem><Link to="/category/12">CAtegory 12</Link></ListGroupItem>

            </ListGroup>
        )
    }
}