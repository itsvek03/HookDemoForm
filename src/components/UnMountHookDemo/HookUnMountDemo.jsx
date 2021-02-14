import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function HookUnMountDemo() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMouseMotion = (e) => {
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log("UseEffect Called")
        window.addEventListener('mousemove', logMouseMotion)

        return () => {
            console.log("UnMounted Called")
            window.removeEventListener('mousemove', logMouseMotion)
        };

    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Typography variant="h1" color="primary">
                            X Position: {x}
                        </Typography>
                        <Typography variant="h1" color="primary">
                            Y Position: {y}
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}
