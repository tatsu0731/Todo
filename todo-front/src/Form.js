import React, { useState } from 'react';
import API from './constants';

export default function Form({ addTodoItem }) {
    const [formData, setFormData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData) return;
        addTodoItem(formData);
        setFormData('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="新しいタスクを追加"
                    value={formData}
                    onChange={(e) => setFormData(e.target.value)}
                    className="border-blue-400 border py-1 px-2 rounded-sm"
                />
                <button
                    type='submit'
                    className="ml-2 font-black bg-blue-400 py-1 px-8 text-white rounded-sm">
                    追加
                </button>
            </form>
        </div>
    )
};
