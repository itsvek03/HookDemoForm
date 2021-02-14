import React, { Component } from 'react'
import { Card, CardActions, CardHeader, Typography } from '@material-ui/core'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Looks5RoundedIcon from '@material-ui/icons/Looks5Rounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onClear = () => {
        this.setState(prevState => {
            return { count: 0 }
        })
    }

    onIncrement = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    onDecrement = () => {
        this.setState(prevState => {
            return { count: prevState.count - 1 }
        })
    }

    onIncrementFove = () => {
        this.setState(prevState => {
            return { count: prevState.count + 5 }
        })
    }

    render() {
        return (
            <>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-12 col-sm-11">
                            <Card className="card shadow">
                                <CardHeader
                                    className="text-center text-muted text-capitalize"
                                    title="Class Counter"
                                />
                                <CardActions className="d-flex justify-content-center">
                                    <HighlightOffRoundedIcon color="secondary" onClick={this.onClear} />
                                    <RemoveRoundedIcon onClick={this.onDecrement} color="secondary" />
                                    <Typography variant="h6" color="primary">{this.state.count}</Typography>
                                    <AddCircleRoundedIcon
                                        onClick={this.onIncrement}
                                        color="secondary"
                                    />
                                    <Looks5RoundedIcon color="secondary" onClick={this.onIncrementFove} />
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
