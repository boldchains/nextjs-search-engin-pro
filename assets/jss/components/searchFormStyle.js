const searchFormStyle = theme => ({
  vCenterForm: {
    marginBottom: "10px",
    marginRight: "20px"
  },
  inputGroup: {
    position: "relative",
    display: "flex",
    margin: "5px 10px",
    marginTop: "5px",
    borderRadius: "30px 0px 0px 30px",
    backgroundColor: "transparent",
    maxWidth: "720px",
    width: "100%",
    height: "calc(1.5em + 0.75rem + 2px)"
  },
  formControl: {
    display: "block",
    width: "100%",
    height: "100%",
    fontSize: "1.4rem",
    padding: "1.1rem 1.85rem",
    color: "white",
    fontWeight: "700",
    lineHeight: "1.5",
    backgroundClip: "padding-box",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "30px 0px 0px 30px",
  },
  inputGroupText: {
    display: "flex",
    alignItems: "center",
    height: "100%+2px",
    padding: "0.175rem 0.45rem",
    marginBottom: 0,
    fontSize: "1.4rem",
    fontWeight: "700",
    lineHeight: "1.5",
    color: "#495057",
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "rgba(245, 245, 245, 0.91)",
    borderRadius: "0px 30px 30px 0px",
  },
  searchButtonIcon: {
    fontSize: "32px",
    paddingTop: "2px",
    paddingRight: "4px",
    cursor: "point"
  }
});

export default searchFormStyle;
