import React, { useState } from 'react';
import { Card, CardActions, CardHeader, Typography } from '@material-ui/core'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Looks5RoundedIcon from '@material-ui/icons/Looks5Rounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
function ClassCounterHook() {

    const [count, setcount] = useState(0)

    const onIncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setcount(prevCount => prevCount + 1)
        }
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-12 col-sm-11">
                        <Card className="card shadow">
                            <CardHeader
                                className="text-center text-muted text-capitalize"
                                title="Hook Counter"
                            />
                            <CardActions className="d-flex justify-content-center">
                                <HighlightOffRoundedIcon color="secondary" onClick={() => setcount(0)} />
                                <RemoveRoundedIcon
                                    onClick={() => setcount(prevCount => prevCount - 1)}
                                    color="secondary" />
                                <Typography variant="h6" color="primary">{count}</Typography>
                                <AddCircleRoundedIcon
                                    onClick={() => setcount(prevCount => prevCount + 1)}
                                    color="secondary"
                                />
                                <Looks5RoundedIcon color="secondary" onClick={onIncrementFive} />
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassCounterHook;