import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange, ...attrs }: InputProps) {
  return (
    <input
      value={value}
      {...attrs}
      className="w-full h-14 pl-10 pr-3 rounded outline-none opacity-90 hover-focus:opacity-100 focus:shadow"
      onChange={onChange}
    />
  );
}
