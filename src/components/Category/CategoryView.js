import React, { Component } from 'react';
import { connect } from 'react-redux';


import {sortArray} from '../../helpers';
import Button from '../Button';
import ItemList from '../ItemList';

import history from '../../history';

class CategoryView extends Component {

    onAddClick = () =>{
        history.push('/categories/add');
    }

    render() {
        return (
            <div className='category-view'>
                Categories
                <ItemList list={sortArray(this.props.categories, 'name')} type="categories"/>
                <div className="add-button">
                    <Button 
                        name="Add"
                        handleButtonClick={this.onAddClick}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {})( CategoryView);