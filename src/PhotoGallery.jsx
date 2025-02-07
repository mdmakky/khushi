import React, { useState } from 'react';

function PhotoGallery() {
    const photos = [
        { src: 'khushi15.jpg' },
        { src: 'khushi2.jpg' },
        { src: 'khushi14.jpg' },
        { src: 'khushi4.jpg' },
        { src: 'khushi5.jpg' },
        { src: 'khushi6.jpg' },
        { src: 'khushi7.jpg' },
        { src: 'khushi8.jpg' },
        { src: 'khushi9.jpg' },
        { src: 'khushi10.jpg' },
        { src: 'khushi11.jpg' },
        { src: 'khushi16.jpg' },
    ];

    const [clickedImage, setClickedImage] = useState(null);

    const handleImageClick = (index) => {
        setClickedImage(index === clickedImage ? null : index); // Toggle on click
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-purple-600 flex justify-center items-center py-10 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"></div>
            <div className="relative space-y-8 px-6 py-8 max-w-6xl w-full bg-black bg-opacity-50 rounded-xl backdrop-blur-lg">
                <h2 className="text-center text-5xl font-serif text-white mb-8 animate-fadeIn">Our Beautiful Moments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group transition duration-500 ease-in-out cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        >
                            <div
                                className={`relative w-80 h-80 rounded-xl shadow-2xl overflow-hidden ${clickedImage === index ? 'scale-110 rotate-2' : ''} transition-all duration-500`}
                            >
                                <img
                                    src={photo.src}
                                    alt={`photo-${index}`}
                                    className="w-full h-full object-cover transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50 rounded-xl"></div>
                            </div>
                            <p className="mt-4 text-center text-2xl text-white font-serif italic transition-all duration-500 opacity-0 group-hover:opacity-100">
                                {photo.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;
