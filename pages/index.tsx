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

  const getUserMemories = (userId: number): Event[] => {
    const user = SampleData.find((user) => user.userId === userId);
    return user ? user.events : [];
  };

  console.log(getUserMemories(currentUserId));

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
        <div className={styles.title}>Nostalgeo</div>
        <div className={styles.heading}>
          Welcome, Shriya! <br /> Explore core memories from your past.
        </div>
        <button className={styles.custombutton} onClick={handleCheckButton}>
          Discover Connections
        </button>
        <div className={styles.result}>
          {buttonClicked && result ? (
            <div>
              <div
                className={styles.resultText}
              >{`Connection found! ${result.matchedUserName} shares a similar memory: ${result.matchedMemory}`}</div>
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
              <h2>No connections found at the moment.</h2>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
