'use client';

import { forwardRef } from 'react';
import Image from 'next/image';

interface FormFieldProps {
  label: string;
  icon?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps & React.InputHTMLAttributes<HTMLInputElement>>(
  function FormField({ label, icon, type = 'text', placeholder, error, required = false, className = '', ...props }, ref) {
    return (
      <div className="form-field mb-4">
        <label 
          className="block mb-2"
          style={{
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Ubuntu, sans-serif',
            lineHeight: '120%',
            color: '#FFFFFF'
          }}
        >
          <span className="flex items-center gap-2">
            {icon && (
              <Image 
                src={icon} 
                alt="" 
                width={16} 
                height={16}
                style={{ flexShrink: 0 }}
              />
            )}
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </span>
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full transition-all duration-200 ${error ? '' : ''} ${className}`}
          style={{
            height: '42px',
            borderRadius: '8px',
            border: error ? '1px solid #EF4444' : '1px solid rgba(100, 116, 139, 0.6)',
            background: 'rgba(15, 27, 43, 0.8)',
            padding: '0 14px',
            fontSize: '14px',
            fontWeight: '400',
            fontFamily: 'Ubuntu, sans-serif',
            color: '#FFFFFF',
            outline: 'none'
          }}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = '#00CAFC';
              e.target.style.boxShadow = '0 0 0 2px rgba(0, 202, 252, 0.2)';
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = 'rgba(100, 116, 139, 0.6)';
              e.target.style.boxShadow = 'none';
            }
          }}
          {...props}
        />
        {error && (
          <p 
            className="mt-2"
            style={{
              fontSize: '14px',
              fontWeight: '400',
              fontFamily: 'Ubuntu, sans-serif',
              color: '#EF4444'
            }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
export default FormField;
