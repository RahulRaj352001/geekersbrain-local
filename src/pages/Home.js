import React,{Fragment} from "react";
import Clients from "../components/Home/Clients";
import { Metadata } from "../components/layout/Metadata";
export default function Home() {
  return (
    <Fragment>
      <Metadata title="Greekers Brain" />
        <div className="happyClients">
              <Clients/>
        </div>
    </Fragment>
  );
}
