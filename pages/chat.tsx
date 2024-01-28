import React, { useState, useRef } from "react";
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
  isSender: boolean;
}

const contacts: Contact[] = [
  { id: 1, name: "Eeshita" },
  { id: 2, name: "Max" },
];

const messages: Message[] = [
  { id: 1, senderId: 1, text: "Hey Shriya! I happened to notice you're in the same city as me right now. I loved working with you at UofTHacks. Let's catch up!", isSender: false },
  {
    id: 2,
    senderId: 2,
    text: "Hey Shriya! Guess what? Fate has a funny way of bringing people back together. I ran into you at that concert in Chicago, and I never imagined we'd cross paths again. But here we are, in the same city right now! What are the odds? 😄 How about we catch up over coffee or grab a bite to eat? I'd love to hear what you've been up to since the concert. Let me know if you're up for it!",
    isSender: false,
  },
];

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    // Implement logic to send the message
    // For demonstration, let's add the message to the messages array
    if (selectedContact) {
      const newMessageObj: Message = {
        id: messages.length + 1,
        senderId: 1, // Assuming the sender is the current user
        text: newMessage,
        isSender: true,
      };
      messages.push(newMessageObj);

      // Clear the input field after sending the message
      setNewMessage("");

      // Scroll to the bottom of the messages div
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    }
  };

  return (
    <div>
      <button className={styles.custombutton} onClick={() => Router.push("/")}>
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
              <div className={styles.messages} ref={messagesRef}>
                {messages
                  .filter((message) => message.senderId === selectedContact.id)
                  .map((message) => {
                    if (message.isSender) {
                      return (
                        <div
                          key={message.id}
                          className={styles.messageSent}
                        >
                          {message.text}
                        </div>
                      );
                    }

                    return (
                      <div key={message.id} className={styles.messageReceived}>
                        {message.text}
                      </div>
                    );
                  })}
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
              <div className={styles.messageInput}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles.startMsg}>
              Select a contact to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
