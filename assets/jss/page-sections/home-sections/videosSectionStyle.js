const videosSectionStyles = {
  boxedCard: {
    borderRadius: "0px",
    margin: "10px 0px"
  },
  videoSlider: {
    margin: "10px"
  },
  title: {
    fontWeight: "700",
    fontSize: "1.5rem",
    marginTop: "10px",
    marginLeft: "20px"
  },
  nextArrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    position: "absolute",
    marginRight: "20px",
    "&:before": {
      color: "rgba(156, 39, 176, 0.9)"
    },
    "&:current": {
      color: "rgba(156, 39, 176, 0.9)"
    }
  },
  prevArrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    position: "absolute",
    marginLeft: "20px",
    "&:before": {
      color: "rgba(156, 39, 176, 0.9)"
    },
    "&:current": {
      color: "rgba(156, 39, 176, 0.9)"
    }
  }
};

export default videosSectionStyles;
