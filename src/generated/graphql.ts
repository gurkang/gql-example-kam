export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BetOffer = {
  __typename?: 'BetOffer';
  betOfferType?: Maybe<BetOfferType>;
  criterion: Criterion;
  id: Scalars['Float'];
  outcomes?: Maybe<Array<Maybe<Outcome>>>;
  suspended?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum BetOfferCategory {
  MainPreMatchBetOffer = 'MAIN_PRE_MATCH_BET_OFFER'
}

export type BetOfferType = {
  __typename?: 'BetOfferType';
  englishName: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Criterion = {
  __typename?: 'Criterion';
  englishLabel: Scalars['String'];
  extra?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  label: Scalars['String'];
  lifetime?: Maybe<Scalars['String']>;
  occurenceType?: Maybe<Scalars['String']>;
  occurrenceNumber: Scalars['Int'];
  raceToValue: Scalars['Int'];
};

export type Event = {
  __typename?: 'Event';
  awayName: Scalars['String'];
  betOffers: Array<BetOffer>;
  description?: Maybe<Scalars['String']>;
  englishName: Scalars['String'];
  eventId: Scalars['Int'];
  homeName: Scalars['String'];
  liveBoCount: Scalars['Int'];
  name: Scalars['String'];
  nonLiveBoCount: Scalars['Int'];
  path?: Maybe<Array<Maybe<Path>>>;
  score?: Maybe<Score>;
  start: Scalars['String'];
  statistics?: Maybe<Statistics>;
};


export type EventBetOffersArgs = {
  betOfferFilter?: InputMaybe<BetOfferCategory>;
  onlyMain?: InputMaybe<Scalars['Boolean']>;
};

export type FootballStats = {
  __typename?: 'FootballStats';
  away?: Maybe<Team>;
  home?: Maybe<Team>;
};

export type Outcome = {
  __typename?: 'Outcome';
  distance?: Maybe<Scalars['String']>;
  englishLabel?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  label: Scalars['String'];
  line?: Maybe<Scalars['Int']>;
  odds: Scalars['Int'];
};

export type Path = {
  __typename?: 'Path';
  englishName: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  termKey: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  matches?: Maybe<Array<Maybe<Event>>>;
};


export type QueryMatchesArgs = {
  matchIds: Array<Scalars['Int']>;
};

export type Score = {
  __typename?: 'Score';
  away: Scalars['String'];
  home: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  who?: Maybe<Scalars['String']>;
};

export type Statistics = {
  __typename?: 'Statistics';
  football?: Maybe<FootballStats>;
};

export type Team = {
  __typename?: 'Team';
  corners: Scalars['Int'];
  redCards: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type Get_MatchesQueryVariables = Exact<{
  matchIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Get_MatchesQuery = { __typename?: 'Query', matches?: Array<{ __typename?: 'Event', eventId: number, nonLiveBoCount: number } | null | undefined> | null | undefined };
