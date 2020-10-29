import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const InputField = (props) => {

  return (
    props.fieldList.map((val, idx) => {
      return (
        <Grid key={val.index} item md={12}>
            <TextField name={val.name} label={val.label} data-tpye={val.label} autoComplete={val.label} />
            {
                idx===0? ""
                : <button style={{padding: "1px 6px", verticalAlign: "bottom", marginLeft: "5px"}} className="field_manipulation_btn btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-trash"></i></button>
            }
        </Grid>
      )
    })
  )
}

export default InputField

