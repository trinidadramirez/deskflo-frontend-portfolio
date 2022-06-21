import React from "react";
import PropTypes from "prop-types";
import "../styles/msgHist.css";

export const MsgHist = ({ msg }) => {
  if (!msg) return null;
  return msg.map((row, i) => (
    <div key={i} className="msg-hist mt-3 text-start">
      <div className="send fw-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};

MsgHist.propTypes = {
  msg: PropTypes.array.isRequired,
};
