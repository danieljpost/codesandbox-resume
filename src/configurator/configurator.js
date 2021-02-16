import React from "react";

import Button from "@material-ui/core/Button";
import FormRow from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

/**
 * TODO:
 * - hamburger menu the configurator
 * - minimize the configurator
 * - configurator disappears in print view
 */

export default function Configurator(props) {
  let sequencePicker = (a) => {
    if ("Hybrid" === props.state.chronology) {
      return (
        <FormControl>
          <InputLabel htmlFor="tier-native-helper">Sequence</InputLabel>
          <NativeSelect
            value={props.state.sequence}
            onChange={props.handleChange}
            inputProps={{
              name: "sequence",
              id: "layout-native-helper"
            }}
          >
            <option aria-label="None" value="" />
            {props.state.sequenceOptions.map((o, i) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      );
    }
    return "";
  };

  return (
    <section id="configurator">
      <Grid container>
        <Grid item xs>
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
              {props.state.jobTierOptions.map((o, i) => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
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
              {props.state.layoutOptions.map((o, i) => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl>
            <InputLabel htmlFor="chronology-native-helper">
              Chronology
            </InputLabel>
            <NativeSelect
              value={props.state.chronology}
              onChange={props.handleChange}
              inputProps={{
                name: "chronology",
                id: "chronology-native-helper"
              }}
            >
              <option aria-label="None" value="" />
              {props.state.chronologyOptions.map((o, i) => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          {sequencePicker()}
        </Grid>
      </Grid>

      <hr />

      <Grid container>
        <Grid item xs>
          <FormControl>
            <label htmlFor="verbosityinput">Verbosity: </label>
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
        </Grid>

        <Grid item xs>
          <FormControl>
            <label htmlFor="recommendationsinput">Recommendations: </label>
            <input
              id="recommendationsinput"
              type="range"
              name="recommendations"
              color="primary"
              value={props.state.recommendations}
              min="0"
              max="15"
              step="1"
              onChange={props.handleChange}
            ></input>
          </FormControl>
        </Grid>

        <Grid item xs>
          <FormControl>
            <label htmlFor="verbosityinput">Skills Min Priority: </label>
            <input
              id="skillsMinPriority"
              type="range"
              name="skillsMinPriority"
              color="primary"
              value={props.state.skillsMinPriority}
              min="2"
              max="6"
              step="1"
              onChange={props.handleChange}
            ></input>
          </FormControl>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs>
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
        </Grid>
        <Grid item xs>
          <FormControl>
            <FormControlLabel
              value="does this matter"
              control={
                <Switch
                  name="showlocation"
                  value="dark"
                  checked={props.state.showlocation}
                  onChange={props.handleChangeCheck}
                  color="primary"
                />
              }
              label="Show Work Location"
              labelPlacement="start"
            />
          </FormControl>
        </Grid>
      </Grid>

      <hr />

      <Grid container>
        <Grid item xs={12} med={12} lg={12}>
          <FormControl>
            <FormControlLabel
              control={
                <Button
                  variant="contained"
                  onClick={props.reset}
                  color="primary"
                >
                  Reset
                </Button>
              }
              label="Use Defaults&nbsp;"
              labelPlacement="start"
            />
          </FormControl>
        </Grid>
      </Grid>
    </section>
  );
}
