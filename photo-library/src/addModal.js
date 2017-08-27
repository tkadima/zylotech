import React from 'react';
import ReactDOM from 'react-dom';


class AddModal extends React.Component {
    render() {
        // react should only render when the modal is opened
        if (this.props.isOpen === false) {
            return null;
        }
        return (
            <div isOpen={this.props.isOpen} className="modal hide fade" onClick={this.props.onclick}>
                <div className="modal-header">
                    <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
                    <h3>Add Photo</h3>
                </div>
            </div>
        )
    }
}