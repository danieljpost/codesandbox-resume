import React from "react";

import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Configurator(props) {
  const [state, setState] = React.useState(props.config);
  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
    console.warn("State is", state);
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="tier-native-helper">Tier</InputLabel>
        <NativeSelect
          value={state.jobTier}
          onChange={handleChange}
          inputProps={{
            name: "jobTier",
            id: "tier-native-helper"
          }}
        >
          <option aria-label="None" value="" />
          {props.config.jobTierOptions.map((o) => (
            <option value={o}>{o}</option>
          ))}
        </NativeSelect>
        <FormHelperText>
          Choose which type of position this resume is for.
        </FormHelperText>
      </FormControl>
      <hr />

      <FormControl>
        <InputLabel htmlFor="tier-native-helper">Layout</InputLabel>
        <NativeSelect
          value={state.layout}
          onChange={handleChange}
          inputProps={{
            name: "layout",
            id: "layout-native-helper"
          }}
        >
          <option aria-label="None" value="" />
          {props.config.layoutOptions.map((o) => (
            <option value={o}>{o}</option>
          ))}
        </NativeSelect>
        <FormHelperText>Choose which layout should be rendered.</FormHelperText>
      </FormControl>
      <hr />

      <FormControl>
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
      </FormControl>
      <hr />

      <FormControl>
        <label for="verbosityinput">skillsMinPriority: </label>
        <input
          id="skillsMinPriority"
          type="range"
          name="skillsMinPriority"
          color="primary"
          value={state.skillsMinPriority}
          min="1"
          max="5"
          step="1"
          onChange={handleChange}
        ></input>
      </FormControl>
      <hr />

      <FormControl>
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
      </FormControl>
      <hr />
      <hr />

      <pre>Verbosity: {state.verbosity}</pre>
      <pre>skillsMinPriority: {state.skillsMinPriority}</pre>
      <pre>jobTier: {state.jobTier}</pre>
      <pre>Layout: {state.layout}</pre>
      <pre>Dark Mode: {state.darkmode ? "on" : "off"}</pre>
    </>
  );
}
