import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowing: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createPicture = this.createPicture.bind(this);
    }

    handleClick () {
        this.setState({isShowing: true});
    }
    handleClose () {
        this.setState({isShowing: false});
    }

    createPicture() {
        var url = this.refs.url.value;
        var description = this.refs.description.value;

        if(typeof url === 'string'  && url.length > 0) {
            this.props.addPicture(url, description)
        }
        this.setState({isShowing : true})
    }


    render() {
        // react should only render when the modal is opened
        return <i className="material-icons btn" onClick={this.handleClick}>add_circle
        {
            this.state.isShowing&&
            <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose}>
                    <h1>Add Picture</h1>
                    <p key={0}>
                        <input type="text" placeholder="Enter the Url"
                               className="form-control" key={1} ref="url"  />
                        <input type="text" placeholder="Brief Description"
                               className="form-control" key={2} ref="description"/>
                        <button className="btn btn-success btn-sm" onClick={this.createPicture}>Submit</button>
                    </p>
                </ModalDialog>
            </ModalContainer>
        }
        </i>
    }
}
export default AddModal;