import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Components: [
                {
                    name: 'Alert',
                    link: '/badgealert',
                }
            ]
        }
        console.log('dashboard', this.props)
    }


    componentDidMount() { }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return <div className="">
            <div className="row">
                <div className="col-xs-12 col-md-9 main_board">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Components;