import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import SearchForm from "components/SearchForm/SearchForm.js";

import styles from "assets/jss/components/navbarStyle.js";

const useStyles = makeStyles(styles);

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <Header
        brand="/img/logo.png"
        color="dark"
<<<<<<< HEAD
        leftLinks={<SearchForm {...props} />}
=======
        leftLinks={
          <div style={{ display: "flex" }}>
            <SearchForm />
            <Button justIcon round color="white" onClick={props.onSetting}>
              <SettingsRoundedIcon className={classes.advanceSearch} />
            </Button>
          </div>
        }
>>>>>>> 9e708c9bf9f29e6201b18e5a1fff6c6c59d0829a
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                buttonText={
                  <img
                    src="/img/menu/trending-icon.png"
                    className={classes.img}
                    alt="topics"
                  />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={["topics"]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                buttonText={
                  <img
                    src="/img/menu/user-icon.png"
                    className={classes.img}
                    alt="topics"
                  />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={["topics"]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                buttonText={
                  <img
                    src="/img/menu/menu-icon.png"
                    className={classes.img}
                    alt="menu"
                  />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={["Me", "Settings and other stuff", "Sign out"]}
              />
            </ListItem>
          </List>
        }
      />
    </nav>
  );
}
