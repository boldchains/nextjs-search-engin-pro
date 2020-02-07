import buttonStyle from "assets/jss/components/buttonStyle.js";

const videoCardStyle = {
  container: {
    marginTop: "3px",
    marginBottom: "3px",
    maxWidth: "14rem",
    marginRight: "10px"
  },
  videoCard: {
    margin: "0px",
    borderRadius: "3px"
  },
  description: {
    margin: "10px"
  },
  preloader: {
    marginTop: "5px",
    borderRadius: "3px"
  },
  buttonContainer: {
    overflow: "hidden"
  },
  button: {
    backgroundColor: "transparent",
    color: "black",
    padding: "0 2px",
    margin: "0px",
    borderRadius: "3px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "black",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    }
  },
  thumbnail: {
    textAlign: "center"
  },
  title: {
    fontSize: "1rem",
    fontWeight: "700",
    display: "block",
    maxWidth: "100%",
    height: "45px",
    margin: "0 auto",
    textAlign: "initial",
    whiteSpace: "normal",
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  viewsCount: {
    fontWeight: "700",
    marginTop: "5px",
    color: "#A2A2A2"
  }
};

export default videoCardStyle;
