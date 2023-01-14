import { useEffect, useState } from "react";
import dayjs from "dayjs";

function useCountDown(targetDate: any) {
  const countDownDate = dayjs(targetDate);
  const [countDown, setCountDown] = useState<any>(countDownDate);

  console.log(countDown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate.diff(dayjs().format()));
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate, targetDate, countDown]);
  return getReturnValues(countDown);
}

function getReturnValues(countDown: any) {
  //calculate the time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export { useCountDown };
