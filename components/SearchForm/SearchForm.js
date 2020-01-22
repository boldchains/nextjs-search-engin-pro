import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/searchFormStyle.js"

const useStyles = makeStyles(styles);

export default function SearchForm() {
    const classes = useStyles();
    return (
        <form className={classes.vCenterForm}>
            <div className={classes.inputGroup}>
                <input type="text" className={classes.formControl} placeholder="Search what you want"/>
                <div className="input-group-append">
                    <div className={classes.inputGroupText}>
                        <i className="material-icons">search</i>
                    </div>
                </div>
            </div>
        </form>
    );
};