import React from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { Input } from './input';
import { Label } from './label';

interface TimeRangePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function TimeRangePicker({ value, onChange, placeholder = "9:00 - 17:00", className }: TimeRangePickerProps) {
  const [startTime, setStartTime] = React.useState<string>('');
  const [endTime, setEndTime] = React.useState<string>('');

  React.useEffect(() => {
    if (value) {
      const parts = value.split(' - ');
      if (parts.length === 2) {
        setStartTime(parts[0]);
        setEndTime(parts[1]);
      }
    }
  }, [value]);

  const handleStartChange = (time: string | null) => {
    const newStart = time || '';
    setStartTime(newStart);
    const newValue = `${newStart} - ${endTime}`;
    onChange(newValue);
  };

  const handleEndChange = (time: string | null) => {
    const newEnd = time || '';
    setEndTime(newEnd);
    const newValue = `${startTime} - ${newEnd}`;
    onChange(newValue);
  };

  return (
    <div className={`flex items-center gap-1 react-time-picker ${className}`}>
      <TimePicker
        value={startTime}
        onChange={handleStartChange}
        disableClock={true}
        format="HH:mm"
        className="w-20"
      />
      <span className="text-xs">-</span>
      <TimePicker
        value={endTime}
        onChange={handleEndChange}
        disableClock={true}
        format="HH:mm"
        className="w-20"
      />
    </div>
  );
}