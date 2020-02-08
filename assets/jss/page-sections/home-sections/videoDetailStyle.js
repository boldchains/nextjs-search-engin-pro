const videoDetailStyle = theme => ({
  container: {
    backgroundColor: "#666",
    overflow: "hidden"
  },
  closeButton: {
    position: "relative",
    color: "#FFF"
  },
  playerWrapper: {
    margin: "4px",
    width: "auto", // Reset width
    height: "auto" // Reset height
  },
  videoTitle: {
    margin: "10px 0",
    color: "white"
  },
  description: {
    height: "30px",
    color: "white",
    fontSize: "0.9rem"
  },
  reactPlayer: {
    paddingTop: "56.25%", // Percentage ratio for 16:9
    position: "relative" // Set to relative
  },
  ".react-player > div": {
    position: "absolute" // Scaling will occur since parent is relative now
  }
});

export default videoDetailStyle;
