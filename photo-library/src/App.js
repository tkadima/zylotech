import React from 'react';
import './style.css';
import Library from "./library";
import AddModal from "./addModal";
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures : [
                {
                    url:'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg',
                    description: "ginger kitten"
                }
            ]
        };
        this.addPicture = this.addPicture.bind(this);
    }

    componentWillMount() {
        
    }

    addPicture(url, description) {
        console.log("reach the app component");
        // each picture needs a unique key, used timestamp as a way of keeping it unique
        var timestamp = (new Date()).getTime();
        var pictures = this.state.pictures.slice();
        pictures[timestamp] = {url: url, description};
        this.setState({
            pictures: pictures
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <AddModal addPicture = {this.addPicture} />
                    <p className="text-center title">Photo Library</p>
                </div>
                <div className="row">
                    <div className="input-group col-md-12">
                        <span className="input-group-btn">
                            <span className=" glyphicon glyphicon-search"/>
                        </span>
                        <input type="text" className="  search-query form-control" placeholder="Search"/>
                    </div>
                </div>
                <Library pictures={this.state.pictures}/>
            </div>
        )
    }
}
export default App;
App.PropTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object)
};