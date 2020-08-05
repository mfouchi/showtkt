import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};



export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers: Array<Producer>;
  Productions: Array<Production>;
  Events: Array<Event>;
  Venues: Array<Venue>;
};


export type CompanyProducersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProducerWhereUniqueInput>;
  after?: Maybe<ProducerWhereUniqueInput>;
};


export type CompanyProductionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductionWhereUniqueInput>;
  after?: Maybe<ProductionWhereUniqueInput>;
};


export type CompanyEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EventWhereUniqueInput>;
  after?: Maybe<EventWhereUniqueInput>;
};


export type CompanyVenuesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<VenueWhereUniqueInput>;
  after?: Maybe<VenueWhereUniqueInput>;
};

export type CompanyCreateInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerCreateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionCreateManyWithoutCompanyInput>;
  Events?: Maybe<EventCreateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueCreateManyWithoutCompaniesInput>;
  User?: Maybe<UserCreateManyWithoutCompanyInput>;
};

export type CompanyCreateManyWithoutVenuesInput = {
  create?: Maybe<Array<CompanyCreateWithoutVenuesInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type CompanyCreateOneWithoutEventsInput = {
  create?: Maybe<CompanyCreateWithoutEventsInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateOneWithoutProducersInput = {
  create?: Maybe<CompanyCreateWithoutProducersInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateOneWithoutProductionsInput = {
  create?: Maybe<CompanyCreateWithoutProductionsInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateOneWithoutUserInput = {
  create?: Maybe<CompanyCreateWithoutUserInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateWithoutEventsInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerCreateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionCreateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueCreateManyWithoutCompaniesInput>;
  User?: Maybe<UserCreateManyWithoutCompanyInput>;
};

export type CompanyCreateWithoutProducersInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Productions?: Maybe<ProductionCreateManyWithoutCompanyInput>;
  Events?: Maybe<EventCreateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueCreateManyWithoutCompaniesInput>;
  User?: Maybe<UserCreateManyWithoutCompanyInput>;
};

export type CompanyCreateWithoutProductionsInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerCreateManyWithoutCompanyInput>;
  Events?: Maybe<EventCreateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueCreateManyWithoutCompaniesInput>;
  User?: Maybe<UserCreateManyWithoutCompanyInput>;
};

export type CompanyCreateWithoutUserInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerCreateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionCreateManyWithoutCompanyInput>;
  Events?: Maybe<EventCreateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueCreateManyWithoutCompaniesInput>;
};

export type CompanyCreateWithoutVenuesInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerCreateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionCreateManyWithoutCompanyInput>;
  Events?: Maybe<EventCreateManyWithoutCompanyInput>;
  User?: Maybe<UserCreateManyWithoutCompanyInput>;
};

export type CompanyFilter = {
  every?: Maybe<CompanyWhereInput>;
  some?: Maybe<CompanyWhereInput>;
  none?: Maybe<CompanyWhereInput>;
};

export type CompanyOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  city?: Maybe<OrderByArg>;
  state?: Maybe<OrderByArg>;
};

export type CompanyScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  city?: Maybe<NullableStringFilter>;
  state?: Maybe<NullableStringFilter>;
  Producers?: Maybe<ProducerFilter>;
  Productions?: Maybe<ProductionFilter>;
  Events?: Maybe<EventFilter>;
  Venues?: Maybe<VenueFilter>;
  User?: Maybe<UserFilter>;
  AND?: Maybe<Array<CompanyScalarWhereInput>>;
  OR?: Maybe<Array<CompanyScalarWhereInput>>;
  NOT?: Maybe<Array<CompanyScalarWhereInput>>;
};

export type CompanyUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerUpdateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionUpdateManyWithoutCompanyInput>;
  Events?: Maybe<EventUpdateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueUpdateManyWithoutCompaniesInput>;
  User?: Maybe<UserUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type CompanyUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type CompanyUpdateManyWithoutVenuesInput = {
  create?: Maybe<Array<CompanyCreateWithoutVenuesInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutVenuesInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutVenuesInput>>;
};

export type CompanyUpdateManyWithWhereNestedInput = {
  where: CompanyScalarWhereInput;
  data: CompanyUpdateManyDataInput;
};

export type CompanyUpdateOneRequiredWithoutEventsInput = {
  create?: Maybe<CompanyCreateWithoutEventsInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
  update?: Maybe<CompanyUpdateWithoutEventsDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutEventsInput>;
};

export type CompanyUpdateOneRequiredWithoutProducersInput = {
  create?: Maybe<CompanyCreateWithoutProducersInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
  update?: Maybe<CompanyUpdateWithoutProducersDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutProducersInput>;
};

export type CompanyUpdateOneRequiredWithoutProductionsInput = {
  create?: Maybe<CompanyCreateWithoutProductionsInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
  update?: Maybe<CompanyUpdateWithoutProductionsDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutProductionsInput>;
};

export type CompanyUpdateOneRequiredWithoutUserInput = {
  create?: Maybe<CompanyCreateWithoutUserInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
  update?: Maybe<CompanyUpdateWithoutUserDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutUserInput>;
};

export type CompanyUpdateWithoutEventsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerUpdateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionUpdateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueUpdateManyWithoutCompaniesInput>;
  User?: Maybe<UserUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateWithoutProducersDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Productions?: Maybe<ProductionUpdateManyWithoutCompanyInput>;
  Events?: Maybe<EventUpdateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueUpdateManyWithoutCompaniesInput>;
  User?: Maybe<UserUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateWithoutProductionsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerUpdateManyWithoutCompanyInput>;
  Events?: Maybe<EventUpdateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueUpdateManyWithoutCompaniesInput>;
  User?: Maybe<UserUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerUpdateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionUpdateManyWithoutCompanyInput>;
  Events?: Maybe<EventUpdateManyWithoutCompanyInput>;
  Venues?: Maybe<VenueUpdateManyWithoutCompaniesInput>;
};

export type CompanyUpdateWithoutVenuesDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  Producers?: Maybe<ProducerUpdateManyWithoutCompanyInput>;
  Productions?: Maybe<ProductionUpdateManyWithoutCompanyInput>;
  Events?: Maybe<EventUpdateManyWithoutCompanyInput>;
  User?: Maybe<UserUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutVenuesInput = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateWithoutVenuesDataInput;
};

export type CompanyUpsertWithoutEventsInput = {
  update: CompanyUpdateWithoutEventsDataInput;
  create: CompanyCreateWithoutEventsInput;
};

export type CompanyUpsertWithoutProducersInput = {
  update: CompanyUpdateWithoutProducersDataInput;
  create: CompanyCreateWithoutProducersInput;
};

export type CompanyUpsertWithoutProductionsInput = {
  update: CompanyUpdateWithoutProductionsDataInput;
  create: CompanyCreateWithoutProductionsInput;
};

export type CompanyUpsertWithoutUserInput = {
  update: CompanyUpdateWithoutUserDataInput;
  create: CompanyCreateWithoutUserInput;
};

export type CompanyUpsertWithWhereUniqueWithoutVenuesInput = {
  where: CompanyWhereUniqueInput;
  update: CompanyUpdateWithoutVenuesDataInput;
  create: CompanyCreateWithoutVenuesInput;
};

export type CompanyWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  city?: Maybe<NullableStringFilter>;
  state?: Maybe<NullableStringFilter>;
  Producers?: Maybe<ProducerFilter>;
  Productions?: Maybe<ProductionFilter>;
  Events?: Maybe<EventFilter>;
  Venues?: Maybe<VenueFilter>;
  User?: Maybe<UserFilter>;
  AND?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
};

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  venueId: Scalars['Int'];
  productionId: Scalars['Int'];
  companyId: Scalars['Int'];
  Company: Company;
  Production: Production;
  Venue: Venue;
  Seats: Array<Seat>;
};


export type EventSeatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<SeatWhereUniqueInput>;
  after?: Maybe<SeatWhereUniqueInput>;
};

export type EventCreateInput = {
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  Company: CompanyCreateOneWithoutEventsInput;
  Production: ProductionCreateOneWithoutEventsInput;
  Venue: VenueCreateOneWithoutEventsInput;
  Seats?: Maybe<SeatCreateManyWithoutEventInput>;
};

export type EventCreateManyWithoutCompanyInput = {
  create?: Maybe<Array<EventCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateManyWithoutProductionInput = {
  create?: Maybe<Array<EventCreateWithoutProductionInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateManyWithoutVenueInput = {
  create?: Maybe<Array<EventCreateWithoutVenueInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateOneWithoutSeatsInput = {
  create?: Maybe<EventCreateWithoutSeatsInput>;
  connect?: Maybe<EventWhereUniqueInput>;
};

export type EventCreateWithoutCompanyInput = {
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  Production: ProductionCreateOneWithoutEventsInput;
  Venue: VenueCreateOneWithoutEventsInput;
  Seats?: Maybe<SeatCreateManyWithoutEventInput>;
};

export type EventCreateWithoutProductionInput = {
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  Company: CompanyCreateOneWithoutEventsInput;
  Venue: VenueCreateOneWithoutEventsInput;
  Seats?: Maybe<SeatCreateManyWithoutEventInput>;
};

export type EventCreateWithoutSeatsInput = {
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  Company: CompanyCreateOneWithoutEventsInput;
  Production: ProductionCreateOneWithoutEventsInput;
  Venue: VenueCreateOneWithoutEventsInput;
};

export type EventCreateWithoutVenueInput = {
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime: Scalars['DateTime'];
  Company: CompanyCreateOneWithoutEventsInput;
  Production: ProductionCreateOneWithoutEventsInput;
  Seats?: Maybe<SeatCreateManyWithoutEventInput>;
};

export type EventFilter = {
  every?: Maybe<EventWhereInput>;
  some?: Maybe<EventWhereInput>;
  none?: Maybe<EventWhereInput>;
};

export type EventOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  maxAdmission?: Maybe<OrderByArg>;
  dateTime?: Maybe<OrderByArg>;
  venueId?: Maybe<OrderByArg>;
  productionId?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
};

export type EventScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  maxAdmission?: Maybe<NullableIntFilter>;
  dateTime?: Maybe<DateTimeFilter>;
  venueId?: Maybe<IntFilter>;
  productionId?: Maybe<IntFilter>;
  companyId?: Maybe<IntFilter>;
  Seats?: Maybe<SeatFilter>;
  AND?: Maybe<Array<EventScalarWhereInput>>;
  OR?: Maybe<Array<EventScalarWhereInput>>;
  NOT?: Maybe<Array<EventScalarWhereInput>>;
};

export type EventUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutEventsInput>;
  Production?: Maybe<ProductionUpdateOneRequiredWithoutEventsInput>;
  Venue?: Maybe<VenueUpdateOneRequiredWithoutEventsInput>;
  Seats?: Maybe<SeatUpdateManyWithoutEventInput>;
};

export type EventUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
};

export type EventUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
};

export type EventUpdateManyWithoutCompanyInput = {
  create?: Maybe<Array<EventCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
  set?: Maybe<Array<EventWhereUniqueInput>>;
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  delete?: Maybe<Array<EventWhereUniqueInput>>;
  update?: Maybe<Array<EventUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<EventUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<EventScalarWhereInput>>;
  upsert?: Maybe<Array<EventUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type EventUpdateManyWithoutProductionInput = {
  create?: Maybe<Array<EventCreateWithoutProductionInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
  set?: Maybe<Array<EventWhereUniqueInput>>;
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  delete?: Maybe<Array<EventWhereUniqueInput>>;
  update?: Maybe<Array<EventUpdateWithWhereUniqueWithoutProductionInput>>;
  updateMany?: Maybe<Array<EventUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<EventScalarWhereInput>>;
  upsert?: Maybe<Array<EventUpsertWithWhereUniqueWithoutProductionInput>>;
};

export type EventUpdateManyWithoutVenueInput = {
  create?: Maybe<Array<EventCreateWithoutVenueInput>>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
  set?: Maybe<Array<EventWhereUniqueInput>>;
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  delete?: Maybe<Array<EventWhereUniqueInput>>;
  update?: Maybe<Array<EventUpdateWithWhereUniqueWithoutVenueInput>>;
  updateMany?: Maybe<Array<EventUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<EventScalarWhereInput>>;
  upsert?: Maybe<Array<EventUpsertWithWhereUniqueWithoutVenueInput>>;
};

export type EventUpdateManyWithWhereNestedInput = {
  where: EventScalarWhereInput;
  data: EventUpdateManyDataInput;
};

export type EventUpdateOneWithoutSeatsInput = {
  create?: Maybe<EventCreateWithoutSeatsInput>;
  connect?: Maybe<EventWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<EventUpdateWithoutSeatsDataInput>;
  upsert?: Maybe<EventUpsertWithoutSeatsInput>;
};

export type EventUpdateWithoutCompanyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  Production?: Maybe<ProductionUpdateOneRequiredWithoutEventsInput>;
  Venue?: Maybe<VenueUpdateOneRequiredWithoutEventsInput>;
  Seats?: Maybe<SeatUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutProductionDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutEventsInput>;
  Venue?: Maybe<VenueUpdateOneRequiredWithoutEventsInput>;
  Seats?: Maybe<SeatUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutSeatsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutEventsInput>;
  Production?: Maybe<ProductionUpdateOneRequiredWithoutEventsInput>;
  Venue?: Maybe<VenueUpdateOneRequiredWithoutEventsInput>;
};

export type EventUpdateWithoutVenueDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  maxAdmission?: Maybe<Scalars['Int']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutEventsInput>;
  Production?: Maybe<ProductionUpdateOneRequiredWithoutEventsInput>;
  Seats?: Maybe<SeatUpdateManyWithoutEventInput>;
};

export type EventUpdateWithWhereUniqueWithoutCompanyInput = {
  where: EventWhereUniqueInput;
  data: EventUpdateWithoutCompanyDataInput;
};

export type EventUpdateWithWhereUniqueWithoutProductionInput = {
  where: EventWhereUniqueInput;
  data: EventUpdateWithoutProductionDataInput;
};

export type EventUpdateWithWhereUniqueWithoutVenueInput = {
  where: EventWhereUniqueInput;
  data: EventUpdateWithoutVenueDataInput;
};

export type EventUpsertWithoutSeatsInput = {
  update: EventUpdateWithoutSeatsDataInput;
  create: EventCreateWithoutSeatsInput;
};

export type EventUpsertWithWhereUniqueWithoutCompanyInput = {
  where: EventWhereUniqueInput;
  update: EventUpdateWithoutCompanyDataInput;
  create: EventCreateWithoutCompanyInput;
};

export type EventUpsertWithWhereUniqueWithoutProductionInput = {
  where: EventWhereUniqueInput;
  update: EventUpdateWithoutProductionDataInput;
  create: EventCreateWithoutProductionInput;
};

export type EventUpsertWithWhereUniqueWithoutVenueInput = {
  where: EventWhereUniqueInput;
  update: EventUpdateWithoutVenueDataInput;
  create: EventCreateWithoutVenueInput;
};

export type EventWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  maxAdmission?: Maybe<NullableIntFilter>;
  dateTime?: Maybe<DateTimeFilter>;
  venueId?: Maybe<IntFilter>;
  productionId?: Maybe<IntFilter>;
  companyId?: Maybe<IntFilter>;
  Seats?: Maybe<SeatFilter>;
  AND?: Maybe<Array<EventWhereInput>>;
  OR?: Maybe<Array<EventWhereInput>>;
  NOT?: Maybe<Array<EventWhereInput>>;
  Company?: Maybe<CompanyWhereInput>;
  Production?: Maybe<ProductionWhereInput>;
  Venue?: Maybe<VenueWhereInput>;
};

export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  venueId?: Maybe<Scalars['Int']>;
  productionId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
  createOneCompany: Company;
  updateOneCompany?: Maybe<Company>;
  upsertOneCompany: Company;
  deleteOneCompany?: Maybe<Company>;
  updateManyCompany: BatchPayload;
  deleteManyCompany: BatchPayload;
  createOneEvent: Event;
  updateOneEvent?: Maybe<Event>;
  upsertOneEvent: Event;
  deleteOneEvent?: Maybe<Event>;
  updateManyEvent: BatchPayload;
  deleteManyEvent: BatchPayload;
  createOneProducer: Producer;
  updateOneProducer?: Maybe<Producer>;
  upsertOneProducer: Producer;
  deleteOneProducer?: Maybe<Producer>;
  updateManyProducer: BatchPayload;
  deleteManyProducer: BatchPayload;
  createOneProduction: Production;
  updateOneProduction?: Maybe<Production>;
  upsertOneProduction: Production;
  deleteOneProduction?: Maybe<Production>;
  updateManyProduction: BatchPayload;
  deleteManyProduction: BatchPayload;
  createOneSeat: Seat;
  updateOneSeat?: Maybe<Seat>;
  upsertOneSeat: Seat;
  deleteOneSeat?: Maybe<Seat>;
  updateManySeat: BatchPayload;
  deleteManySeat: BatchPayload;
  createOneSeatingChart: SeatingChart;
  updateOneSeatingChart?: Maybe<SeatingChart>;
  upsertOneSeatingChart: SeatingChart;
  deleteOneSeatingChart?: Maybe<SeatingChart>;
  updateManySeatingChart: BatchPayload;
  deleteManySeatingChart: BatchPayload;
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  upsertOneUser: User;
  deleteOneUser?: Maybe<User>;
  updateManyUser: BatchPayload;
  deleteManyUser: BatchPayload;
  createOneVenue: Venue;
  updateOneVenue?: Maybe<Venue>;
  upsertOneVenue: Venue;
  deleteOneVenue?: Maybe<Venue>;
  updateManyVenue: BatchPayload;
  deleteManyVenue: BatchPayload;
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
};


export type MutationDeleteOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: Maybe<CompanyWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
};


export type MutationCreateOneEventArgs = {
  data: EventCreateInput;
};


export type MutationUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertOneEventArgs = {
  where: EventWhereUniqueInput;
  create: EventCreateInput;
  update: EventUpdateInput;
};


export type MutationDeleteOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: Maybe<EventWhereInput>;
};


export type MutationDeleteManyEventArgs = {
  where?: Maybe<EventWhereInput>;
};


export type MutationCreateOneProducerArgs = {
  data: ProducerCreateInput;
};


export type MutationUpdateOneProducerArgs = {
  data: ProducerUpdateInput;
  where: ProducerWhereUniqueInput;
};


export type MutationUpsertOneProducerArgs = {
  where: ProducerWhereUniqueInput;
  create: ProducerCreateInput;
  update: ProducerUpdateInput;
};


export type MutationDeleteOneProducerArgs = {
  where: ProducerWhereUniqueInput;
};


export type MutationUpdateManyProducerArgs = {
  data: ProducerUpdateManyMutationInput;
  where?: Maybe<ProducerWhereInput>;
};


export type MutationDeleteManyProducerArgs = {
  where?: Maybe<ProducerWhereInput>;
};


export type MutationCreateOneProductionArgs = {
  data: ProductionCreateInput;
};


export type MutationUpdateOneProductionArgs = {
  data: ProductionUpdateInput;
  where: ProductionWhereUniqueInput;
};


export type MutationUpsertOneProductionArgs = {
  where: ProductionWhereUniqueInput;
  create: ProductionCreateInput;
  update: ProductionUpdateInput;
};


export type MutationDeleteOneProductionArgs = {
  where: ProductionWhereUniqueInput;
};


export type MutationUpdateManyProductionArgs = {
  data: ProductionUpdateManyMutationInput;
  where?: Maybe<ProductionWhereInput>;
};


export type MutationDeleteManyProductionArgs = {
  where?: Maybe<ProductionWhereInput>;
};


export type MutationCreateOneSeatArgs = {
  data: SeatCreateInput;
};


export type MutationUpdateOneSeatArgs = {
  data: SeatUpdateInput;
  where: SeatWhereUniqueInput;
};


export type MutationUpsertOneSeatArgs = {
  where: SeatWhereUniqueInput;
  create: SeatCreateInput;
  update: SeatUpdateInput;
};


export type MutationDeleteOneSeatArgs = {
  where: SeatWhereUniqueInput;
};


export type MutationUpdateManySeatArgs = {
  data: SeatUpdateManyMutationInput;
  where?: Maybe<SeatWhereInput>;
};


export type MutationDeleteManySeatArgs = {
  where?: Maybe<SeatWhereInput>;
};


export type MutationCreateOneSeatingChartArgs = {
  data: SeatingChartCreateInput;
};


export type MutationUpdateOneSeatingChartArgs = {
  data: SeatingChartUpdateInput;
  where: SeatingChartWhereUniqueInput;
};


export type MutationUpsertOneSeatingChartArgs = {
  where: SeatingChartWhereUniqueInput;
  create: SeatingChartCreateInput;
  update: SeatingChartUpdateInput;
};


export type MutationDeleteOneSeatingChartArgs = {
  where: SeatingChartWhereUniqueInput;
};


export type MutationUpdateManySeatingChartArgs = {
  data: SeatingChartUpdateManyMutationInput;
  where?: Maybe<SeatingChartWhereInput>;
};


export type MutationDeleteManySeatingChartArgs = {
  where?: Maybe<SeatingChartWhereInput>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationCreateOneVenueArgs = {
  data: VenueCreateInput;
};


export type MutationUpdateOneVenueArgs = {
  data: VenueUpdateInput;
  where: VenueWhereUniqueInput;
};


export type MutationUpsertOneVenueArgs = {
  where: VenueWhereUniqueInput;
  create: VenueCreateInput;
  update: VenueUpdateInput;
};


export type MutationDeleteOneVenueArgs = {
  where: VenueWhereUniqueInput;
};


export type MutationUpdateManyVenueArgs = {
  data: VenueUpdateManyMutationInput;
  where?: Maybe<VenueWhereInput>;
};


export type MutationDeleteManyVenueArgs = {
  where?: Maybe<VenueWhereInput>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Producer = {
  __typename?: 'Producer';
  id: Scalars['Int'];
  name: Scalars['String'];
  companyId: Scalars['Int'];
  Company: Company;
  Productions: Array<Production>;
};


export type ProducerProductionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductionWhereUniqueInput>;
  after?: Maybe<ProductionWhereUniqueInput>;
};

export type ProducerCreateInput = {
  name: Scalars['String'];
  Company: CompanyCreateOneWithoutProducersInput;
  Productions?: Maybe<ProductionCreateManyWithoutProducerInput>;
};

export type ProducerCreateManyWithoutCompanyInput = {
  create?: Maybe<Array<ProducerCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<ProducerWhereUniqueInput>>;
};

export type ProducerCreateOneWithoutProductionsInput = {
  create?: Maybe<ProducerCreateWithoutProductionsInput>;
  connect?: Maybe<ProducerWhereUniqueInput>;
};

export type ProducerCreateWithoutCompanyInput = {
  name: Scalars['String'];
  Productions?: Maybe<ProductionCreateManyWithoutProducerInput>;
};

export type ProducerCreateWithoutProductionsInput = {
  name: Scalars['String'];
  Company: CompanyCreateOneWithoutProducersInput;
};

export type ProducerFilter = {
  every?: Maybe<ProducerWhereInput>;
  some?: Maybe<ProducerWhereInput>;
  none?: Maybe<ProducerWhereInput>;
};

export type ProducerOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
};

export type ProducerScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  companyId?: Maybe<IntFilter>;
  Productions?: Maybe<ProductionFilter>;
  AND?: Maybe<Array<ProducerScalarWhereInput>>;
  OR?: Maybe<Array<ProducerScalarWhereInput>>;
  NOT?: Maybe<Array<ProducerScalarWhereInput>>;
};

export type ProducerUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutProducersInput>;
  Productions?: Maybe<ProductionUpdateManyWithoutProducerInput>;
};

export type ProducerUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProducerUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProducerUpdateManyWithoutCompanyInput = {
  create?: Maybe<Array<ProducerCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<ProducerWhereUniqueInput>>;
  set?: Maybe<Array<ProducerWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProducerWhereUniqueInput>>;
  delete?: Maybe<Array<ProducerWhereUniqueInput>>;
  update?: Maybe<Array<ProducerUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<ProducerUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProducerScalarWhereInput>>;
  upsert?: Maybe<Array<ProducerUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type ProducerUpdateManyWithWhereNestedInput = {
  where: ProducerScalarWhereInput;
  data: ProducerUpdateManyDataInput;
};

export type ProducerUpdateOneRequiredWithoutProductionsInput = {
  create?: Maybe<ProducerCreateWithoutProductionsInput>;
  connect?: Maybe<ProducerWhereUniqueInput>;
  update?: Maybe<ProducerUpdateWithoutProductionsDataInput>;
  upsert?: Maybe<ProducerUpsertWithoutProductionsInput>;
};

export type ProducerUpdateWithoutCompanyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Productions?: Maybe<ProductionUpdateManyWithoutProducerInput>;
};

export type ProducerUpdateWithoutProductionsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutProducersInput>;
};

export type ProducerUpdateWithWhereUniqueWithoutCompanyInput = {
  where: ProducerWhereUniqueInput;
  data: ProducerUpdateWithoutCompanyDataInput;
};

export type ProducerUpsertWithoutProductionsInput = {
  update: ProducerUpdateWithoutProductionsDataInput;
  create: ProducerCreateWithoutProductionsInput;
};

export type ProducerUpsertWithWhereUniqueWithoutCompanyInput = {
  where: ProducerWhereUniqueInput;
  update: ProducerUpdateWithoutCompanyDataInput;
  create: ProducerCreateWithoutCompanyInput;
};

export type ProducerWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  companyId?: Maybe<IntFilter>;
  Productions?: Maybe<ProductionFilter>;
  AND?: Maybe<Array<ProducerWhereInput>>;
  OR?: Maybe<Array<ProducerWhereInput>>;
  NOT?: Maybe<Array<ProducerWhereInput>>;
  Company?: Maybe<CompanyWhereInput>;
};

export type ProducerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
};

export type Production = {
  __typename?: 'Production';
  id: Scalars['Int'];
  name: Scalars['String'];
  producerId: Scalars['Int'];
  companyId: Scalars['Int'];
  Company: Company;
  Producer: Producer;
  Events: Array<Event>;
};


export type ProductionEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EventWhereUniqueInput>;
  after?: Maybe<EventWhereUniqueInput>;
};

export type ProductionCreateInput = {
  name: Scalars['String'];
  Company: CompanyCreateOneWithoutProductionsInput;
  Producer: ProducerCreateOneWithoutProductionsInput;
  Events?: Maybe<EventCreateManyWithoutProductionInput>;
};

export type ProductionCreateManyWithoutCompanyInput = {
  create?: Maybe<Array<ProductionCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<ProductionWhereUniqueInput>>;
};

export type ProductionCreateManyWithoutProducerInput = {
  create?: Maybe<Array<ProductionCreateWithoutProducerInput>>;
  connect?: Maybe<Array<ProductionWhereUniqueInput>>;
};

export type ProductionCreateOneWithoutEventsInput = {
  create?: Maybe<ProductionCreateWithoutEventsInput>;
  connect?: Maybe<ProductionWhereUniqueInput>;
};

export type ProductionCreateWithoutCompanyInput = {
  name: Scalars['String'];
  Producer: ProducerCreateOneWithoutProductionsInput;
  Events?: Maybe<EventCreateManyWithoutProductionInput>;
};

export type ProductionCreateWithoutEventsInput = {
  name: Scalars['String'];
  Company: CompanyCreateOneWithoutProductionsInput;
  Producer: ProducerCreateOneWithoutProductionsInput;
};

export type ProductionCreateWithoutProducerInput = {
  name: Scalars['String'];
  Company: CompanyCreateOneWithoutProductionsInput;
  Events?: Maybe<EventCreateManyWithoutProductionInput>;
};

export type ProductionFilter = {
  every?: Maybe<ProductionWhereInput>;
  some?: Maybe<ProductionWhereInput>;
  none?: Maybe<ProductionWhereInput>;
};

export type ProductionOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  producerId?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
};

export type ProductionScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  producerId?: Maybe<IntFilter>;
  companyId?: Maybe<IntFilter>;
  Events?: Maybe<EventFilter>;
  AND?: Maybe<Array<ProductionScalarWhereInput>>;
  OR?: Maybe<Array<ProductionScalarWhereInput>>;
  NOT?: Maybe<Array<ProductionScalarWhereInput>>;
};

export type ProductionUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutProductionsInput>;
  Producer?: Maybe<ProducerUpdateOneRequiredWithoutProductionsInput>;
  Events?: Maybe<EventUpdateManyWithoutProductionInput>;
};

export type ProductionUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductionUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductionUpdateManyWithoutCompanyInput = {
  create?: Maybe<Array<ProductionCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<ProductionWhereUniqueInput>>;
  set?: Maybe<Array<ProductionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductionWhereUniqueInput>>;
  delete?: Maybe<Array<ProductionWhereUniqueInput>>;
  update?: Maybe<Array<ProductionUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<ProductionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductionScalarWhereInput>>;
  upsert?: Maybe<Array<ProductionUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type ProductionUpdateManyWithoutProducerInput = {
  create?: Maybe<Array<ProductionCreateWithoutProducerInput>>;
  connect?: Maybe<Array<ProductionWhereUniqueInput>>;
  set?: Maybe<Array<ProductionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductionWhereUniqueInput>>;
  delete?: Maybe<Array<ProductionWhereUniqueInput>>;
  update?: Maybe<Array<ProductionUpdateWithWhereUniqueWithoutProducerInput>>;
  updateMany?: Maybe<Array<ProductionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductionScalarWhereInput>>;
  upsert?: Maybe<Array<ProductionUpsertWithWhereUniqueWithoutProducerInput>>;
};

export type ProductionUpdateManyWithWhereNestedInput = {
  where: ProductionScalarWhereInput;
  data: ProductionUpdateManyDataInput;
};

export type ProductionUpdateOneRequiredWithoutEventsInput = {
  create?: Maybe<ProductionCreateWithoutEventsInput>;
  connect?: Maybe<ProductionWhereUniqueInput>;
  update?: Maybe<ProductionUpdateWithoutEventsDataInput>;
  upsert?: Maybe<ProductionUpsertWithoutEventsInput>;
};

export type ProductionUpdateWithoutCompanyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Producer?: Maybe<ProducerUpdateOneRequiredWithoutProductionsInput>;
  Events?: Maybe<EventUpdateManyWithoutProductionInput>;
};

export type ProductionUpdateWithoutEventsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutProductionsInput>;
  Producer?: Maybe<ProducerUpdateOneRequiredWithoutProductionsInput>;
};

export type ProductionUpdateWithoutProducerDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutProductionsInput>;
  Events?: Maybe<EventUpdateManyWithoutProductionInput>;
};

export type ProductionUpdateWithWhereUniqueWithoutCompanyInput = {
  where: ProductionWhereUniqueInput;
  data: ProductionUpdateWithoutCompanyDataInput;
};

export type ProductionUpdateWithWhereUniqueWithoutProducerInput = {
  where: ProductionWhereUniqueInput;
  data: ProductionUpdateWithoutProducerDataInput;
};

export type ProductionUpsertWithoutEventsInput = {
  update: ProductionUpdateWithoutEventsDataInput;
  create: ProductionCreateWithoutEventsInput;
};

export type ProductionUpsertWithWhereUniqueWithoutCompanyInput = {
  where: ProductionWhereUniqueInput;
  update: ProductionUpdateWithoutCompanyDataInput;
  create: ProductionCreateWithoutCompanyInput;
};

export type ProductionUpsertWithWhereUniqueWithoutProducerInput = {
  where: ProductionWhereUniqueInput;
  update: ProductionUpdateWithoutProducerDataInput;
  create: ProductionCreateWithoutProducerInput;
};

export type ProductionWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  producerId?: Maybe<IntFilter>;
  companyId?: Maybe<IntFilter>;
  Events?: Maybe<EventFilter>;
  AND?: Maybe<Array<ProductionWhereInput>>;
  OR?: Maybe<Array<ProductionWhereInput>>;
  NOT?: Maybe<Array<ProductionWhereInput>>;
  Company?: Maybe<CompanyWhereInput>;
  Producer?: Maybe<ProducerWhereInput>;
};

export type ProductionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  producerId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  company?: Maybe<Company>;
  companies: Array<Company>;
  companiesCount?: Maybe<Scalars['Int']>;
  event?: Maybe<Event>;
  events: Array<Event>;
  eventsCount?: Maybe<Scalars['Int']>;
  producer?: Maybe<Producer>;
  producers: Array<Producer>;
  producersCount?: Maybe<Scalars['Int']>;
  production?: Maybe<Production>;
  productions: Array<Production>;
  productionsCount?: Maybe<Scalars['Int']>;
  seat?: Maybe<Seat>;
  seats: Array<Seat>;
  seatsCount?: Maybe<Scalars['Int']>;
  seatingChart?: Maybe<SeatingChart>;
  seatingCharts: Array<SeatingChart>;
  seatingChartsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users: Array<User>;
  usersCount?: Maybe<Scalars['Int']>;
  venue?: Maybe<Venue>;
  venues: Array<Venue>;
  venuesCount?: Maybe<Scalars['Int']>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CompanyWhereUniqueInput>;
  after?: Maybe<CompanyWhereUniqueInput>;
};


export type QueryCompaniesCountArgs = {
  where?: Maybe<CompanyWhereInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EventWhereUniqueInput>;
  after?: Maybe<EventWhereUniqueInput>;
};


export type QueryEventsCountArgs = {
  where?: Maybe<EventWhereInput>;
};


export type QueryProducerArgs = {
  where: ProducerWhereUniqueInput;
};


export type QueryProducersArgs = {
  where?: Maybe<ProducerWhereInput>;
  orderBy?: Maybe<ProducerOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProducerWhereUniqueInput>;
  after?: Maybe<ProducerWhereUniqueInput>;
};


export type QueryProducersCountArgs = {
  where?: Maybe<ProducerWhereInput>;
};


export type QueryProductionArgs = {
  where: ProductionWhereUniqueInput;
};


export type QueryProductionsArgs = {
  where?: Maybe<ProductionWhereInput>;
  orderBy?: Maybe<ProductionOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductionWhereUniqueInput>;
  after?: Maybe<ProductionWhereUniqueInput>;
};


export type QueryProductionsCountArgs = {
  where?: Maybe<ProductionWhereInput>;
};


export type QuerySeatArgs = {
  where: SeatWhereUniqueInput;
};


export type QuerySeatsArgs = {
  where?: Maybe<SeatWhereInput>;
  orderBy?: Maybe<SeatOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<SeatWhereUniqueInput>;
  after?: Maybe<SeatWhereUniqueInput>;
};


export type QuerySeatsCountArgs = {
  where?: Maybe<SeatWhereInput>;
};


export type QuerySeatingChartArgs = {
  where: SeatingChartWhereUniqueInput;
};


export type QuerySeatingChartsArgs = {
  where?: Maybe<SeatingChartWhereInput>;
  orderBy?: Maybe<SeatingChartOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<SeatingChartWhereUniqueInput>;
  after?: Maybe<SeatingChartWhereUniqueInput>;
};


export type QuerySeatingChartsCountArgs = {
  where?: Maybe<SeatingChartWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<UserWhereInput>;
};


export type QueryVenueArgs = {
  where: VenueWhereUniqueInput;
};


export type QueryVenuesArgs = {
  where?: Maybe<VenueWhereInput>;
  orderBy?: Maybe<VenueOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<VenueWhereUniqueInput>;
  after?: Maybe<VenueWhereUniqueInput>;
};


export type QueryVenuesCountArgs = {
  where?: Maybe<VenueWhereInput>;
};

export enum RoleType {
  SuperAdmin = 'SuperAdmin',
  CompanyAdmin = 'CompanyAdmin',
  Customer = 'Customer'
}

export type Seat = {
  __typename?: 'Seat';
  id: Scalars['Int'];
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
  Event?: Maybe<Event>;
};

export type SeatCreateInput = {
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  Event?: Maybe<EventCreateOneWithoutSeatsInput>;
};

export type SeatCreateManyWithoutEventInput = {
  create?: Maybe<Array<SeatCreateWithoutEventInput>>;
  connect?: Maybe<Array<SeatWhereUniqueInput>>;
};

export type SeatCreateWithoutEventInput = {
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SeatFilter = {
  every?: Maybe<SeatWhereInput>;
  some?: Maybe<SeatWhereInput>;
  none?: Maybe<SeatWhereInput>;
};

export type SeatingChart = {
  __typename?: 'SeatingChart';
  id: Scalars['Int'];
  name: Scalars['String'];
  venueId?: Maybe<Scalars['Int']>;
  Venue?: Maybe<Venue>;
};

export type SeatingChartCreateInput = {
  name: Scalars['String'];
  Venue?: Maybe<VenueCreateOneWithoutSeatingChartsInput>;
};

export type SeatingChartCreateManyWithoutVenueInput = {
  create?: Maybe<Array<SeatingChartCreateWithoutVenueInput>>;
  connect?: Maybe<Array<SeatingChartWhereUniqueInput>>;
};

export type SeatingChartCreateWithoutVenueInput = {
  name: Scalars['String'];
};

export type SeatingChartFilter = {
  every?: Maybe<SeatingChartWhereInput>;
  some?: Maybe<SeatingChartWhereInput>;
  none?: Maybe<SeatingChartWhereInput>;
};

export type SeatingChartOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  venueId?: Maybe<OrderByArg>;
};

export type SeatingChartScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  venueId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<SeatingChartScalarWhereInput>>;
  OR?: Maybe<Array<SeatingChartScalarWhereInput>>;
  NOT?: Maybe<Array<SeatingChartScalarWhereInput>>;
};

export type SeatingChartUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Venue?: Maybe<VenueUpdateOneWithoutSeatingChartsInput>;
};

export type SeatingChartUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SeatingChartUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SeatingChartUpdateManyWithoutVenueInput = {
  create?: Maybe<Array<SeatingChartCreateWithoutVenueInput>>;
  connect?: Maybe<Array<SeatingChartWhereUniqueInput>>;
  set?: Maybe<Array<SeatingChartWhereUniqueInput>>;
  disconnect?: Maybe<Array<SeatingChartWhereUniqueInput>>;
  delete?: Maybe<Array<SeatingChartWhereUniqueInput>>;
  update?: Maybe<Array<SeatingChartUpdateWithWhereUniqueWithoutVenueInput>>;
  updateMany?: Maybe<Array<SeatingChartUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SeatingChartScalarWhereInput>>;
  upsert?: Maybe<Array<SeatingChartUpsertWithWhereUniqueWithoutVenueInput>>;
};

export type SeatingChartUpdateManyWithWhereNestedInput = {
  where: SeatingChartScalarWhereInput;
  data: SeatingChartUpdateManyDataInput;
};

export type SeatingChartUpdateWithoutVenueDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SeatingChartUpdateWithWhereUniqueWithoutVenueInput = {
  where: SeatingChartWhereUniqueInput;
  data: SeatingChartUpdateWithoutVenueDataInput;
};

export type SeatingChartUpsertWithWhereUniqueWithoutVenueInput = {
  where: SeatingChartWhereUniqueInput;
  update: SeatingChartUpdateWithoutVenueDataInput;
  create: SeatingChartCreateWithoutVenueInput;
};

export type SeatingChartWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  venueId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<SeatingChartWhereInput>>;
  OR?: Maybe<Array<SeatingChartWhereInput>>;
  NOT?: Maybe<Array<SeatingChartWhereInput>>;
  Venue?: Maybe<VenueWhereInput>;
};

export type SeatingChartWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  venueId?: Maybe<Scalars['Int']>;
};

export type SeatOrderByInput = {
  id?: Maybe<OrderByArg>;
  section?: Maybe<OrderByArg>;
  row?: Maybe<OrderByArg>;
  number?: Maybe<OrderByArg>;
  level?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  eventId?: Maybe<OrderByArg>;
};

export type SeatScalarWhereInput = {
  id?: Maybe<IntFilter>;
  section?: Maybe<NullableStringFilter>;
  row?: Maybe<NullableStringFilter>;
  number?: Maybe<NullableStringFilter>;
  level?: Maybe<NullableStringFilter>;
  status?: Maybe<NullableIntFilter>;
  eventId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<SeatScalarWhereInput>>;
  OR?: Maybe<Array<SeatScalarWhereInput>>;
  NOT?: Maybe<Array<SeatScalarWhereInput>>;
};

export type SeatUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  Event?: Maybe<EventUpdateOneWithoutSeatsInput>;
};

export type SeatUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SeatUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SeatUpdateManyWithoutEventInput = {
  create?: Maybe<Array<SeatCreateWithoutEventInput>>;
  connect?: Maybe<Array<SeatWhereUniqueInput>>;
  set?: Maybe<Array<SeatWhereUniqueInput>>;
  disconnect?: Maybe<Array<SeatWhereUniqueInput>>;
  delete?: Maybe<Array<SeatWhereUniqueInput>>;
  update?: Maybe<Array<SeatUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: Maybe<Array<SeatUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SeatScalarWhereInput>>;
  upsert?: Maybe<Array<SeatUpsertWithWhereUniqueWithoutEventInput>>;
};

export type SeatUpdateManyWithWhereNestedInput = {
  where: SeatScalarWhereInput;
  data: SeatUpdateManyDataInput;
};

export type SeatUpdateWithoutEventDataInput = {
  id?: Maybe<Scalars['Int']>;
  section?: Maybe<Scalars['String']>;
  row?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SeatUpdateWithWhereUniqueWithoutEventInput = {
  where: SeatWhereUniqueInput;
  data: SeatUpdateWithoutEventDataInput;
};

export type SeatUpsertWithWhereUniqueWithoutEventInput = {
  where: SeatWhereUniqueInput;
  update: SeatUpdateWithoutEventDataInput;
  create: SeatCreateWithoutEventInput;
};

export type SeatWhereInput = {
  id?: Maybe<IntFilter>;
  section?: Maybe<NullableStringFilter>;
  row?: Maybe<NullableStringFilter>;
  number?: Maybe<NullableStringFilter>;
  level?: Maybe<NullableStringFilter>;
  status?: Maybe<NullableIntFilter>;
  eventId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<SeatWhereInput>>;
  OR?: Maybe<Array<SeatWhereInput>>;
  NOT?: Maybe<Array<SeatWhereInput>>;
  Event?: Maybe<EventWhereInput>;
};

export type SeatWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  companyId: Scalars['Int'];
  Company: Company;
  roleType: RoleType;
};

export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roleType: RoleType;
  Company: CompanyCreateOneWithoutUserInput;
};

export type UserCreateManyWithoutCompanyInput = {
  create?: Maybe<Array<UserCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateWithoutCompanyInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roleType: RoleType;
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
  roleType?: Maybe<OrderByArg>;
};

export type UserScalarWhereInput = {
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  companyId?: Maybe<IntFilter>;
  roleType?: Maybe<RoleType>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roleType?: Maybe<RoleType>;
  Company?: Maybe<CompanyUpdateOneRequiredWithoutUserInput>;
};

export type UserUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roleType?: Maybe<RoleType>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roleType?: Maybe<RoleType>;
};

export type UserUpdateManyWithoutCompanyInput = {
  create?: Maybe<Array<UserCreateWithoutCompanyInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
};

export type UserUpdateWithoutCompanyDataInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roleType?: Maybe<RoleType>;
};

export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutCompanyDataInput;
};

export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutCompanyDataInput;
  create: UserCreateWithoutCompanyInput;
};

export type UserWhereInput = {
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  companyId?: Maybe<IntFilter>;
  roleType?: Maybe<RoleType>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  Company?: Maybe<CompanyWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type Venue = {
  __typename?: 'Venue';
  id: Scalars['Int'];
  name: Scalars['String'];
  Events: Array<Event>;
  SeatingCharts: Array<SeatingChart>;
  Companies: Array<Company>;
};


export type VenueEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EventWhereUniqueInput>;
  after?: Maybe<EventWhereUniqueInput>;
};


export type VenueSeatingChartsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<SeatingChartWhereUniqueInput>;
  after?: Maybe<SeatingChartWhereUniqueInput>;
};


export type VenueCompaniesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CompanyWhereUniqueInput>;
  after?: Maybe<CompanyWhereUniqueInput>;
};

export type VenueCreateInput = {
  name: Scalars['String'];
  Events?: Maybe<EventCreateManyWithoutVenueInput>;
  SeatingCharts?: Maybe<SeatingChartCreateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyCreateManyWithoutVenuesInput>;
};

export type VenueCreateManyWithoutCompaniesInput = {
  create?: Maybe<Array<VenueCreateWithoutCompaniesInput>>;
  connect?: Maybe<Array<VenueWhereUniqueInput>>;
};

export type VenueCreateOneWithoutEventsInput = {
  create?: Maybe<VenueCreateWithoutEventsInput>;
  connect?: Maybe<VenueWhereUniqueInput>;
};

export type VenueCreateOneWithoutSeatingChartsInput = {
  create?: Maybe<VenueCreateWithoutSeatingChartsInput>;
  connect?: Maybe<VenueWhereUniqueInput>;
};

export type VenueCreateWithoutCompaniesInput = {
  name: Scalars['String'];
  Events?: Maybe<EventCreateManyWithoutVenueInput>;
  SeatingCharts?: Maybe<SeatingChartCreateManyWithoutVenueInput>;
};

export type VenueCreateWithoutEventsInput = {
  name: Scalars['String'];
  SeatingCharts?: Maybe<SeatingChartCreateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyCreateManyWithoutVenuesInput>;
};

export type VenueCreateWithoutSeatingChartsInput = {
  name: Scalars['String'];
  Events?: Maybe<EventCreateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyCreateManyWithoutVenuesInput>;
};

export type VenueFilter = {
  every?: Maybe<VenueWhereInput>;
  some?: Maybe<VenueWhereInput>;
  none?: Maybe<VenueWhereInput>;
};

export type VenueOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
};

export type VenueScalarWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  Events?: Maybe<EventFilter>;
  SeatingCharts?: Maybe<SeatingChartFilter>;
  Companies?: Maybe<CompanyFilter>;
  AND?: Maybe<Array<VenueScalarWhereInput>>;
  OR?: Maybe<Array<VenueScalarWhereInput>>;
  NOT?: Maybe<Array<VenueScalarWhereInput>>;
};

export type VenueUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Events?: Maybe<EventUpdateManyWithoutVenueInput>;
  SeatingCharts?: Maybe<SeatingChartUpdateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyUpdateManyWithoutVenuesInput>;
};

export type VenueUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type VenueUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type VenueUpdateManyWithoutCompaniesInput = {
  create?: Maybe<Array<VenueCreateWithoutCompaniesInput>>;
  connect?: Maybe<Array<VenueWhereUniqueInput>>;
  set?: Maybe<Array<VenueWhereUniqueInput>>;
  disconnect?: Maybe<Array<VenueWhereUniqueInput>>;
  delete?: Maybe<Array<VenueWhereUniqueInput>>;
  update?: Maybe<Array<VenueUpdateWithWhereUniqueWithoutCompaniesInput>>;
  updateMany?: Maybe<Array<VenueUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<VenueScalarWhereInput>>;
  upsert?: Maybe<Array<VenueUpsertWithWhereUniqueWithoutCompaniesInput>>;
};

export type VenueUpdateManyWithWhereNestedInput = {
  where: VenueScalarWhereInput;
  data: VenueUpdateManyDataInput;
};

export type VenueUpdateOneRequiredWithoutEventsInput = {
  create?: Maybe<VenueCreateWithoutEventsInput>;
  connect?: Maybe<VenueWhereUniqueInput>;
  update?: Maybe<VenueUpdateWithoutEventsDataInput>;
  upsert?: Maybe<VenueUpsertWithoutEventsInput>;
};

export type VenueUpdateOneWithoutSeatingChartsInput = {
  create?: Maybe<VenueCreateWithoutSeatingChartsInput>;
  connect?: Maybe<VenueWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<VenueUpdateWithoutSeatingChartsDataInput>;
  upsert?: Maybe<VenueUpsertWithoutSeatingChartsInput>;
};

export type VenueUpdateWithoutCompaniesDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Events?: Maybe<EventUpdateManyWithoutVenueInput>;
  SeatingCharts?: Maybe<SeatingChartUpdateManyWithoutVenueInput>;
};

export type VenueUpdateWithoutEventsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  SeatingCharts?: Maybe<SeatingChartUpdateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyUpdateManyWithoutVenuesInput>;
};

export type VenueUpdateWithoutSeatingChartsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Events?: Maybe<EventUpdateManyWithoutVenueInput>;
  Companies?: Maybe<CompanyUpdateManyWithoutVenuesInput>;
};

export type VenueUpdateWithWhereUniqueWithoutCompaniesInput = {
  where: VenueWhereUniqueInput;
  data: VenueUpdateWithoutCompaniesDataInput;
};

export type VenueUpsertWithoutEventsInput = {
  update: VenueUpdateWithoutEventsDataInput;
  create: VenueCreateWithoutEventsInput;
};

export type VenueUpsertWithoutSeatingChartsInput = {
  update: VenueUpdateWithoutSeatingChartsDataInput;
  create: VenueCreateWithoutSeatingChartsInput;
};

export type VenueUpsertWithWhereUniqueWithoutCompaniesInput = {
  where: VenueWhereUniqueInput;
  update: VenueUpdateWithoutCompaniesDataInput;
  create: VenueCreateWithoutCompaniesInput;
};

export type VenueWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  Events?: Maybe<EventFilter>;
  SeatingCharts?: Maybe<SeatingChartFilter>;
  Companies?: Maybe<CompanyFilter>;
  AND?: Maybe<Array<VenueWhereInput>>;
  OR?: Maybe<Array<VenueWhereInput>>;
  NOT?: Maybe<Array<VenueWhereInput>>;
};

export type VenueWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CompanyFieldsFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name' | 'city' | 'state'>
);

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
);

export type CompanyQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type CompanyQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
);

export type CompaniesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'companiesCount'>
);

export type UpdateCompanyMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}>;


export type UpdateCompanyMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCompany?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
);

export type CreateCompanyMutationVariables = Exact<{
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}>;


export type CreateCompanyMutation = (
  { __typename?: 'Mutation' }
  & { createOneCompany: (
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  ) }
);

export const CompanyFieldsFragmentDoc = gql`
    fragment companyFields on Company {
  id
  name
  city
  state
}
    `;
export const CompaniesDocument = gql`
    query companies {
  companies(orderBy: {name: asc}) {
    ...companyFields
  }
}
    ${CompanyFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CompaniesGQL extends Apollo.Query<CompaniesQuery, CompaniesQueryVariables> {
    document = CompaniesDocument;
    
  }
export const CompanyDocument = gql`
    query company($id: Int) {
  company(where: {id: $id}) {
    ...companyFields
  }
}
    ${CompanyFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CompanyGQL extends Apollo.Query<CompanyQuery, CompanyQueryVariables> {
    document = CompanyDocument;
    
  }
export const CompaniesCountDocument = gql`
    query companiesCount {
  companiesCount
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CompaniesCountGQL extends Apollo.Query<CompaniesCountQuery, CompaniesCountQueryVariables> {
    document = CompaniesCountDocument;
    
  }
export const UpdateCompanyDocument = gql`
    mutation updateCompany($id: Int, $name: String, $city: String, $state: String) {
  updateOneCompany(where: {id: $id}, data: {name: $name, city: $city, state: $state}) {
    ...companyFields
  }
}
    ${CompanyFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCompanyGQL extends Apollo.Mutation<UpdateCompanyMutation, UpdateCompanyMutationVariables> {
    document = UpdateCompanyDocument;
    
  }
export const CreateCompanyDocument = gql`
    mutation createCompany($name: String!, $city: String, $state: String) {
  createOneCompany(data: {name: $name, city: $city, state: $state}) {
    ...companyFields
  }
}
    ${CompanyFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCompanyGQL extends Apollo.Mutation<CreateCompanyMutation, CreateCompanyMutationVariables> {
    document = CreateCompanyDocument;
    
  }