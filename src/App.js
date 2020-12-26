import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';
import {connect} from 'react-redux';

class App extends Component {
	render() {
		return (
            <div className="container">
                <div className="row">
                    <ColorPicker/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <SizeSetting/>
                        <Reset/>
                    </div>
                    <Result/>
                </div>
            </div> 
		);
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        color: state.color,
        size: state.size
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch1: () => {
        //     dispatch({
        //         type: "action1",
        //     })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)