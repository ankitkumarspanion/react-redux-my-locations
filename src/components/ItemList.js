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
                {this.props.list.length ? this.renderItems():"No items found"}
            </div>
        );
    }
}

export default ItemList;