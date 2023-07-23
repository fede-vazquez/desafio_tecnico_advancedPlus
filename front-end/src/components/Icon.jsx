import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, css }) {
  return <FontAwesomeIcon icon={icon} className={css} />;
}

export default Icon;
