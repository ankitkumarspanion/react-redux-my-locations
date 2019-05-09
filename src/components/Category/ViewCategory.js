import React, { Component } from 'react';
import { connect } from 'react-redux';


class ViewCategory extends Component {
    render() {
        return (
            <div>
                <div className="heading">
                    View Category
                </div>
            </div>
        )
    }
}


export default connect(null, {})(ViewCategory)