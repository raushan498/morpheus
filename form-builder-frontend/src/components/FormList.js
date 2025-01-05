import React, { useEffect, useState } from 'react';
import { fetchForms } from '../api';

const FormList = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        fetchForms().then(response => setForms(response.data));
    }, []);

    return (
        <div>
            <h1>Forms</h1>
            <ul>
                {forms.map(form => (
                    <li key={form.id}>
                        <a href={`/forms/${form.id}`}>{form.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormList;
