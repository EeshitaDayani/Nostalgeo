export type Event = {
  description: string;
  startYear: number;
  endYear: number;
};

type UserData = {
  userId: number;
  userName: string;
  geohash: string;
  events: Event[];
};

export const SampleData: UserData[] = [
  {
    userId: 12345,
    userName: "Shriya",
    geohash: "abcd",
    events: [
      {
        description: "Went to Jefferson High School",
        startYear: 1987,
        endYear: 1989,
      },
      {
        description: "I was a hacker at UofTHacks 11",
        startYear: 2023,
        endYear: 2023,
      },
    ],
  },
  {
    userId: 67890,
    userName: "Eddie",
    geohash: "efgh",
    events: [
      {
        description: "Visited the Louvre Museum",
        startYear: 1995,
        endYear: 1996,
      },
      {
        description: "Attended a Coldplay Concert",
        startYear: 1998,
        endYear: 1998,
      },
    ],
  },
  {
    userId: 54321,
    userName: "Percy",
    geohash: "ijkl",
    events: [
      {
        description: "Participated in a coding competition at MIT",
        startYear: 2000,
        endYear: 2002,
      },
      { description: "Traveled to Tokyo", startYear: 2005, endYear: 2006 },
    ],
  },
  {
    userId: 98765,
    userName: "Stella",
    geohash: "mnop",
    events: [
      {
        description: "Studied at Stanford University",
        startYear: 1999,
        endYear: 2003,
      },
      { description: "Worked at Google", startYear: 2004, endYear: 2010 },
    ],
  },
  {
    userId: 13579,
    userName: "Mitchell",
    geohash: "qrst",
    events: [
      {
        description: "Started a business in Silicon Valley",
        startYear: 2012,
        endYear: 2015,
      },
      {
        description: "Volunteered at Red Cross",
        startYear: 2017,
        endYear: 2019,
      },
    ],
  },
  {
    userId: 24680,
    userName: "Roy",
    geohash: "uvwx",
    events: [
      {
        description: "Learned to play the guitar",
        startYear: 1993,
        endYear: 1995,
      },
      {
        description: "Hiked in the Rocky Mountains",
        startYear: 2008,
        endYear: 2009,
      },
    ],
  },
  {
    userId: 11223,
    userName: "Kavita",
    geohash: "yzab",
    events: [
      {
        description: "Attended a TechCrunch Disrupt conference",
        startYear: 2016,
        endYear: 2016,
      },
      {
        description: "Published a research paper in Nature",
        startYear: 2018,
        endYear: 2020,
      },
    ],
  },
  {
    userId: 33445,
    userName: "Roop",
    geohash: "cdef",
    events: [
      {
        description: "Participated in a Hack the North hackathon",
        startYear: 2021,
        endYear: 2021,
      },
      { description: "Started a tech blog", startYear: 2022, endYear: 2023 },
    ],
  },
  {
    userId: 55667,
    userName: "Peru",
    geohash: "ghij",
    events: [
      {
        description: "Traveled to Italy, Japan, and Australia",
        startYear: 2010,
        endYear: 2012,
      },
      {
        description: "Learned Mandarin Chinese",
        startYear: 2014,
        endYear: 2016,
      },
    ],
  },
  {
    userId: 77889,
    userName: "Eeshita",
    geohash: "abcd",
    events: [
      {
        description: "Participated in a UofTHacks 11",
        startYear: 2023,
        endYear: 2023,
      },
      {
        description: "Attended a French cooking class",
        startYear: 2013,
        endYear: 2014,
      },
    ],
  },
];

export type { UserData };
