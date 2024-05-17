"use client";
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";


export const UrlInputs = () => {
    const [url, setUrl] = useState("");
    const [responseOutput, setResponseOutput] = useState("");
    const [isPhishing, setIsPhishing] = useState(false);
    const [isDNSPhishing, setIsDNSPhishing] = useState(false);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const localDNSResolution = async (domain: string) => {
        try {
            const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
            const data = await response.json();
            if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
                return data.Answer[0].data;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error resolving DNS:", error);
            return null;
        }
    }

    const handleCheckUrl = async () => {
        if (url.trim() !== "") {
            try {
                const formData = new FormData();
                
                const ip = await localDNSResolution(url);
                formData.append("url", url);
                formData.append("localDnsResolution", ip);

                const response = await fetch("http://127.0.0.1:5000/api/url/", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsPhishing(data.phishing === 1);
                    setIsDNSPhishing(data.dnsPhishing === 1);
                    setResponseOutput(data.phishing === 1 ? "Phishing" : "Not Phishing");
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
                <div className="flex items-center justify-center mt-5 p-5">
                    <span style={{ color: isPhishing ? "red" : "green" }}>{responseOutput}</span>
                    <span style={{ color: isDNSPhishing ? "red" : "green" }}></span>
                </div>
            </Card>
        </div>
    );
};
