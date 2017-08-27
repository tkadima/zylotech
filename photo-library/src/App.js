import React from 'react';
import './style.css';
import Library from "./library";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <i className="material-icons btn ">add_circle</i>
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
                <Library />
            </div>
        )
    }
}
export default App;
