import React, { useState, useRef } from 'react';
import  { AiOutlineCloudUpload , AiOutlineClose, AiOutlineFileExcel} from "react-icons/ai";

const CustomerData = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.name.endsWith('.csv')) {
            setFile(selectedFile);
            setUploadStatus('success');
        } else {
            setUploadStatus('error');
            alert('Please upload a CSV file');
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const droppedFile = event.dataTransfer.files[0];
            if (droppedFile.name.endsWith('.csv')) {
                setFile(droppedFile);
                setUploadStatus('success');
            } else {
                setUploadStatus('error');
                alert('Please upload a CSV file');
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleRemoveFile = () => {
        setFile(null);
        setUploadStatus('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleReUpload = () => {
        fileInputRef.current.click();
    };

    const handleZapierConnect = () => {
        // Logic to connect with Zapier would go here
        console.log('Connecting with Zapier...');
    };

    const handleNext = () => {
        // Logic for the next step would go here
        console.log('Proceeding to next step...');
        if (file) {
            console.log('File selected:', file.name, 'Size:', file.size, 'bytes');
        } else {
            console.log('No file selected, connecting with Zapier');
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + 'B';
        if (bytes < 1048576) return Math.round(bytes / 1024) + 'KB';
        return (bytes / 1048576).toFixed(1) + 'MB';
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-10">
                Import Customer Data: Sync with Zapier or Upload CSV
            </h1>

            <div className="space-y-8">
                {/* Zapier connection button */}
                <button
                    onClick={handleZapierConnect}
                    className="w-full py-3 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition duration-200 font-medium"
                >
                    Connect with Zapier
                </button>

                {/* Divider */}
                <div className="flex items-center">
                    <div className="flex-grow h-px bg-gray-200"></div>
                    <span className="px-4 text-gray-500">or</span>
                    <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                {/* CSV Upload Section */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    {!file ? (
                        <div
                            className="flex flex-col items-center justify-center space-y-4"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="p-4 rounded-full bg-blue-50">
                                <AiOutlineCloudUpload className="h-10 w-10 text-blue-500" />
                            </div>
                            <p className="text-gray-700 font-medium">Drag and drop files here</p>
                            <p className="text-gray-500">or</p>
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="py-3 px-6 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition duration-200 font-medium"
                            >
                                Click to Upload CSV File
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".csv"
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <AiOutlineFileExcel className="h-8 w-8 text-green-500" />
                                    <div>
                                        <p className="font-medium">{file.name}</p>
                                        <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={handleReUpload}
                                        className="text-blue-500 hover:text-blue-700 font-medium"
                                    >
                                        Re-upload
                                    </button>
                                    <button
                                        onClick={handleRemoveFile}
                                        className="p-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200"
                                    >
                                        <AiOutlineClose className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {uploadStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-600 rounded-lg p-3 flex items-center justify-center">
                                    CSV File Uploaded Successfully!
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CustomerData;
