import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, CardHeader, Card, TextField, Button, CardContent } from '@material-ui/core'
import axios from 'axios'


export default function FetchPost() {
    const [data, setData] = useState([])
    const [id, setID] = useState(1)
    const [btnon, setbtn] = useState(1)
    const handleSubmit = () => {
        setbtn(id)
    }

    useEffect(() => {
        axios
            .get(`http://jsonplaceholder.typicode.com/posts/${btnon}`)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [btnon])

    console.log("DATA", data)
    console.log(id)
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardHeader
                                title="Gettting Post"
                                subheader="Listing Post"
                                className="text-center text-muted"
                            />
                        </Card>

                        <TextField
                            id="ID"
                            label="ID"
                            fullWidth
                            value={id}
                            variant="outlined"
                            className="form-control mt-4"
                            onChange={(e) => setID(e.target.value)}

                        />
                        <center>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="btn absolute-center mt-2"
                                onClick={handleSubmit}>
                                Fetch Post By ID
                        </Button>
                        </center>

                        <Card className="mt-2">
                            <CardContent>
                                {data.body}
                            </CardContent>
                        </Card>

                        {(data.length === 0 && id > 0) ? <h1>LOADING</h1> :
                            <List dense>
                                {/* {
                                    data.map((item) => {
                                        return (
                                            <ListItem key={item.id}>
                                                <ListItemText

                                                    primary={item.title}
                                                    className="col-md-12"
                                                />
                                            </ListItem>
                                        )
                                    })
                                } */}

                            </List>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
