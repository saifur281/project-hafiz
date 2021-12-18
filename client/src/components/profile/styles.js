import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  leftSide: {
    flex: "7",
    background: "#fff",
    boxShadow: "0px 0px 5px #44444426",
    padding: "20px",
    overflow: "hidden",
  },

  coverImg: {
    width: "100%",
    objectFit: "cover",
    height: "350px",
  },
  profileImg: {
    width: "150px",
    objectFit: "cover",
    height: "150px",
    borderRadius: "100px",
    display: "flex",
    margin: "0px auto",
    marginTop: "-84px",
    zIndex: "100",
  },

  name: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "arial",
    textTransform: "capitalize",
    fontWeight: "600",
    color: "#444",
  },
  dateOfBirth: {
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "arial",
    textTransform: "capitalize",
    color: "#444",
  },
  dbSpan: {
    fontWeight: "600",
    color: "#444",
  },
  editBtn: {
    display: "flex",
    margin: "0 auto",
    color: "#fff",
    border: "none",
    background: "green",
    padding: "8px 20px",
    cursor: "pointer",
  },

  // RIGHT BAR

  rightBar: {
    flex: "4",
    background: "#fff",
    boxShadow: "0px 0px 5px #44444426",
    marginLeft: "30px",
    padding: "20px",
  },
  title: {
    color: "#444",
    lineHeight: "1",
  },
  about: {},

  // FORM PAPER
  formPaper: {
    background: "#2fabd5",
    boxShadow: "0px 0px 25px #117b9fa3",
    padding: "50px",
    marginTop: "40px",
    position: "absolute",
    width: "50%",
    top: "180px",
    left: "20%",
  },
  close: {
    display: "flex",
    position: "absolute",
    right: "15px",
    background: "red",
    border: "none",
    color: "#fff",
    padding: "2px 12px",
    cursor: "pointer",
    top: "15px",
    fontWeight: "600",
    fontSize: "18px",
    borderRadius: "100%",
  },
  tempImg: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    position: "relative",
  },
  input: {
    width: "44%",
    marginRight: "10px",
    padding: "10px",
    marginBottom: "10px",
  },
  imageFieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0px",
  },
  clearBtn: {
    position: "absolute",
    background: "red",
    color: "#fff",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  submitBtn: {
    padding: "10px 25px",
    border: "none",
    background: "green",
    color: "#fff",
    cursor: "pointer",
    marginRight: "10px",
    width: "48%",
    marginBottom: "10px",
  },
}));
