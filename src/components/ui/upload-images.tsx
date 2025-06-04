"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"
type UploadImagesProps = {
    onImageChange?: (file: File) => void;
};

export default function UploadImages({ onImageChange }: UploadImagesProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            if (selectedFile.type.startsWith('image/')) {
                setPreviewUrl(URL.createObjectURL(selectedFile));
                if (onImageChange) onImageChange(selectedFile);
            } else {
                setPreviewUrl(null);
            }
        } else {
            setPreviewUrl(null);
        }
    };

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <Card className="border border-gray-200 shadow-none">
            <CardHeader>
                <CardTitle>Upload a File</CardTitle>
                <CardDescription>Select a file to upload and click the submit button.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        {previewUrl ? (
                            <Image
                                src={previewUrl}
                                alt={file?.name || 'preview'}
                                fill
                                className="object-cover rounded shadow border border-gray-200"
                                style={{ zIndex: 1 }}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadIcon className="w-10 h-10 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                            </div>
                        )}
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                    </label>
                </div>
                {file && (
                    <div className="flex flex-col items-center mt-4">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}


function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}