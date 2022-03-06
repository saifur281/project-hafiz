import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   backgroundBlendMode: 'darken',
  // },
  // border: {
  //   border: 'solid',
  // },
  // fullHeightCard: {
  //   height: '100%',
  // },
  // card: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   borderRadius: '15px',
  //   height: '100%',
  //   position: 'relative',
  // },
  // overlay: {
  //   position: 'absolute',
  //   top: '20px',
  //   left: '20px',
  //   color: 'white',
  // },
  // overlay2: {
  //   position: 'absolute',
  //   top: '20px',
  //   right: '20px',
  //   color: 'white',
  // },
  // grid: {
  //   display: 'flex',
  // },
  // details: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   margin: '20px',
  // },
  // title: {
  //   padding: '0 16px',
  // },
  // cardActions: {
  //   padding: '0 16px 8px 16px',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  // },
  // cardAction: {
  //   display: 'block',
  //   textAlign: 'initial',
  // },

  postContainer: {
    width: "100%",
    margin: "15px auto",
    background: "#fff",
    boxShadow: "0px 0px 5px #44444429",
  },
  postHeader: {
    padding: "15px 20px 0px 20px",
    display: "flex",
    alignItems: "center",
  },
  userAvatar: {
    width: " 50px",
    height: "50px",
    borderRadius: "100px",
    border: "3px solid #d8af54",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
  },
  name: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#030303",
  },

  createdAt: {
    fontSize: "14px",
    color: "#444",
  },

  postBody: {},
  postText: {
    padding: "0px 20px",
  },
  postImg: {
    width: "100%",
    objectFit: "cover",
    height: "300px",
  },
  editBtn: {
    position: "absolute",
    right: "28%",
  },
  edit: {
    background: "#d8af54",
    border: "none",
    cursor: "pointer",
    padding: "8px 18px",
  },

  progressBar: {
    width: "94%",
    margin: "auto",
    display: "flex",
    background: "#d8af54",
    height: "350px",
  },
});
