"use client";
import React, { useState } from 'react';
import { Button, Textarea } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export const EmailContentInputs = () => {
    const [emailBody, setEmailBody] = useState("");
    const [responseOutput, setResponseOutput] = useState("");
    const [isPhishing, setIsPhishing] = useState(false);

    const checkEmailContent = async () => {
        try {
            const formData = new FormData();
            formData.append("emailBody", emailBody);

            const response = await fetch("http://localhost:5000/api/email/email-body-phishing", {
                method: "POST",
                body: formData,
            });
            
            if (response.ok) {
                const data = await response.json(); // assuming the response is JSON
                setResponseOutput(data.phishing === 0 ? "Not Phishing" : "Phishing");
                setIsPhishing(data.phishing === 0);
            } else {
                console.error("Failed to fetch:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Card className="p-10">
                <CardHeader className="pb-0 p-2 px-2">
                    <h1 className="font-bold text-large text-bold">
                        Input the email body that you want to check:
                    </h1>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-col gap-4 text-danger">
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Textarea
                                    label="Email body"
                                    rows={4}
                                    value={emailBody}
                                    onChange={(e) => setEmailBody(e.target.value)}
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
                    <span style={{ color: isPhishing ? "red" : "green" }}>{responseOutput}</span>
                </div>
            </Card>
        </div>
    );
};
