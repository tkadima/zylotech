import React from 'react';
import keyIndex from 'react-key-index';

class Picture extends React.Component {
    render() {
        return(
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 filter">
            <img src={this.props.url} key={this.props.id} alt="" className="img-responsive" width={365} height={365}/>
            </div>);
    }
}

export class Library extends React.Component {
    render() {

        var urls = [
            "http://www.catfactsforkids.com/wp-content/uploads/2014/04/Calico-Cat.jpg",
            "http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
            "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"
        ];
        urls = keyIndex(urls, 1);
        return (
            <div className="library row">
                    {urls.map(imageUrl =>
                        <Picture url={imageUrl.value} id={imageUrl.id}/>)}
            </div>
        );
    }
}

export default Library;
