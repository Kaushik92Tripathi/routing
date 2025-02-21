import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Contact() {
    return (
        <div className="max-w-lg mx-auto p-8 text-center font-sans bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-6">If you have any questions, feel free to reach out to us!</p>
            <form className="flex flex-col items-center">
                <label className="w-full text-left text-gray-800 font-semibold mb-2">
                    Name:
                    <input type="text" name="name" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md" />
                </label>
                <label className="w-full text-left text-gray-800 font-semibold mb-2">
                    Email:
                    <input type="email" name="email" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md" />
                </label>
                <label className="w-full text-left text-gray-800 font-semibold mb-2">
                    Message:
                    <textarea name="message" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md h-32"></textarea>
                </label>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}
