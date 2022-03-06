import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  LinearProgress,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useHistory, Link } from "react-router-dom";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";
import axios from "axios";

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = useState(post?.likes);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const [userInfo, setUserinfo] = useState({});
  useEffect(() => {
    const findUser = async () => {
      const res = await axios.get(`/user/single/${post.creator}`);

      setUserinfo(res.data);
    };
    findUser();
  }, []);

  const Likes = () => {
    if (likes?.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <>
      <div className={classes.postContainer}>
        <div className={classes.postHeader}>
          <img
            className={classes.userAvatar}
            src={
              userInfo?.profileImg
                ? userInfo?.profileImg
                : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="name"
          />
          <div className={classes.nameContainer}>
            {/* <span className={classes.name}>{post?.user?.firstName}</span> */}
            <Link to={`/profile/${post?.creator}`}>
              <span className={classes.name}>
                {!userInfo?.firstName ? (
                  <LinearProgress />
                ) : (
                  userInfo?.firstName + " " + userInfo?.lastName
                )}
              </span>
            </Link>
            <span className={classes.createdAt}>
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          {/* EDIT */}

          <div className={classes.editBtn}>
            {user?.result?._id === post?.creator && (
              <div name="edit">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentId(post._id);
                  }}
                  style={{ color: "white" }}
                  size="small"
                  className={classes.edit}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={classes.postBody}>
          <p className={classes.postText}>{post.title}</p>

          <img
            className={classes.postImg}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="post image"
          />
        </div>

        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={handleLike}
          >
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="secondary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
          )}
        </CardActions>
      </div>
    </>
  );
};

export default Post;
