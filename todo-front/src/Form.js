import React, { useState } from 'react';
import API from './constants';

export default function Form() {
    // const [formData, setFormData] = useState({
    //     key1: '',
    // });

    // const handleChange = (e) => {
    //     const { title } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [title]: value,
    //     }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = {
    //         title: e.target.title.value,
    //     };

    //     try {
    //         const res = await fetch(API, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         if (!res.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //     } catch (error) {
    //         console.error('There was a problem with your fetch operation', error);
    //     }
    // };

    return (
        <div>
            <form>
                <input placeholder="新しいタスクを追加" className="border-blue-400 border py-1 px-2 rounded-sm"></input>
                <button type='submit' className="ml-2 font-black bg-blue-400 py-1 px-8 text-white rounded-sm">追加</button>
            </form>
        </div>
    )
};
