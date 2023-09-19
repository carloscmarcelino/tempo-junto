import { ResultProps, useCalculateTimeDifferenceFn } from '@/types';
import { useCallback } from 'react';

export const useCalculateTimeDifference: useCalculateTimeDifferenceFn = () => {
  const handleResult = useCallback(({ values, setResult }: ResultProps) => {
    const inputDate = new Date(values.data);
    const now = new Date();

    const differenceInTime = now.getTime() - inputDate.getTime();

    let remaining = differenceInTime;

    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerHour = 1000 * 60 * 60;
    const msPerMinute = 1000 * 60;
    const msPerSecond = 1000;

    const days = Math.floor(remaining / msPerDay);
    remaining %= msPerDay;

    const hours = Math.floor(remaining / msPerHour);
    remaining %= msPerHour;

    const minutes = Math.floor(remaining / msPerMinute);
    remaining %= msPerMinute;

    const seconds = Math.floor(remaining / msPerSecond);

    const resultArray: string[] = [];

    if (values.showInDays) {
      resultArray.push(
        `Se passaram ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`,
      );
    }

    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);

    if (values.showInYears) {
      if (years >= 1) {
        if (months > 0) {
          resultArray.push(`Se passaram ${years} anos e ${months} meses.`);
        } else {
          resultArray.push(`Se passaram ${years} anos.`);
        }
      } else if (months >= 1) {
        resultArray.push(`Se passaram ${months} meses.`);
      }
    }

    setResult(resultArray);
  }, []);

  return { handleResult };
};
