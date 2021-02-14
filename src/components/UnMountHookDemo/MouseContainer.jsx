import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import HookUnMountDemo from './HookUnMountDemo'
import ClassUnMountDemo from './ClassUnMountDemo'

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
    const [displayclass, setDisplayClass] = useState(true)
    return (
        <div>
            <div className="center">
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setDisplay(false)}
                    className="btn btn-lg"
                >
                    Toggle Display
            </Button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {display && (<HookUnMountDemo />)}
                    </div>
                </div>
            </div>

            <div className="center">
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setDisplayClass(false)}
                    className="btn btn-lg"
                >
                    Toggle Display Class
            </Button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {displayclass && (<ClassUnMountDemo />)}
                    </div>
                </div>
            </div>

        </div>
    )
}
