import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';

export default class RoleTitle extends Component {
    constructor(props) {
        super(props)
        this.state={
            segments : false,
         }
        this.toggleContent = this.toggleContent.bind(this)

    }

    toggleContent(event) {
        event.preventDefault();
        const {toggle} = this.props
        toggle(event)
    }

    render() {
        const { person } = this.props
        return (
                <div className="roles" 
                     grid="true">
                        <Flip bottom delay={3000}>
                            <button id="role"
                                    onClick={this.toggleContent}>
                                <strong>
                               <a href="" 
                                  className="effect-shine">
                                  {person.title}
                               </a>
                                </strong>
                            </button>
                        </Flip>
                </div>
        )
    }
}
