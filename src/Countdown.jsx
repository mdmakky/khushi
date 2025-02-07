import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Set the next Eid date (example: Eid al-Fitr on April 10, 2025)
    const countdownDate = new Date('2025-03-31T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft('Happy Rose Day! 💖');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days} days ${hours} hours left until we meet. ❤️`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-between items-center py-10"
      style={{
        backgroundImage: `url('/khushi1.jpg')`, // Use the same background image
        backgroundSize: 'cover', // Ensure the image covers the entire screen
        backgroundPosition: 'center', // Center the image
        backgroundAttachment: 'fixed', // Keep the background fixed during scroll
      }}
    >
      {/* Main content */}
      <div className="text-center space-y-8 px-8 py-10 bg-black bg-opacity-50 rounded-xl backdrop-blur-lg mb-10 mt-auto">
        <h2 className="text-4xl font-serif text-pink-600 animate-fadeIn font-bold mb-4">
          Countdown to our beautiful moment
        </h2>
        <p className="text-3xl text-white font-light animate-fadeInUp text-shadow">
          {timeLeft}
        </p>
        <p className="text-2xl text-white font-light animate-fadeInUp text-shadow mt-4">
          Every second brings us closer to our magical day. 💖
        </p>
      </div>

      {/* Optional: Additional content can go here if needed */}
    </div>
  );
};

export default Countdown;
