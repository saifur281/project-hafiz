import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { updatedUser, getSingleUsers } from "../../actions/auth";
import { useParams, useHistory } from "react-router-dom";
import * as actionType from "../../constants/actionTypes";
import FileBase from "react-file-base64";
import { Grow, Link, CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Profile() {
  //POST START

  const loggedInUser = JSON.parse(localStorage.getItem("profile"));

  // POST END

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(0);
  const [toggleForm, setToggleForm] = useState(false);
  const toggleSection = () => setToggleForm(!toggleForm);
  // HISTORY
  const history = useHistory();
  const { id } = useParams();
  const { REACT_APP_API_URL } = process.env;

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    // password: "",
    // New addition
    birthDate: "",
    profileImg: "",
    coverImg: "",
    desc: "",
    city: "",
    homeTown: "",
  });
  // selector for single user update
  const users = useSelector((state) =>
    currentUser
      ? state.auth?.authData?.find((user) => user._id === currentUser)
      : null
  );

  // selector for single user return from database
  const singleUsers = useSelector((state) => state.auth.singleUser);
  // useEffect for settinup formdata;
  useEffect(() => {
    if (users) setFormData(users);
  }, [users]);

  // useEffect for settinup retrieve user;
  useEffect(() => {
    dispatch(getSingleUsers(id));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updatedUser(currentUser, { ...formData }));

    window.location.reload();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          {!singleUsers?.coverImg ? (
            <CircularProgress />
          ) : (
            <img
              className={classes.coverImg}
              src={
                singleUsers?.coverImg
                  ? singleUsers?.coverImg
                  : `${REACT_APP_API_URL}/images/coverPic.png`
              }
              alt="name"
            />
          )}

          {!singleUsers?.profileImg ? (
            <CircularProgress />
          ) : (
            <img
              className={classes.profileImg}
              src={
                singleUsers?.profileImg
                  ? singleUsers?.profileImg
                  : `${REACT_APP_API_URL}/images/userAvatar.png`
              }
              alt="name"
            />
          )}

          <p className={classes.name}>
            {singleUsers?.firstName + " " + singleUsers?.lastName}
          </p>
          <p className={classes.dateOfBirth}>
            <span className={classes.dbSpan}>Date Of Birth : </span>
            {singleUsers?.birthDate}
          </p>
          {loggedInUser?.result?._id === id ? (
            <button
              onClick={() => {
                toggleSection();
                setCurrentUser(loggedInUser?.result?._id);
              }}
              className={classes.editBtn}
            >
              Edit
            </button>
          ) : null}
        </div>

        <div className={classes.rightBar}>
          <h2 className={classes.title}>About</h2>
          <p className={classes.about}>{singleUsers?.desc}</p>
          <h2 className={classes.title}>City</h2>
          <p className={classes.about}>{singleUsers?.city}</p>
          <h2 className={classes.title}>Home Town</h2>
          <p className={classes.about}>{singleUsers?.homeTown}</p>
        </div>
      </div>

      {toggleForm ? (
        <Grow in>
          <div className={classes.formPaper}>
            <button
              onClick={() => setToggleForm(false)}
              className={classes.close}
            >
              x
            </button>
            <div>
              {currentUser ? (
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className={classes.input}
                  />

                  <input
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={classes.input}
                  />

                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={classes.input}
                    disabled
                  />

                  <input
                    placeholder="Birth date"
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={(e) =>
                      setFormData({ ...formData, birthDate: e.target.value })
                    }
                    className={classes.input}
                  />

                  <div className={classes.imageFieldWrapper}>
                    <div className={classes.fileInput}>
                      {formData.profileImg ? (
                        <div className={classes.tempCont}>
                          <img
                            src={formData.profileImg}
                            alt="img"
                            className={classes.tempImg}
                          />
                          <button
                            className={classes.cancel}
                            onClick={() =>
                              setFormData({ ...formData, profileImg: null })
                            }
                            className={classes.clearBtn}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      ) : (
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setFormData({ ...formData, profileImg: base64 })
                          }
                        />
                      )}
                    </div>

                    <div className={classes.fileInput}>
                      {formData.coverImg ? (
                        <div className={classes.tempCont}>
                          <img
                            src={formData.coverImg}
                            alt="img"
                            className={classes.tempImg}
                          />
                          <button
                            className={classes.cancel}
                            onClick={() =>
                              setFormData({ ...formData, coverImg: null })
                            }
                            className={classes.clearBtn}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      ) : (
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setFormData({ ...formData, coverImg: base64 })
                          }
                        />
                      )}
                    </div>
                  </div>

                  <input
                    placeholder="About"
                    type="text"
                    name="desc"
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({ ...formData, desc: e.target.value })
                    }
                    className={classes.input}
                  />

                  <input
                    placeholder="City"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className={classes.input}
                  />

                  <input
                    placeholder="Home Town"
                    type="text"
                    name="homeTown"
                    value={formData.homeTown}
                    onChange={(e) =>
                      setFormData({ ...formData, homeTown: e.target.value })
                    }
                    className={classes.input}
                  />

                  <button className={classes.submitBtn} type="submit">
                    Submit
                  </button>
                </form>
              ) : (
                <span>Loading ..</span>
              )}
            </div>
          </div>
        </Grow>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
