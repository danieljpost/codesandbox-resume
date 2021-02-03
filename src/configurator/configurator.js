import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import VolumeUp from "@material-ui/icons/VolumeUp";

// TODO: get the options from resume.json
const options = [
  "DevOps",
  "Back End",
  "Front End",
  "Software Engineer",
  "User Experience",
  "User Interface",
  "Business",
  "Consulting",
  "Team Lead"
];
const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});
export default function Configurator(props) {
  const [state, setState] = React.useState(props.config);
  const [value, setValue] = React.useState(42);
  const classes = useStyles();
  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const handleSliderChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="tier-native-helper">Tier</InputLabel>
        <NativeSelect
          value={state.tier}
          onChange={handleChange}
          inputProps={{
            name: "tier",
            id: "tier-native-helper"
          }}
        >
          <option aria-label="None" value="" />
          {options.map((o) => (
            <option value={o}>{o}</option>
          ))}
        </NativeSelect>
        <FormHelperText>
          Choose which type of position this resume is for.
        </FormHelperText>
      </FormControl>

      <div>
        <label for="verbosityinput">Verbosity: </label>

        <input
          id="verbosityinput"
          type="range"
          name="verbosity"
          color="primary"
          value={state.verbosity}
          min="1"
          max="10"
          step="1"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <Typography id="input-slider" gutterBottom>
          Verbosity
        </Typography>
        <Grid container spacing={2} alignItems="left">
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
      </div>

      {/* <FormControl> */}
      <FormControlLabel
        value="does this matter"
        control={
          <Switch
            name="darkmode"
            value="dark"
            checked={state.darkmode}
            onChange={handleChangeCheck}
            color="primary"
          />
        }
        label="Use Dark Mode"
        labelPlacement="start"
      />
      {/* </FormControl> */}

      <pre>Verbosity: {state.verbosity}</pre>
      <pre>Value (volume) {value}</pre>
      <pre>Tier: {state.tier}</pre>
      <pre>Layout: {state.layout}</pre>
      <pre>Dark Mode: {state.darkmode ? "true" : "false"}</pre>
    </>
  );
}
