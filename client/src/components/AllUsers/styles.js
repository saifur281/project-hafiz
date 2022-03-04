import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  card: {
    padding: "20px 20px",
    borderBottom: "3px solid #d8af54",
    position: "relative",
    overflow: "visible",

    "&:hover": {
      background: "#d8af54",
      transition: "0.9s all ease",
      cursor: "pointer",
      color: "#fff",
      transitionTimingFunction: "ease-in",
    },
  },

  avatar: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    border: "5px solid #d8af54",
    borderRadius: "100%",
    display: "flex",
    margin: "0 auto",

    "&:hover": {
      border: "5px solid #fff",
    },
  },
  username: {
    textAlign: "center",
    textTransform: "capitalize",
  },

  childCard: {
    position: "absolute",
    top: "0",
    left: "0",
    textAlign: "center",
    padding: "20px",
    "&:hover": {
      background: "#2fabd5",
      transition: "0.9s all ease",
      cursor: "pointer",
      color: "#fff",
      transitionTimingFunction: "ease-in",
    },
  },
  header: {},

  coverPic: {
    width: "100%",
    objectFit: "cover",
  },
  profile: {
    width: "80px",
    height: "80px",
    display: "flex",
    margin: "0 auto",
    borderRadius: "100%",
    marginTop: "-40px",
  },
}));
