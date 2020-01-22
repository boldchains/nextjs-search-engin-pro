import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Email from "@material-ui/icons/Email";

import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import profileImage from "assets/img/avatar.jpg";
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
                rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="#pablo"
                            className={classes.navLink}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            Discover
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="#pablo"
                            className={classes.navLink}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            Wishlist
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            justIcon
                            round
                            href="#pablo"
                            className={classes.notificationNavLink}
                            onClick={e => e.preventDefault()}
                            color="rose"
                        >
                            <Email className={classes.icons} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <CustomDropdown
                            left
                            caret={false}
                            hoverColor="black"
                            dropdownHeader="Dropdown Header"
                            buttonText={
                                <img
                                    src={profileImage}
                                    className={classes.img}
                                    alt="profile"
                                />
                            }
                            buttonProps={{
                                className:
                                classes.navLink + " " + classes.imageDropdownButton,
                                color: "transparent"
                            }}
                            dropdownList={[
                                "Me",
                                "Settings and other stuff",
                                "Sign out"
                            ]}
                        />
                    </ListItem>
                </List>
                }
            />
        </nav>
    )
};