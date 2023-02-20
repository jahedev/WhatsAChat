import React from "react"
import ContactsListItem from "./ContactsListItem"

export default function ContactsList() {
  return (
    <div className="contacts-list">
      <ContactsListItem message="Hey, whattchu up to?" />
      <ContactsListItem message="Not much, how about you?" isUser={true} />
      <ContactsListItem message="Same, same" />
    </div>
  )
}
