import { container } from "assets/jss/material-kit.js";

const tagsStyle = {
  ...container,
  buttonIcon: {
    width: "20px",
    height: "20px",
    marginRight: "14px"
  },
  button: {
    marginRight: "1px"
  },
  flexDiv: {
    display: "flex",
    height: "30px",
    minHeight: "30px",
    alignItems: "center"
  },
  filterButtonsLayout: {
    position: "relative",
    marginTop: "5px",
    zIndex: 1
  },
  nextArrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    position: "absolute",
    marginRight: "20px",
    "&:before": {
      color: "rgba(0, 0, 0, 0.6)"
    },
    "&:current": {
      color: "rgba(0, 0, 0, 0.6)"
    }
  },
  prevArrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    position: "absolute",
    marginLeft: "20px",
    "&:before": {
      color: "rgba(0, 0, 0, 0.6)"
    },
    "&:current": {
      color: "rgba(0, 0, 0, 0.6)"
    }
  }
};

export default tagsStyle;
