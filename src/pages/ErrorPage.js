import React, { Fragment } from "react";
import { Metadata } from "../components/layout/Metadata";
import "../static/style/error.css";
export default function ErrorPage() {
  return (
    <Fragment>
      <Metadata title={"404"} />
      <div className="errorpage">
        <code>
          |--<span>:+404 NOT FOUND+:</span>--|{" "}
        </code>
      </div>
    </Fragment>
  );
}
