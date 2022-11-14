export enum AuthTypes {
  AUTHORIZATION = "AUTHORIZATION",
  REGISTRATION = "REGISTRATION",
}

export interface AuthProps {
  setOpen: (open: boolean) => void;
}
