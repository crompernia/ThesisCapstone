"use client";

import * as React from "react";

export function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) {
    return (
      <div className="text-right mb-4 text-base font-medium text-gray-700 mt-1">
        Loading...
      </div>
    );
  }

  const formattedTime = currentTime.toLocaleString();

  return (
    <div className="text-right mb-4 text-base font-medium text-gray-700 mt-1">
      {formattedTime}
    </div>
  );
}