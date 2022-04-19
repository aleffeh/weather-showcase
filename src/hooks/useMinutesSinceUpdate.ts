import {useEffect, useState} from 'react';

export const useMinutesSinceUpdate = (lastUpdateDate?: string) => {
  const [diffInMins, setDiff] = useState('0');

  useEffect(() => {
    const timeout = setInterval(() => {
      if (!lastUpdateDate) {
        return;
      }
      const today = new Date();
      const lastUpdate = new Date(lastUpdateDate);
      const diffMs = today.getTime() - lastUpdate.getTime();
      const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      setDiff(diffMins > 0 ? diffMins.toString() : '0');
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [lastUpdateDate]);

  return diffInMins;
};
