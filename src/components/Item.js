import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    render() {
        const {name, id, type} = this.props;
        return (
            <div className='item'>
                <div className="description">
                    <Link to={`/${type}/view/${id}`} className='link'>
                        {name}
                    </Link>
                </div>
                <div className="button-group">                    
                    <span>
                        <Link to={`/${type}/edit/${id}`} className='link'>
                            Edit
                        </Link>
                    </span>             
                    <span>
                        <Link to={`/${type}/delete/${id}`} className='link'>
                            Delete
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default Item;