import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {

    renderItems = () =>{
        return this.props.list.map((item) => {
            return (
                <Item key={item.id} name={item.name} id={item.id} type={this.props.type}/>
            )
        })
    }

    render() {
        return (
            <div className='item-list'>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;