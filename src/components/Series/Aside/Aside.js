import React from "react";
import { withRouter } from "react-router";

import Poster from "../../../components/Series/Aside/Poster/Poster";
import Info from "../../../components/Series/Aside/Info/Info";

const Aside = ({ id, title, match }) => {
  return (
    <aside className="container__aside">
      <Poster id={match.params?.id ?? id} title={title} />
      <Info id={match.params?.id ?? id} title={title} />
    </aside>
  );
};

export default withRouter(Aside);
