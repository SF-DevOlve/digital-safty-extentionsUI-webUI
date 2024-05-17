"use client";

import React from 'react';

export const Home = () => {
    const urls = [
        { url: 'http://malicious-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://another-bad-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://fake-bank.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://trusted-site.com', status: 'Non-Phishing', color: 'text-green-500' },
        { url: 'http://secure-site.com', status: 'Non-Phishing', color: 'text-green-500' },
        { url: 'http://malicious-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://another-bad-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://fake-bank.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://trusted-site.com', status: 'Non-Phishing', color: 'text-green-500' },
        { url: 'http://secure-site.com', status: 'Non-Phishing', color: 'text-green-500' },
        { url: 'http://malicious-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://another-bad-site.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://fake-bank.com', status: 'Phishing', color: 'text-red-500' },
        { url: 'http://trusted-site.com', status: 'Non-Phishing', color: 'text-green-500' },
        { url: 'http://secure-site.com', status: 'Non-Phishing', color: 'text-green-500' },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {urls.map((entry, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded shadow-sm">
                        <p className={`font-medium ${entry.color}`}>{entry.url}</p>
                        <p className={`${entry.color}`}>{entry.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;