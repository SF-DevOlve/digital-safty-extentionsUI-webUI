"use client"
import React, { useState } from 'react';
import { Button, Textarea } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export const EmailContentInputs = () => {
    const [inputData, setInputData] = useState({
        emailContent: "",
    });

    const [responseOutput, setResponseOutput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    // Fetch a request to the backend
    const checkEmailContent = async () => {
        const response = await fetch("http://localhost:5000/check-email-content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
        });
        const data = await response.json();
        setResponseOutput(data); // Use setState to update responseOutput
        console.log(data);
         
    };

    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Card className="p-10">
                <CardHeader className="pb-0 p-2 px-2">
                    <h1 className="font-bold text-large text-bold">
                        Input the email content that you want to check:
                    </h1>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-col gap-4 text-danger">
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Textarea
                                    label="Email content"
                                    rows={4}
                                    name="emailContent"
                                    value={inputData.emailContent}
                                    onChange={(e) => handleChange(e as unknown as React.ChangeEvent<HTMLTextAreaElement>)}
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div className="flex flex-col items-center justify-center mt-5">
                    <Button color="danger" variant="bordered" onClick={checkEmailContent}>
                        Check
                    </Button>
                </div>
                <div className="flex items-center justify-center mt-5 p-5">
                    {responseOutput}
                </div>
            </Card>
        </div>
    );
};