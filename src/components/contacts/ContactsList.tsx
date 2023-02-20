import React from "react"
import ContactsListItem from "./ContactsListItem"

export default function ContactsList() {
  return (
    <div className="contacts-list">
      <ContactsListItem
        contactName="Arthur Morgan"
        lastMessage="Hey, whattchu up to?"
      />
      <ContactsListItem
        contactName="Charles Smith"
        lastMessage="np"
        isSelected={true}
      />
      <ContactsListItem
        contactName="Arnold Barney"
        lastMessage="sorry, I can't"
      />
    </div>
  )
}
