import React from "react"

interface ContactsListItemProp {
  isSelected?: boolean
  contactName: string
  lastMessage: string
}

export default function ContactsListItem({
  isSelected,
  contactName,
  lastMessage,
}: ContactsListItemProp) {
  return (
    <div className={`contacts-list__item ${isSelected ? "contact-selected" : ''}`}>
      <h4 className="contact-list__item__name">{contactName}</h4>
      <h4 className="contact-list__item__message">{lastMessage}</h4>
    </div>
  )
}
