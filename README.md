# Nostalgeo
## Inspiration
Our inspiration was our own set of fond memories we've made with the people in our lives. Ruminating upon the times we want to revisit made us realize how one's attachment to places and periods is often deeply tied in with the people who shared those experiences with one, and how new bonds can organically be formed with the foundation of a common memory. We wanted to leverage this human tendency and help people reconnect with those with any common nostalgia, whether they had crossed roads before or not.

## What it does
Nostalgeo gives users the facility to log certain memories they are nostalgic about and would like to reconnect with people over. A time period, location and an open-ended description is to be given for each record. When two users with a similar memory (measured using semantic/cosine similarity) are found in the same geohash (level 4), each of them is notified about the other's presence with a gist of the other user's common memory. They may then choose to connect with each other using Nostalgeo's chat functionality or ignore a potential connection should they so please.

## How we built it
This is a Next.js and Typescript project that uses a Flask (Python) application for its backend. The main matching process happens by leveraging the Sentence Transformers model for semantic similarity. Since each user's description for the same memory is bound to be different, a suitable match percentage is checked for and a notification is sent out if this condition is met.

## Challenges we ran into
A challenge we ran into was maintaining user privacy and confidentiality with an application that tracks their location and sentimental memories. We needed to ensure that no information was unnecessarily given out to any other party, and that a user was in control of who they could be contacted by.

## Accomplishments that we're proud of
We're very proud of overcoming the above-stated challenge. We took numerous steps to maintain a user's security, such as keeping a minimal amount of information on them, only giving out a short gist of a common memory and a chosen display name in case a potential match is found, never giving out any contact details, keeping their location within the larger geohash private, and using an inbuilt chat function as a safe way for users to communicate.

## What we learned
We learned about geohashing, a novel way of using it with machine learning, and its potential for encouraging human connection if used right.

## What's next for Nostalgeo
Nostalgeo carries immense potential for scaling once a database to store user information & locations is in place. The natural next step is to equip this, along with additional fields for user preferences for the radius they want to meet people over and any restrictions they wish to enable.

## Try it out
https://nostalgeo.vercel.app/
