import {useEffect, useState} from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const useFormatedDate = date => {
  const [formatedDate, setDate] = useState('');

  useEffect(() => {
    const verifyZero = (n: number) => {
      return n < 10 ? `0${n}` : n.toString();
    };

    setDate(
      `${verifyZero(date.getDay())}, ${
        months[date.getMonth()]
      } ${date.getFullYear()}`,
    );
  }, [date]);

  return formatedDate;
};
