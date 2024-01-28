import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { findMatches, MatchResult } from "../public/helper";
import { SampleData, UserData, Event } from "../public/users";
import Router from "next/router";

const currentUserId = 12345;

export default function Home() {
  const [result, setResult] = useState<MatchResult | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCheckButton = () => {
    const matchesResult = findMatches(currentUserId, SampleData);
    setResult(matchesResult);
    setButtonClicked(true);
  };

  function getUserMemories(userId: number): (string | number)[][] {
    const user = SampleData.find((user) => user.userId === userId) || {
      events: [],
    };
    let flatMemories = [];
    for (const ev of user.events) {
      flatMemories.push([ev.description, ev.startYear, ev.endYear]);
    }
    return flatMemories;
  }

  return (
    <>
      <Head>
        <title>Nostalgeo</title>
        <meta
          name="description"
          content="Connect with people who share similar memories in your area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>nostalg<u>eo</u></div>
        <div className={styles.heading}>
        <br /><br />Welcome, Shriya! <br /> Explore core memories from your past.
        </div>
        <button className={styles.custombutton} onClick={handleCheckButton}>
          Discover Connections
        </button>
        <div className={styles.result}>
          {buttonClicked && result ? (
            <div>
              Connection found!
              <div
                className={styles.resultText}
              >{`${result.matchedUserName} shares a similar memory: ${result.matchedMemory}`}</div>
              <button
                className={styles.custombutton}
                onClick={() => Router.push("/chat")}
              >
                Chat with {result.matchedUserName}
              </button>
            </div>
          ) : null}
          {buttonClicked && !result ? (
            <div>
              <h3>No connections found at the moment.</h3>
            </div>
          ) : null}
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.memoryTitle}><br />Recorded Memories</div>
          <table className={styles.memoryTable}>
            <thead>
              <tr>
                <th>Memory</th>
                <th>Start Year</th>
                <th>End Year</th>
              </tr>
            </thead>
            <tbody>
              {getUserMemories(currentUserId).map((memory, index) => (
                <tr key={index}>
                  <td>{memory[0]}</td>
                  <td>{memory[1]}</td>
                  <td>{memory[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
