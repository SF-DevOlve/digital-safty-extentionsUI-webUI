"use client";

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { ReactMic } from 'react-mic';
import { MdMic, MdMicOff } from 'react-icons/md';
import { Selection } from '@react-types/shared/src/selection'; // Import Selection type

export const VishingDetection = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('arabe');
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);

    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["Choisi une langue"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    function startRecording() {
        setIsRecording(true);
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = function (event) {
                    chunksRef.current.push(event.data);
                };

                mediaRecorder.onstop = function () {
                    const blob = new Blob(chunksRef.current, { 'type': 'audio/wav' });
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        if (typeof reader.result === 'string') {
                            const base64data = reader.result.split(',')[1];
                            sendData(base64data);
                        } else {
                            console.error('Reader result is not a string.');
                        }
                    };
                    reader.readAsDataURL(blob);
                    chunksRef.current = [];
                };

                mediaRecorder.start();
                console.log('Enregistrement audio commencé');
            })
            .catch(function (err) {
                console.error('Impossible d\'accéder au microphone: ', err);
            });
    }

    function stopRecording() {
        setIsRecording(false);
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            console.log('Enregistrement audio arrêté');
        } else {
            console.warn('MediaRecorder is not defined.');
        }
    }

    function sendData(base64data: any) {
        const data = {
            base64data: base64data,
            provider: 'google',
            langue: selectedLanguage,
        };

        fetch('http://localhost:5000/voicebot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Réponse de l\'API backend:', data);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi des données:', error);
            });
    }

    const handleSelectionChange = (keys: Selection) => {
        setSelectedKeys(keys);
    };

    return (
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Card className="p-10">
                <CardBody className="overflow-visible py-2">
                    <div className="flex flex-col gap-4 text-danger">
                        <div className="flex items-center justify-center">
                            <Button className="rounded-full" color={isRecording ? 'secondary' : 'danger'} onClick={isRecording ? stopRecording : startRecording}>
                                {isRecording ? <MdMicOff /> : <MdMic />}
                            </Button>
                        </div>
                        <div className='flex items-center text-center justify-center' style={{ display: 'grid', placeItems: 'center', marginTop: '-20px' }}>
                            <ReactMic
                                record={isRecording}
                                onStop={stopRecording}
                                onData={() => { }}
                                mimeType="audio/wav"
                                visualSetting="sinewave"
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="bordered">
                                        {selectedValue}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={handleSelectionChange}
                                >
                                    <DropdownItem key="Arabe" shortcut="AR">
                                        Arabe
                                    </DropdownItem>
                                    <DropdownItem key="Francais" shortcut="FR">
                                        Francais
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
