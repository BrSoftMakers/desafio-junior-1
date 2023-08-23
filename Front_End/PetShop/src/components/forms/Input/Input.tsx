import React from "react";

import { Field, ErrorMessage } from "formik";

import styles from './Input.module.css';

interface InputPorps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    pattern?: string;
    required: boolean;
    errors?: string;
    touched?: boolean;
}

const Input: React.FC<InputPorps> = ({ label, name, type = 'text', placeholder, pattern, required, errors, touched }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>{label}:</label>
            <Field type={type} id={name} name={name} placeholder={placeholder} pattern={pattern} required className={`${styles.input} ${touched && errors && styles.errors}`} />
            <ErrorMessage name={name} component='div' className={styles.errorMsg} />
        </div>
    )
}

export default Input;