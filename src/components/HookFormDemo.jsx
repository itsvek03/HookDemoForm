import {
    Card,
    CardContent,
    TextField,
    MenuItem,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    FormGroup,
    FormLabel,
    Button,
    Slider,
    Typography,
    Select,
    InputLabel,
    FormControl
} from '@material-ui/core';
import Rating from 'material-ui-rating'

import React, { useState } from 'react';



export default function HookFormDemo() {
    const initialObj = {
        FirstName: '',
        LastName: '',
        Email: '',
        Gender: '',
        Hobbies: [],
        Location: 'Mumbai',
        FeedBack: '',
        Rating: 2,
        Range: 20
    }
    const [data, setvalue] = useState(initialObj);
    const [open, setOpen] = React.useState(false);

    const handleSubmit = () => {
        alert(JSON.stringify(data));
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (e) => {
        setvalue({ ...data, Location: e.target.value })
    }

    const CheckBoxChange = (e) => {
        var datacheck = [];
        const fo = (e.target.checked && e.target.value)
        if (fo) {
            datacheck.push(...data.Hobbies, e.target.value)
        }
        setvalue({ ...data, Hobbies: datacheck })
    }

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-12 col-sm-10">
                        <Card className="card shadow">
                            <CardContent>
                                <h5 className="h5 text-center text-muted">Sign Up Form</h5>
                            </CardContent>
                            <hr />
                            <CardContent>
                                <div className="container-fluid">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-11 mt-4">
                                                <TextField
                                                    id="FirstName"
                                                    label="First Name"
                                                    value={data.FirstName}
                                                    variant="outlined"
                                                    autoComplete="off"
                                                    fullWidth
                                                    onChange={e => setvalue({ ...data, FirstName: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6 col-sm-11 mt-4">
                                                <TextField
                                                    id="LastName"
                                                    label="LastName"
                                                    variant="outlined"
                                                    value={data.LastName}
                                                    autoComplete="off"
                                                    fullWidth
                                                    onChange={e => setvalue({ ...data, LastName: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <TextField
                                                    id="Email"
                                                    label="Email"
                                                    variant="outlined"
                                                    autoComplete="off"
                                                    fullWidth
                                                    value={data.Email}
                                                    onChange={e => setvalue({ ...data, Email: e.target.value })}
                                                />
                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <RadioGroup
                                                    row
                                                    aria-label="gender"
                                                    name="Gender"
                                                    value={data.Gender}
                                                    onChange={e => setvalue({ ...data, Gender: e.target.value })}>
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                </RadioGroup>
                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <FormLabel component="legend">Pick two</FormLabel>
                                                <FormGroup
                                                    row
                                                    value={data.Hobbies}
                                                    onChange={e => CheckBoxChange(e)}
                                                >
                                                    <FormControlLabel
                                                        control={<Checkbox name="gilad" value="gilad" />}
                                                        label="Gilad Gray"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox name="jason" value="jason" />}
                                                        label="Jason Killian"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox name="antoine" value="antoine" />}
                                                        label="Antoine Llorca"
                                                    />
                                                </FormGroup>


                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <FormControl className="form-control">
                                                    <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
                                                    <Select
                                                        id="outlined-select-currency"
                                                        name="Location"
                                                        variant="outlined"
                                                        open={open}
                                                        onClose={handleClose}
                                                        onOpen={handleOpen}
                                                        fullWidth
                                                        value={data.Location}
                                                        onChange={e => handleChange(e)}
                                                    >
                                                        <MenuItem value="Mumbai">
                                                            Mumbai
                                                        </MenuItem>
                                                        <MenuItem value="Kerala">
                                                            Kerala
                                                        </MenuItem>
                                                        <MenuItem value="Gujarat">
                                                            Gujarat
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <TextField
                                                    id="FeedBack"
                                                    label="FeedBack"

                                                    variant="outlined"
                                                    autoComplete="off"
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    value={data.FeedBack}
                                                    onChange={e => setvalue({ ...data, FeedBack: e.target.value })}
                                                />
                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <Rating

                                                    value={data.Rating}
                                                    max={5}
                                                    onChange={(value) => setvalue({ ...data, Rating: value })}
                                                />
                                            </div>


                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <Typography id="discrete-slider-custom" gutterBottom>
                                                    Range
                                                </Typography>
                                                <Slider
                                                    defaultValue={20}
                                                    aria-labelledby="discrete-slider-custom"
                                                    step={10}
                                                    valueLabelDisplay="auto"
                                                    value={data.Range}
                                                    onChange={(e, value) => setvalue({ ...data, Range: value })}

                                                />
                                            </div>

                                            <div className="col-md-12 col-sm-11 mt-4">
                                                <center>
                                                    <Button
                                                        variant="contained"
                                                        size="large"
                                                        color="primary"
                                                        className="w-45"
                                                        onClick={handleSubmit}>
                                                        Submit
                                                    </Button>
                                                </center>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

