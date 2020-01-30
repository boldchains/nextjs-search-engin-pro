import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import SearchForm from "components/SearchForm/SearchForm.js";

import languages from "assets/img/lang";
import topicsIcon from "assets/img/menu/trending-icon.png";
import userIcon from "assets/img/menu/user-icon.png";
import menuIcon from "assets/img/menu/menu-icon.png";
import logoImage from "assets/img/logo.png";
import styles from "assets/jss/components/navbarStyle.js";

const useStyles = makeStyles(styles);

export default function Navbar() {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <Header
        brand={logoImage}
        color="dark"
        leftLinks={<SearchForm />}
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                dropdownHeader="Topics"
                buttonText={
                  <img src={topicsIcon} className={classes.img} alt="topics" />
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
                dropdownHeader="Language"
                buttonText={
                  <img src={languages} className={classes.img} alt="language" />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={languages}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                dropdownHeader="Auth"
                buttonText={
                  <img src={userIcon} className={classes.img} alt="topics" />
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
                dropdownHeader="Menu"
                buttonText={
                  <img src={menuIcon} className={classes.img} alt="menu" />
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
