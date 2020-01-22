const searchFormStyle = theme => ({
  vCenterForm: {
    display: "flex",
    alignItems: "center",
    margin: 0
  },
  inputGroup: {
    position: "relative",
    display: "flex",
    margin: "5px 10px",
    msFlexWrap: "wrap",
    msFlexAlign: "stretch",
    marginTop: "5px",
    borderRadius: "30px 0px 0px 30px",
    backgroundColor: "transparent",
    maxWidth: "600px",
    width: "100%"
  },
  formControl: {
    display: "block",
    width: "100%",
    height: "calc(1.5em + 0.75rem + 2px)",
    padding: "1.1rem 0.85rem",
    fontSize: "1rem",
    color: "white",
    fontWeight: "700",
    lineHeight: "1.5",
    backgroundClip: "padding-box",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "30px 0px 0px 30px",
  },
  inputGroupText: {
    display: "flex",
    webkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
    padding: "0.175rem 0.45rem",
    marginBottom: 0,
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#495057",
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "rgba(245, 245, 245, 0.91)",
    borderRadius: "0px 30px 30px 0px",
  }
});

export default searchFormStyle;
