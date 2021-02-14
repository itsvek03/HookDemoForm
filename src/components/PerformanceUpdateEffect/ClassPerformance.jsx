import React, { Component } from 'react'

import CardHeader from '@material-ui/core/CardHeader'

import { Button, Card, CardContent, TextField } from '@material-ui/core'

export default class ClassPerformance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            Name: ''
        }
    }

    componentDidMount() {
        console.log("Mount");
        document.title = `You have Clicked ${this.state.count} times`

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            console.log("Update")
            document.title = `You have Clicked ${this.state.count} times`
        }

    }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-12 col-sm-11">
                            <Card className="card shadow">
                                <CardHeader
                                    title="Performace Optimoization Class"
                                    subheader="Update"
                                    className="text-center text-muted h3"
                                />
                                <CardContent>
                                    <div className="container-fluid">
                                        <form>
                                            <div className="col-md-12 col-sm-11">
                                                <TextField
                                                    id="Name"
                                                    label="Name"
                                                    variant="outlined"
                                                    autoComplete="off"
                                                    fullWidth
                                                    onChange={(e) => this.setState({ Name: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <center>
                                                    <Button
                                                        variant="contained"
                                                        size="large"
                                                        color="primary"
                                                        className="w-45"
                                                        onClick={() => this.setState({ count: this.state.count + 1 })}
                                                    >
                                                        Submit
                                                    </Button>
                                                </center>
                                            </div>
                                        </form>

                                    </div>
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
