import React, { Component } from 'react';
import {connect} from 'react-redux';

class SizeSetting extends Component {

    render() {
        
        return (
            <div className="card size">
                <h5 className="card-header">Size: {this.props.oldSize}px</h5>
                <div className="card-body">
                    <button onClick={(  ) => {this.props.SizeSettingSub()}}>Giảm</button>
                    <button onClick={(  ) => {this.props.SizeSettingAdd()}}>Tăng</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        oldSize: state.size
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        SizeSettingSub: () => {
            // sub=this.props.oldSize-2<=8?8:this.props.oldSize-2;
            dispatch({
                type:'SizeSettingSub',
            })
        },
        SizeSettingAdd: () => {
            // add=this.props.oldSize+2 >= 20?20:this.props.oldSize+2;
            dispatch({
                type:'SizeSettingAdd',
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SizeSetting)