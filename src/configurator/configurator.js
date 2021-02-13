import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Configurator(props) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="tier-native-helper">Tier</InputLabel>
        <NativeSelect
          value={props.state.jobTier}
          onChange={props.handleChange}
          inputProps={{
            name: "jobTier",
            id: "tier-native-helper"
          }}
        >
          <option aria-label="None" value="" />
          {props.state.jobTierOptions.map((o) => (
            <option value={o}>{o}</option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="tier-native-helper">Layout</InputLabel>
        <NativeSelect
          value={props.state.layout}
          onChange={props.handleChange}
          inputProps={{
            name: "layout",
            id: "layout-native-helper"
          }}
        >
          <option aria-label="None" value="" />
          {props.state.layoutOptions.map((o) => (
            <option value={o}>{o}</option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl>
        <label for="verbosityinput">Verbosity: </label>
        <input
          id="verbosityinput"
          type="range"
          name="verbosity"
          color="primary"
          value={props.state.verbosity}
          min="1"
          max="10"
          step="1"
          onChange={props.handleChange}
        ></input>
      </FormControl>

      <FormControl>
        <label for="verbosityinput">skillsMinPriority: </label>
        <input
          id="skillsMinPriority"
          type="range"
          name="skillsMinPriority"
          color="primary"
          value={props.state.skillsMinPriority}
          min="1"
          max="5"
          step="1"
          onChange={props.handleChange}
        ></input>
      </FormControl>

      <FormControl>
        <FormControlLabel
          value="does this matter"
          control={
            <Switch
              name="darkmode"
              value="dark"
              checked={props.state.darkmode}
              onChange={props.handleChangeCheck}
              color="primary"
            />
          }
          label="Use Dark Mode"
          labelPlacement="start"
        />
      </FormControl>
    </>
  );
}
