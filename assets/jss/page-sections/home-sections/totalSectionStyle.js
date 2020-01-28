const totalSectionStyle = ({
    boxedCard: {
        borderRadius: "0px",
        margin: "10px 0px"
    },
    gridGallery: {
        margin: "0px 10px"
    },
    loading: {
        display: "inline-block",
        margin: "0 auto",
        padding: "3px",
    },
    loader: {
        justifyContent: "center"
    },
    loaderItem: {
        margin: "10px 10px 0 0",
        height: "272px",
        width: "19.2%",
        "@media (max-width: 576px)": {
            width: "100%",
        },
        "@media (max-width: 768px)": {
            width: "379px",
        },
        "@media (max-width: 992px)": {
            width: "327px",
        },
        "@media (min-width: 1200px)": {
            width: "19.2%",
        }
    }
});

export default totalSectionStyle;