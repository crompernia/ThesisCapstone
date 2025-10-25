"use client";

import * as React from "react";

export function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleString();

  return (
    <div className="text-right mb-4 text-base font-medium text-gray-700 mt-1">
      {formattedTime}
    </div>
  );
}