import React from 'react';

const DownloadCVButton = () => {
    const pdfUrl = '/MyCV.pdf';

    return (
        <a
            href={pdfUrl}
            download
            className="px-4 py-2 bg-[#ec6e59] text-white rounded"
        >
            Download CV
        </a>
    );
};

export default DownloadCVButton;

