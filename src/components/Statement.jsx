import React from "react";
import "../styles/statement.css";

const Statement = ({ picture, name, country, role, company, statement }) => {
  return (
    <div className="statement-content">
      <img className="statement-image" src={picture} alt="Picture" />
      <div className="statement-text-content">
        <p className="statement-name">
          <strong>{name}</strong> en {country}
        </p>
        <p className="statement-role">
          {role} en <strong>{company}</strong>
        </p>
        <p className="statement-text">"{statement}"</p>
      </div>
    </div>
  );
};

export default Statement;
