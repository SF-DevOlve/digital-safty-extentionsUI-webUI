"use client";
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export const UrlInputs = () => {
    const [url, setUrl] = useState("");

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const handleCheckUrl = async () => {
        if (url.trim() !== "") {
            try {
                // Make a request to the backend
                const response = await fetch("http://localhost:5000/check-url", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ url }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log("Response:", data);
                    // Handle response data here
                } else {
                    console.error("Failed to fetch:", response.statusText);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("No URL entered.");
        }
    };
    

    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Card className="p-10">
                <CardHeader className="pb-0 p-2 px-2">
                    <h1 className="font-bold text-large text-bold">
                        Input the URL that you want to check:
                    </h1>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-col gap-4 text-danger">
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Input
                                    type="text"
                                    label="URL"
                                    value={url}
                                    onChange={handleUrlChange}
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div className="flex flex-col items-center justify-center mt-5">
                    <Button color="danger" variant="bordered" onClick={handleCheckUrl}>
                        Check
                    </Button>
                </div>
            </Card>
        </div>
    );
};
