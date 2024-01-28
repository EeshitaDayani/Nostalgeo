import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { findMatches, MatchResult } from "../public/helper";
import { SampleData, UserData } from "../public/users";

const currentUserId = 12345;

export default function Home() {
  const [result, setResult] = useState<MatchResult | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCheckButton = () => {
    const matchesResult = findMatches(currentUserId, SampleData);
    setResult(matchesResult);
    setButtonClicked(true);
  };

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
        <div
          className={styles.heading}
        >{`Hello, Shriya! Explore core memories from your past.`}</div>
        <button className={styles.custombutton} onClick={handleCheckButton}>
          Discover Connections
        </button>
        <div className={styles.result}>
          {buttonClicked && result ? (
            <div>
              <h2>{`A connection found! ${result.matchedUserName} shares a similar memory: ${result.matchedMemory}`}</h2>
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
