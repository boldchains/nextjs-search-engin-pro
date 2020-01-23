import { container } from 'assets/jss/material-kit.js';

const videoCardStyle = ({
    videoPlayer: {
        width: "100%",
        minHeight: "240px",
        borderRadius: "4px"
    },
    container: {
        ...container,
        paddingLeft: "10px",
        paddingRight: "0px"
    },
    title: {
        fontSize: "1.3rem",
        fontWeight: "700",
        maxWidth: "100%"
    },
    viewsCount: {
        fontWeight: "700",
        marginTop: "5px",
        color: "#A2A2A2"
    }
});

export default videoCardStyle;