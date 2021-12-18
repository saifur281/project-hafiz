import { Card, CircularProgress, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function AllUsers() {
  const classes = useStyles();
  const users = useSelector((state) => state?.auth?.authData);
  const [hoverOpen, setHoverOpen] = useState(false);
  // const toggleUserCard = () => setHoverOpen(!hoverOpen);

  return (
    <>
      <Grid container spacing={3}>
        {!users?.length ? (
          <CircularProgress />
        ) : (
          users.map((user) => (
            <Grid key={user._id} item xs={3} sm={2} md={3}>
              <Card className={classes.card}>
                <img
                  className={classes.avatar}
                  src={user?.profileImg}
                  alt="name"
                />
                <h3 className={classes.username}>
                  {user?.firstName + " " + user?.lastName}
                </h3>
                {/* 
                <button
                  onClick={() =>
                    user._id === userInfo._id ? toggleUserCard() : ""
                  }
                >
                  view
                </button> */}

                {hoverOpen ? (
                  <Card className={classes.childCard}>
                    <div className={classes.header}>
                      <img
                        className={classes.coverPic}
                        src={user?.coverImg}
                        alt="name"
                      />
                      <img
                        className={classes.profile}
                        src={user?.profileImg}
                        alt="name"
                      />
                      <h3 className={classes.username}>
                        {user?.firstName + " " + user?.lastName}
                      </h3>
                      <h4>About</h4>
                      <p>{user?.desc}</p>
                      <h4>City</h4>
                      <p>{user?.city}</p>
                      <h4>Home Town</h4>
                      <p>{user?.homeTown}</p>
                    </div>
                  </Card>
                ) : null}
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default AllUsers;
