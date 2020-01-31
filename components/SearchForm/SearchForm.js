import React, { useState, useEffect } from "react";
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
  const searchKey = useSearchFormInput(router.query.q ? router.query.q : "");

  function searchArticlesHandler(event) {
    event.preventDefault();

    const { pathname } = router;
    if (pathname == "/") {
      router.push({
        pathname: "/",
        query: {
          ...router.query,
          q: searchKey.value
        }
      });
    }
  }

  useEffect(() => {
    console.log("is changing router", router.query.q);
  }, [router.query.q]);

  return (
    <form
      className={classes.vCenterForm}
      onSubmit={() => searchArticlesHandler(event)}
    >
      <div className={classes.inputGroup}>
        <input
          type="text"
          className={`form-control ${classes.formControl}`}
          {...searchKey}
          value={searchKey.value}
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
