import { Dispatch, SetStateAction } from 'react';

export type FormValues = {
  data: string;
  showInDays: boolean;
  showInYears: boolean;
};

export type ResultProps = {
  values: FormValues;
  setResult: Dispatch<SetStateAction<string[]>>;
};

export type useCalculateTimeDifferenceFn = () => {
  handleResult: (props: ResultProps) => void;
};
