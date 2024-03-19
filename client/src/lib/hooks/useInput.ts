import { useState } from 'react';

export default function useInput(
  initialValue: string,
  cb: (value: string) => void,
) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    cb(value);
  };

  return [value, onChange] as const;
}
