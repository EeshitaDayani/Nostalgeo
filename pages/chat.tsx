import React, { useState } from "react";
import Router from "next/router";
import styles from "@/styles/Chat.module.css";

interface Contact {
  id: number;
  name: string;
}

interface Message {
  id: number;
  senderId: number;
  text: string;
}

const contacts: Contact[] = [
  { id: 1, name: "Eeshita" },
  { id: 2, name: "Max" },
];

const messages: Message[] = [
  { id: 1, senderId: 1, text: "Hello Shriya, how are you?" },
  {
    id: 2,
    senderId: 2,
    text: "Hey Shriya! Guess what? Fate has a funny way of bringing people back together. I ran into you at that concert in Chicago, and I never imagined we'd cross paths again. But here we are, in the same city right now! What are the odds? 😄 How about we catch up over coffee or grab a bite to eat? I'd love to hear what you've been up to since the concert. Let me know if you're up for it! .",
  },
];

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div>
        <button
                className={styles.custombutton}
                onClick={() => Router.push("/")}
              >
                Go to Home
              </button>
    <div className={styles.container}>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} onClick={() => setSelectedContact(contact)}>
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.chat}>
        {selectedContact ? (
          <>
            <div className={styles.messages}>
              {messages
                .filter((message) => message.senderId === selectedContact.id)
                .map((message) => (
                  <div key={message.id} className={styles.messageReceived}>
                    {message.text}
                  </div>
                ))}
              {/* Add styling for sent messages */}
              {/* {messages
                .filter((message) => message.senderId === currentUserId)
                .map((message) => (
                  <div key={message.id} className={styles.messageSent}>
                    {message.text}
                  </div>
                ))} */}
            </div>
            {/* Add a form to send messages */}
            {/* <form>
              <input type="text" />
              <button type="submit">Send</button>
            </form> */}
          </>
        ) : (
          <div className={styles.startMsg}>
            <h2>Select a contact to start chatting.</h2>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
