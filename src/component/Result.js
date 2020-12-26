import React, { Component } from 'react';
import {connect} from 'react-redux';


class Result extends Component {

    render() {
        var style= {
            color: this.props.allState.color,
            border: "1px solid "+ this.props.allState.color,
            fontSize: this.props.allState.size
        }
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <p style={{fontSize:this.props.allState.size, color: this.props.allState.color}}>Color : {this.props.allState.color} - Fontsize : {this.props.allState.size}px</p>
                <div className="noteSetting" style={style}>Nội dung setting</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allState:state
    }
}

export default connect(mapStateToProps)(Result)

