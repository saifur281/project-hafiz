import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/auth";
import { getPosts } from "./actions/posts";
import AllUsers from "./components/AllUsers/AllUsers";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />

          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="/users/all" exact component={AllUsers} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
