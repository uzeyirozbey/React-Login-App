import React,{Component} from 'react';
import { connect } from 'react-redux';
class HomePage extends Component {
    render() {
        return (
            <div className="col-md-12">
                 <h4>Anasayfa </h4>
            </div>
        );
    }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };