'use client';

import { forwardRef } from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (value: string) => void;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton({ label, value, checked, name, onChange }, ref) {
    return (
      <label 
        onClick={() => onChange(value)}
        style={{ cursor: 'pointer' }}
      >
        <div style={{
          background: checked ? 'rgba(0, 202, 252, 0.2)' : 'rgba(255, 255, 255, 0.1)',
          border: checked ? '1px solid #00CAFC' : '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '15px',
          padding: '4px 12px',
          fontFamily: 'Ubuntu',
          fontSize: '12px',
          color: checked ? '#00CAFC' : '#FFFFFF',
          fontWeight: '400',
          display: 'inline-block'
        }}>
          {label}
        </div>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          style={{ display: 'none' }}
        />
      </label>
    );
  }
);

export default RadioButton;

