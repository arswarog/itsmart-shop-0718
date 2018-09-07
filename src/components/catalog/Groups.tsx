import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ICategory } from '../../common/content';
import { List } from 'immutable';

interface IProps {
    groups: List<ICategory>
}

export class Groups extends React.Component<IProps> {
    public render() {
        const { groups } = this.props;
        return (

            <ListGroup>
                {groups.map((item: ICategory, index) =>
                    {
                        const catURL = '/category/' + item.id;
                        return <ListGroupItem key={index}><Link to={catURL}>{item.name}</Link></ListGroupItem>;
                    }
                )}                

            </ListGroup>

        )
    }
}