import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class ClassMountDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0, y: 0
        }
    }
    logMouseMotion = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    componentDidMount() {
        console.log("Mount")
        window.addEventListener('mousemove', this.logMouseMotion)
    }

    componentWillUnmount() {
        console.log("UnMount")
        window.removeEventListener('mousemove', this.logMouseMotion)
    }
    render() {
        console.log("Render")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Typography variant="h1" color="primary">
                            x:{this.state.x}
                        </Typography>
                        <Typography variant="h1" color="primary">
                            y:{this.state.y}
                        </Typography>
                    </div>

                </div>
            </div>
        )
    }
}
