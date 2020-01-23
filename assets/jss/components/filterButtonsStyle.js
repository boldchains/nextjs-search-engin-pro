import { container } from 'assets/jss/material-kit.js';

const filterButtonsStyle = ({
    ...container,
    buttonIcon: {
        width: "20px",
        height: "20px",
        marginRight: "14px"
    },
    flexDiv: {
        display: "flex",
        height: "30px",
        minHeight: "30px",
        alignItems: "center"
    },
    filterButtonsLayout: {
        position: "relative",
        marginTop: "20px",
        zIndex: 1
    },
    nextArrow: {
        zIndex: 2,
        bottom: "0.25rem",
        margin: "auto 20px",
        position: "absolute",
        padding: "0.5rem 0.7rem 0.2rem 0.8rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "2rem"
    },
    prevArrow: {
        top: "0.3rem",
        zIndex: 2,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "0.4rem 0.8rem 0.3rem 0.7rem",
        borderRadius: "2rem",
        marginLeft: "20px",
    }
});

export default filterButtonsStyle;