import React, { useState } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/searchFormStyle.js";

const useStyles = makeStyles(styles);

function useSearchFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default function SearchForm() {
  const classes = useStyles();
  const router = useRouter();
  const { pathname, query } = router;
  const input = useSearchFormInput(query.q ? query.q : "");

  function searchArticlesHandler(event) {
    event.preventDefault();

    if (pathname == "/") {
      router.push({
        pathname: "/",
        query: {
          ...query,
          q: input.value
        }
      });
    }
  }

  return (
    <form
      className={classes.vCenterForm}
      onSubmit={() => searchArticlesHandler(event)}
    >
      <div className={classes.inputGroup}>
        <input
          type="text"
          className={`form-control ${classes.formControl}`}
          {...input}
          value={input.value}
          placeholder="Search what you want"
        />
        <div className="input-group-append">
          <button className={`input-group-text ${classes.inputGroupText}`}>
            <i className={`material-icons ${classes.searchButtonIcon}`}>
              search
            </i>
          </button>
        </div>
      </div>
    </form>
  );
}
