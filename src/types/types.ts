import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { Key, ReactNode } from "react";

export type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

export type TRoute_items = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoute_items[];
};
export type TFlattened_Route = {
  path: string;
  element: ReactNode;
};

type TError_Source = {
  path: string;
  message: string;
};
export type TError = {
  status: number;
  data: {
    success: false;
    message: string;
    errorSource: TError_Source[];
    stack?: string | null;
  };
};


export type TFaculty = {
  _id: string;
  name: string;
};


export type TSemester = {
  _id: string;
  name: string;
  code: string;
  year: string;
  start_month: string;
  end_month: string;
  createdAt: string;
  updatedAt: string;
};

export type TResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  error?: TError;
};

export type TParamItems={
  name: string;
  value: boolean | Key;
}

export type TResponse_Redux<T> = TResponse<T> & BaseQueryApi;
