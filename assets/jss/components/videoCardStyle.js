import { container } from 'assets/jss/material-kit.js';

const videoCardStyle = ({
    videoPlayer: {
        width: "129px",
        height: "172px",
        borderRadius: "4px"
    },
    container: {
        marginTop: "3px",
        marginBottom: "3px",
        width: "14rem",
        marginRight: "10px"
    },
    videoCard: {
        margin: "0px 10px",
        borderRadius: "3px"
    },
    loaderItem: {
        width: "100%",
        height: "14rem"
    },
    description: {
        margin: "5px"
    },
    title: {
        fontSize: "1rem",
        fontWeight: "700",
        display: "block",
        maxWidth: "100%",
        height: "48px",
        margin: "0 auto",
        lineHeight: 1,
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    viewsCount: {
        fontWeight: "700",
        marginTop: "5px",
        color: "#A2A2A2"
    }
});

export default videoCardStyle;