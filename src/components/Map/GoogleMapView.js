import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMapView extends Component {
    render() {
        const {lat, lng} = this.props.match.params;
        return (
            <div>
                <Map google={this.props.google}
                    style={{width: '900px', height: '90vh'}} 
                    initialCenter={{
                        lat,
                        lng
                    }}
                    zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                </Map>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        locations: state.locations
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAQX2_gG6fmRU1scAO6nZuxougwh7R7rRI')
})(connect(mapStateToProps, {})(GoogleMapView))