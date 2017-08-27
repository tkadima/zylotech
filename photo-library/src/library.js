import React from 'react';

class Picture extends React.Component {

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 picture">
                <img src={this.props.url} key={this.props.id}
                     alt="" className="img-responsive" width={365}
                     height={365}/>
                {this.props.description}
            </div>);
    }
}


export class Library extends React.Component {
    render() {

        return (
            <div className="library">
                {
                    this.props.pictures.map(function(picObj, key) {
                        return <Picture url={picObj.url} id={key} description={picObj.description} /> }.bind(this))

                }
            </div>);
    }
}


export default Library;
