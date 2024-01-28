import { UserData } from "./users";
import React, { useState } from "react";

export type MatchResult = {
  matchedUserName: string;
  matchedMemory: string;
};

export function findMatches(
  currentId: number,
  SampleData: UserData[]
): MatchResult | null {
  const currentUser = SampleData.find((user) => user.userId === currentId);

  if (!currentUser) {
    console.error(`User with ID ${currentId} not found.`);
    return null;
  }

  for (const otherUser of SampleData) {
    if (
      otherUser.userId !== currentId &&
      currentUser.geohash === otherUser.geohash
    ) {
      for (const currentMemory of currentUser.events) {
        for (const otherMemory of otherUser.events) {
          if (
            currentMemory.startYear <= otherMemory.endYear &&
            currentMemory.endYear >= otherMemory.startYear
          ) {
            fetch(
              `http://localhost:8080/api/compareTexts?currentMemory=${currentMemory.description}&otherMemory=${otherMemory.description}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(
                  "This is the semantic similarity score",
                  data.score
                );
                console.log("For these events:");
                console.log("1.", currentMemory.description);
                console.log("2.", otherMemory.description);
                if (data.score > 65) {
                  return {
                    matchedUserName: otherUser.userName,
                    matchedMemory: otherMemory.description,
                  };
                }
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });

            return {
              matchedUserName: otherUser.userName,
              matchedMemory: otherMemory.description,
            };
          }
        }
      }
    }
  }

  return null;
}
