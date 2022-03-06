import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    title: "",

    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", selectedFile: "" });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(
        createPost(
          {
            ...postData,
            name: user?.result?.firstName + " " + user?.result?.lastName,
            profilePic: user?.result?.profileImg,
          },
          history
        )
      );
      clear();
    } else {
      dispatch(
        updatePost(currentId, {
          ...postData,
          name: user?.result?.firstName + " " + user?.result?.lastName,
          profilePic: user?.result?.profileImg,
        })
      );
      clear();
    }
    window.location.reload();

    console.log(postData);
  };

  if (!user?.result?.firstName) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : "Creating a Story"}
        </Typography>
        <TextField
          required
          name="title"
          variant="outlined"
          label={`What's In Your Mind ${user?.result?.firstName}`}
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <div className={classes.fileInput}>
          {postData.selectedFile ? (
            <div className={classes.tempCont}>
              <img
                src={postData.selectedFile}
                alt="img"
                className={classes.tempImg}
              />
              <Button
                className={classes.cancel}
                onClick={() => setPostData({ selectedFile: null })}
              >
                Clear
              </Button>
            </div>
          ) : (
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          )}
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
