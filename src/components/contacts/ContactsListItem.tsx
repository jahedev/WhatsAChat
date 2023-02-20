import React from "react"

interface ContactsListItemProp {
  isUser?: boolean
  message: string
}

export default function ContactsListItem({
  isUser,
  message,
}: ContactsListItemProp) {
  return (
    <div className={`contacts-list__item ${isUser && "contact-selected"}`}>
      {message}
    </div>
  )
}
