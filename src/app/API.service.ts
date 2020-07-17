/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateTicketProviderInput = {
  id?: string | null;
  name: string;
};

export type ModelTicketProviderConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelTicketProviderConditionInput | null> | null;
  or?: Array<ModelTicketProviderConditionInput | null> | null;
  not?: ModelTicketProviderConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTicketProviderInput = {
  id: string;
  name?: string | null;
};

export type DeleteTicketProviderInput = {
  id?: string | null;
};

export type CreateProductionInput = {
  id?: string | null;
  name: string;
  producer?: string | null;
  ticketProviderProductionsId?: string | null;
};

export type ModelProductionConditionInput = {
  name?: ModelStringInput | null;
  producer?: ModelStringInput | null;
  and?: Array<ModelProductionConditionInput | null> | null;
  or?: Array<ModelProductionConditionInput | null> | null;
  not?: ModelProductionConditionInput | null;
};

export type UpdateProductionInput = {
  id: string;
  name?: string | null;
  producer?: string | null;
  ticketProviderProductionsId?: string | null;
};

export type DeleteProductionInput = {
  id?: string | null;
};

export type CreateEventInput = {
  id?: string | null;
  name: string;
  datetime?: string | null;
  maxAdmission?: number | null;
  eventProductionId: string;
  eventVenueId?: string | null;
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null;
  datetime?: ModelStringInput | null;
  maxAdmission?: ModelIntInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateEventInput = {
  id: string;
  name?: string | null;
  datetime?: string | null;
  maxAdmission?: number | null;
  eventProductionId?: string | null;
  eventVenueId?: string | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreateVenueInput = {
  id?: string | null;
  name: string;
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelVenueConditionInput | null> | null;
  or?: Array<ModelVenueConditionInput | null> | null;
  not?: ModelVenueConditionInput | null;
};

export type UpdateVenueInput = {
  id: string;
  name?: string | null;
};

export type DeleteVenueInput = {
  id?: string | null;
};

export type CreateSeatingChartInput = {
  id?: string | null;
  name: string;
  seatingChartVenueId: string;
};

export type ModelSeatingChartConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelSeatingChartConditionInput | null> | null;
  or?: Array<ModelSeatingChartConditionInput | null> | null;
  not?: ModelSeatingChartConditionInput | null;
};

export type UpdateSeatingChartInput = {
  id: string;
  name?: string | null;
  seatingChartVenueId?: string | null;
};

export type DeleteSeatingChartInput = {
  id?: string | null;
};

export type CreateSeatInput = {
  id?: string | null;
  section: string;
  row: string;
  number: string;
  status: string;
  seatEventId?: string | null;
};

export type ModelSeatConditionInput = {
  section?: ModelStringInput | null;
  row?: ModelStringInput | null;
  number?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSeatConditionInput | null> | null;
  or?: Array<ModelSeatConditionInput | null> | null;
  not?: ModelSeatConditionInput | null;
};

export type UpdateSeatInput = {
  id: string;
  section?: string | null;
  row?: string | null;
  number?: string | null;
  status?: string | null;
  seatEventId?: string | null;
};

export type DeleteSeatInput = {
  id?: string | null;
};

export type ModelTicketProviderFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTicketProviderFilterInput | null> | null;
  or?: Array<ModelTicketProviderFilterInput | null> | null;
  not?: ModelTicketProviderFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelProductionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  producer?: ModelStringInput | null;
  and?: Array<ModelProductionFilterInput | null> | null;
  or?: Array<ModelProductionFilterInput | null> | null;
  not?: ModelProductionFilterInput | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  datetime?: ModelStringInput | null;
  maxAdmission?: ModelIntInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelVenueFilterInput | null> | null;
  or?: Array<ModelVenueFilterInput | null> | null;
  not?: ModelVenueFilterInput | null;
};

export type ModelSeatingChartFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelSeatingChartFilterInput | null> | null;
  or?: Array<ModelSeatingChartFilterInput | null> | null;
  not?: ModelSeatingChartFilterInput | null;
};

export type ModelSeatFilterInput = {
  id?: ModelIDInput | null;
  section?: ModelStringInput | null;
  row?: ModelStringInput | null;
  number?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSeatFilterInput | null> | null;
  or?: Array<ModelSeatFilterInput | null> | null;
  not?: ModelSeatFilterInput | null;
};

export type CreateTicketProviderMutation = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTicketProviderMutation = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTicketProviderMutation = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProductionMutation = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductionMutation = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductionMutation = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSeatingChartMutation = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSeatingChartMutation = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSeatingChartMutation = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSeatMutation = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSeatMutation = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSeatMutation = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTicketProviderQuery = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTicketProvidersQuery = {
  __typename: "ModelTicketProviderConnection";
  items: Array<{
    __typename: "TicketProvider";
    id: string;
    name: string;
    productions: {
      __typename: "ModelProductionConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProductionQuery = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProductionsQuery = {
  __typename: "ModelProductionConnection";
  items: Array<{
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetVenueQuery = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListVenuesQuery = {
  __typename: "ModelVenueConnection";
  items: Array<{
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSeatingChartQuery = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSeatingChartsQuery = {
  __typename: "ModelSeatingChartConnection";
  items: Array<{
    __typename: "SeatingChart";
    id: string;
    name: string;
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    seats: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSeatQuery = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ListSeatsQuery = {
  __typename: "ModelSeatConnection";
  items: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTicketProviderSubscription = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTicketProviderSubscription = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTicketProviderSubscription = {
  __typename: "TicketProvider";
  id: string;
  name: string;
  productions: {
    __typename: "ModelProductionConnection";
    items: Array<{
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProductionSubscription = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductionSubscription = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductionSubscription = {
  __typename: "Production";
  id: string;
  name: string;
  producer: string | null;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  production: {
    __typename: "Production";
    id: string;
    name: string;
    producer: string | null;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  datetime: string | null;
  seats: {
    __typename: "ModelSeatConnection";
    items: Array<{
      __typename: "Seat";
      id: string;
      section: string;
      row: string;
      number: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  maxAdmission: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  events: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSeatingChartSubscription = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSeatingChartSubscription = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSeatingChartSubscription = {
  __typename: "SeatingChart";
  id: string;
  name: string;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    events: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  seats: Array<{
    __typename: "Seat";
    id: string;
    section: string;
    row: string;
    number: string;
    event: {
      __typename: "Event";
      id: string;
      name: string;
      datetime: string | null;
      maxAdmission: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSeatSubscription = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSeatSubscription = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSeatSubscription = {
  __typename: "Seat";
  id: string;
  section: string;
  row: string;
  number: string;
  event: {
    __typename: "Event";
    id: string;
    name: string;
    production: {
      __typename: "Production";
      id: string;
      name: string;
      producer: string | null;
      createdAt: string;
      updatedAt: string;
    };
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    datetime: string | null;
    seats: {
      __typename: "ModelSeatConnection";
      nextToken: string | null;
    } | null;
    maxAdmission: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTicketProvider(
    input: CreateTicketProviderInput,
    condition?: ModelTicketProviderConditionInput
  ): Promise<CreateTicketProviderMutation> {
    const statement = `mutation CreateTicketProvider($input: CreateTicketProviderInput!, $condition: ModelTicketProviderConditionInput) {
        createTicketProvider(input: $input, condition: $condition) {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTicketProviderMutation>response.data.createTicketProvider;
  }
  async UpdateTicketProvider(
    input: UpdateTicketProviderInput,
    condition?: ModelTicketProviderConditionInput
  ): Promise<UpdateTicketProviderMutation> {
    const statement = `mutation UpdateTicketProvider($input: UpdateTicketProviderInput!, $condition: ModelTicketProviderConditionInput) {
        updateTicketProvider(input: $input, condition: $condition) {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTicketProviderMutation>response.data.updateTicketProvider;
  }
  async DeleteTicketProvider(
    input: DeleteTicketProviderInput,
    condition?: ModelTicketProviderConditionInput
  ): Promise<DeleteTicketProviderMutation> {
    const statement = `mutation DeleteTicketProvider($input: DeleteTicketProviderInput!, $condition: ModelTicketProviderConditionInput) {
        deleteTicketProvider(input: $input, condition: $condition) {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTicketProviderMutation>response.data.deleteTicketProvider;
  }
  async CreateProduction(
    input: CreateProductionInput,
    condition?: ModelProductionConditionInput
  ): Promise<CreateProductionMutation> {
    const statement = `mutation CreateProduction($input: CreateProductionInput!, $condition: ModelProductionConditionInput) {
        createProduction(input: $input, condition: $condition) {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductionMutation>response.data.createProduction;
  }
  async UpdateProduction(
    input: UpdateProductionInput,
    condition?: ModelProductionConditionInput
  ): Promise<UpdateProductionMutation> {
    const statement = `mutation UpdateProduction($input: UpdateProductionInput!, $condition: ModelProductionConditionInput) {
        updateProduction(input: $input, condition: $condition) {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductionMutation>response.data.updateProduction;
  }
  async DeleteProduction(
    input: DeleteProductionInput,
    condition?: ModelProductionConditionInput
  ): Promise<DeleteProductionMutation> {
    const statement = `mutation DeleteProduction($input: DeleteProductionInput!, $condition: ModelProductionConditionInput) {
        deleteProduction(input: $input, condition: $condition) {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductionMutation>response.data.deleteProduction;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreateVenue(
    input: CreateVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<CreateVenueMutation> {
    const statement = `mutation CreateVenue($input: CreateVenueInput!, $condition: ModelVenueConditionInput) {
        createVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVenueMutation>response.data.createVenue;
  }
  async UpdateVenue(
    input: UpdateVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<UpdateVenueMutation> {
    const statement = `mutation UpdateVenue($input: UpdateVenueInput!, $condition: ModelVenueConditionInput) {
        updateVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVenueMutation>response.data.updateVenue;
  }
  async DeleteVenue(
    input: DeleteVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<DeleteVenueMutation> {
    const statement = `mutation DeleteVenue($input: DeleteVenueInput!, $condition: ModelVenueConditionInput) {
        deleteVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVenueMutation>response.data.deleteVenue;
  }
  async CreateSeatingChart(
    input: CreateSeatingChartInput,
    condition?: ModelSeatingChartConditionInput
  ): Promise<CreateSeatingChartMutation> {
    const statement = `mutation CreateSeatingChart($input: CreateSeatingChartInput!, $condition: ModelSeatingChartConditionInput) {
        createSeatingChart(input: $input, condition: $condition) {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSeatingChartMutation>response.data.createSeatingChart;
  }
  async UpdateSeatingChart(
    input: UpdateSeatingChartInput,
    condition?: ModelSeatingChartConditionInput
  ): Promise<UpdateSeatingChartMutation> {
    const statement = `mutation UpdateSeatingChart($input: UpdateSeatingChartInput!, $condition: ModelSeatingChartConditionInput) {
        updateSeatingChart(input: $input, condition: $condition) {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSeatingChartMutation>response.data.updateSeatingChart;
  }
  async DeleteSeatingChart(
    input: DeleteSeatingChartInput,
    condition?: ModelSeatingChartConditionInput
  ): Promise<DeleteSeatingChartMutation> {
    const statement = `mutation DeleteSeatingChart($input: DeleteSeatingChartInput!, $condition: ModelSeatingChartConditionInput) {
        deleteSeatingChart(input: $input, condition: $condition) {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSeatingChartMutation>response.data.deleteSeatingChart;
  }
  async CreateSeat(
    input: CreateSeatInput,
    condition?: ModelSeatConditionInput
  ): Promise<CreateSeatMutation> {
    const statement = `mutation CreateSeat($input: CreateSeatInput!, $condition: ModelSeatConditionInput) {
        createSeat(input: $input, condition: $condition) {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSeatMutation>response.data.createSeat;
  }
  async UpdateSeat(
    input: UpdateSeatInput,
    condition?: ModelSeatConditionInput
  ): Promise<UpdateSeatMutation> {
    const statement = `mutation UpdateSeat($input: UpdateSeatInput!, $condition: ModelSeatConditionInput) {
        updateSeat(input: $input, condition: $condition) {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSeatMutation>response.data.updateSeat;
  }
  async DeleteSeat(
    input: DeleteSeatInput,
    condition?: ModelSeatConditionInput
  ): Promise<DeleteSeatMutation> {
    const statement = `mutation DeleteSeat($input: DeleteSeatInput!, $condition: ModelSeatConditionInput) {
        deleteSeat(input: $input, condition: $condition) {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSeatMutation>response.data.deleteSeat;
  }
  async GetTicketProvider(id: string): Promise<GetTicketProviderQuery> {
    const statement = `query GetTicketProvider($id: ID!) {
        getTicketProvider(id: $id) {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTicketProviderQuery>response.data.getTicketProvider;
  }
  async ListTicketProviders(
    filter?: ModelTicketProviderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTicketProvidersQuery> {
    const statement = `query ListTicketProviders($filter: ModelTicketProviderFilterInput, $limit: Int, $nextToken: String) {
        listTicketProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            productions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTicketProvidersQuery>response.data.listTicketProviders;
  }
  async GetProduction(id: string): Promise<GetProductionQuery> {
    const statement = `query GetProduction($id: ID!) {
        getProduction(id: $id) {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductionQuery>response.data.getProduction;
  }
  async ListProductions(
    filter?: ModelProductionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductionsQuery> {
    const statement = `query ListProductions($filter: ModelProductionFilterInput, $limit: Int, $nextToken: String) {
        listProductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductionsQuery>response.data.listProductions;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetVenue(id: string): Promise<GetVenueQuery> {
    const statement = `query GetVenue($id: ID!) {
        getVenue(id: $id) {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVenueQuery>response.data.getVenue;
  }
  async ListVenues(
    filter?: ModelVenueFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVenuesQuery> {
    const statement = `query ListVenues($filter: ModelVenueFilterInput, $limit: Int, $nextToken: String) {
        listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVenuesQuery>response.data.listVenues;
  }
  async GetSeatingChart(id: string): Promise<GetSeatingChartQuery> {
    const statement = `query GetSeatingChart($id: ID!) {
        getSeatingChart(id: $id) {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSeatingChartQuery>response.data.getSeatingChart;
  }
  async ListSeatingCharts(
    filter?: ModelSeatingChartFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSeatingChartsQuery> {
    const statement = `query ListSeatingCharts($filter: ModelSeatingChartFilterInput, $limit: Int, $nextToken: String) {
        listSeatingCharts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            seats {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSeatingChartsQuery>response.data.listSeatingCharts;
  }
  async GetSeat(id: string): Promise<GetSeatQuery> {
    const statement = `query GetSeat($id: ID!) {
        getSeat(id: $id) {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSeatQuery>response.data.getSeat;
  }
  async ListSeats(
    filter?: ModelSeatFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSeatsQuery> {
    const statement = `query ListSeats($filter: ModelSeatFilterInput, $limit: Int, $nextToken: String) {
        listSeats(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSeatsQuery>response.data.listSeats;
  }
  OnCreateTicketProviderListener: Observable<
    OnCreateTicketProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTicketProvider {
        onCreateTicketProvider {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTicketProviderSubscription>;

  OnUpdateTicketProviderListener: Observable<
    OnUpdateTicketProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTicketProvider {
        onUpdateTicketProvider {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTicketProviderSubscription>;

  OnDeleteTicketProviderListener: Observable<
    OnDeleteTicketProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTicketProvider {
        onDeleteTicketProvider {
          __typename
          id
          name
          productions {
            __typename
            items {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTicketProviderSubscription>;

  OnCreateProductionListener: Observable<
    OnCreateProductionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduction {
        onCreateProduction {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProductionSubscription>;

  OnUpdateProductionListener: Observable<
    OnUpdateProductionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduction {
        onUpdateProduction {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProductionSubscription>;

  OnDeleteProductionListener: Observable<
    OnDeleteProductionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduction {
        onDeleteProduction {
          __typename
          id
          name
          producer
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProductionSubscription>;

  OnCreateEventListener: Observable<OnCreateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateEventSubscription>;

  OnUpdateEventListener: Observable<OnUpdateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateEventSubscription>;

  OnDeleteEventListener: Observable<OnDeleteEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          name
          production {
            __typename
            id
            name
            producer
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          datetime
          seats {
            __typename
            items {
              __typename
              id
              section
              row
              number
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          maxAdmission
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteEventSubscription>;

  OnCreateVenueListener: Observable<OnCreateVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateVenue {
        onCreateVenue {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateVenueSubscription>;

  OnUpdateVenueListener: Observable<OnUpdateVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVenue {
        onUpdateVenue {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateVenueSubscription>;

  OnDeleteVenueListener: Observable<OnDeleteVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVenue {
        onDeleteVenue {
          __typename
          id
          name
          events {
            __typename
            items {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteVenueSubscription>;

  OnCreateSeatingChartListener: Observable<
    OnCreateSeatingChartSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSeatingChart {
        onCreateSeatingChart {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateSeatingChartSubscription>;

  OnUpdateSeatingChartListener: Observable<
    OnUpdateSeatingChartSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSeatingChart {
        onUpdateSeatingChart {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateSeatingChartSubscription>;

  OnDeleteSeatingChartListener: Observable<
    OnDeleteSeatingChartSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSeatingChart {
        onDeleteSeatingChart {
          __typename
          id
          name
          venue {
            __typename
            id
            name
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          seats {
            __typename
            id
            section
            row
            number
            event {
              __typename
              id
              name
              datetime
              maxAdmission
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteSeatingChartSubscription>;

  OnCreateSeatListener: Observable<OnCreateSeatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSeat {
        onCreateSeat {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateSeatSubscription>;

  OnUpdateSeatListener: Observable<OnUpdateSeatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSeat {
        onUpdateSeat {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateSeatSubscription>;

  OnDeleteSeatListener: Observable<OnDeleteSeatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSeat {
        onDeleteSeat {
          __typename
          id
          section
          row
          number
          event {
            __typename
            id
            name
            production {
              __typename
              id
              name
              producer
              createdAt
              updatedAt
            }
            venue {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            datetime
            seats {
              __typename
              nextToken
            }
            maxAdmission
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteSeatSubscription>;
}
