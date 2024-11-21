/* eslint-disable @typescript-eslint/no-explicit-any */
export type TInput = {
  label: string;
  type?: string;
  props?: {
    [key: string]: any;
  } ;
  placeholder?:string
};
