import {UserData} from './users';

export type MatchResult = {
  matchedUserName: string;
  matchedMemory: string;
};

export function findMatches(currentId: number, SampleData: UserData[]): MatchResult | null {
  const currentUser = SampleData.find(user => user.userId === currentId);

  if (!currentUser) {
    console.error(`User with ID ${currentId} not found.`);
    return null;
  }

  for (const otherUser of SampleData) {
    if (otherUser.userId !== currentId && currentUser.geohash === otherUser.geohash) {
      for (const currentMemory of currentUser.events) {
        for (const otherMemory of otherUser.events) {
          if (
            currentMemory.startYear <= otherMemory.endYear &&
            currentMemory.endYear >= otherMemory.startYear &&
            currentMemory.description === otherMemory.description
          ) {
            return {
              matchedUserName: otherUser.userName,
              matchedMemory: currentMemory.description,
            };
          }
        }
      }
    }
  }

  return null;
}