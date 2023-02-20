import React from "react"

export default function ChatTop() {
  return (
    <div className="chat-top">
      <div className="chat-top__info">
        <h5 className="chat-top__info__recipient-name">First Last</h5>
        <h6 className="chat-top__info__activity-status">
          last seen 8 minutes ago
        </h6>
      </div>
      <div className="chat-top__buttons">
        <div className="chat-top__buttons__search"></div>
        <div className="chat-top__buttons__call"></div>
        <div className="chat-top__buttons__info"></div>
        <div className="chat-top__buttons__menu"></div>
      </div>
    </div>
  )
}
