import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ICategory, ICategoryBase } from '../../common/content';
import { List } from 'immutable';

interface IProps {
    groups: List<ICategory>,
    catId: string,
}

export class Groups extends React.Component<IProps> {
    public render() {
        const { groups } = this.props;
        return (

            <ListGroup>
                {groups.map((item: ICategory, index) => {
                    const catURL = '/category/' + item.id;
                    return <ListGroupItem key={index}><Link to={catURL}>{item.name}</Link>
                        <ListGroup hidden={this.props.catId !== item.id}>
                            {
                                item.children.map((child: ICategoryBase, index2) => {
                                    const childURL = `/category/${item.id}/${child.id}`;
                                    return <ListGroupItem key={index2}>
                                        <Link to={childURL}>{child.name}</Link>
                                    </ListGroupItem>
                                }
                                )
                            }

                        </ListGroup>
                    </ListGroupItem>;
                }
                )}

            </ListGroup>

        )
    }
}