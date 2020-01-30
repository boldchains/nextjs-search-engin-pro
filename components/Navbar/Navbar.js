import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import SearchForm from "components/SearchForm/SearchForm.js";

import styles from "assets/jss/components/navbarStyle.js";

const useStyles = makeStyles(styles);

export default function Navbar() {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <Header
        brand="/img/logo.png"
        color="dark"
        leftLinks={<SearchForm />}
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
