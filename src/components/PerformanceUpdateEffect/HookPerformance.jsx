import React, { useEffect, useState } from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import { Button, Card, CardContent, TextField } from '@material-ui/core'

export default function HookPerformance() {
    const [count, setCount] = useState(0);
    const [Name, setName] = useState('');

    useEffect(() => {
        console.log("Update Hook")
        document.title = `You have Clicked ${count} times`
    }, [count])
    // useEffect will run only when the count changes

    //if there array is empty it will only once afetr the render

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12 col-sm-11">
                        <Card className="card shadow">
                            <CardHeader
                                title="Performace Optimoization Hook"
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
                                                value={Name}
                                                variant="outlined"
                                                autoComplete="off"
                                                fullWidth
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 col-sm-11 mt-4">
                                            <center>
                                                <Button
                                                    variant="contained"
                                                    size="large"
                                                    color="primary"
                                                    className="w-45"
                                                    onClick={() => setCount(count + 1)}
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
        </div>
    )
}
