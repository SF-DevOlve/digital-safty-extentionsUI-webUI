import React from 'react';
import { Button, Textarea } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export const EmailContentInputs = () => {
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
                                <Textarea label="Email content" rows={4} />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div className="flex flex-col items-center justify-center mt-5">
                    <Button color="danger" variant="bordered">
                        Check
                    </Button>
                </div>
            </Card>
        </div>
    );
}
