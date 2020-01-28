import { container } from 'assets/jss/material-kit.js';

const videoCardStyle = ({
    videoPlayer: {
        width: "129px",
        height: "172px",
        borderRadius: "4px"
    },
    container: {
        ...container,
        paddingLeft: "10px",
        paddingRight: "0px"
    },
    title: {
        fontSize: "1rem",
        fontWeight: "700",
        width: "129px",
        maxWidth: "100%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    viewsCount: {
        fontWeight: "700",
        marginTop: "5px",
        color: "#A2A2A2"
    }
});

export default videoCardStyle;