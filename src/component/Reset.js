import React, { Component } from 'react';
import {connect} from 'react-redux';

class Reset extends Component {

    render() {
        return (
            <div className="reset"><button onClick={ (  ) => {this.props.Reset()} }>reset</button></div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Reset: () => {
            dispatch({
                type:'Reset'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reset)