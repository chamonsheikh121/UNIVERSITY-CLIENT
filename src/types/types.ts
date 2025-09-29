import type { ReactNode } from "react";



export type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

export type TRoute_items = {
  name  : string;
  path?: string;
  element?: ReactNode;
  children?: TRoute_items[];
};
export type TFlattened_Route = {
  path: string;
  element: ReactNode;
};