import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: "50%",
    margin: "0 auto",
  },
  form: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  gridCont: {
    width: "40%",
    display: "flex",
    margin: "0 auto",
  },

  tempImg: {
    width: "100%",
    overflow: "hidden",
    objectFit: "cover",
    height: "60%",
  },
}));
