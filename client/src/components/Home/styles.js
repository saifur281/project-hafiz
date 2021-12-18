import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
    width: "50%",
    margin: "25px auto",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  titleSearch: {
    width: "30%",
  },
  tagSearch: {
    width: "30%",
  },
  searchButton: {
    width: "30%",
  },
}));
