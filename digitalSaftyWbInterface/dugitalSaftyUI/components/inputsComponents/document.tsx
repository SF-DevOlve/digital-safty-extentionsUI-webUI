import React from 'react';
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export const DocumentInputs = () => {
    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Card className="p-10">
                <CardHeader className="pb-0 p-2 px-2">
                    <h1 className="font-bold text-large text-bold">
                        Input the document content that you want to check:
                    </h1>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                                    <div className="mb-3">
                    <label
                        
                        className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
                        >Large file input example</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                        id="formFileLg"
                        type="file" />
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
