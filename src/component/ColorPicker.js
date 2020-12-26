import React, { Component } from 'react';
import {connect} from 'react-redux';

class ColorPicker extends Component {

    
    render() {
        var elmColors = this.props.colors.map((color,index)=>{
            return(
                <span key={index} style={{color: color, backgroundColor: color}} 
                    className={this.props.color === color ? "active":""} 
                    onClick={()=>{this.props.dispatch1(color)}}
                >
                </span>
            )
        })
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="card colorpicker">
                    <h5 className="card-header">Color Picker</h5>
                    <div className="card-body">
                        {elmColors}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        colors: state.colors,
        color: state.color
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: (color) => {
            dispatch({
                type:"colorpicker",
                color: color
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)