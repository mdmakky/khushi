import React, { useState, useEffect } from 'react';

const RoseAnimation = () => {
  const [bloom, setBloom] = useState(false);

  useEffect(() => {
    setBloom(true);
  }, []);
useEffect(() => {
    const interval = setInterval(() => {
        setBloom(false);
        setTimeout(() => {
            setBloom(true);
        }, 2000);
    }, 2000); // 10 seconds for animation + 2 seconds delay

    return () => clearInterval(interval);
}, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-purple-600 relative overflow-hidden">
      {/* Background Music */}
      <audio
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full opacity-30"
        src=".asset/song.mp3"
      />

      {/* Love Confetti (In the background) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="confetti">
          <div className="particle bg-pink-200 w-3 h-3 rounded-full absolute"></div>
          <div className="particle bg-white w-3 h-3 rounded-full absolute"></div>
        </div>
      </div>

      <div className="relative w-64 h-64 animate-fadeIn z-10">
        {/* Rose Center */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-16 h-16 bg-yellow-300 rounded-full z-10 shadow-xl"></div>
        </div>

        {/* Petals */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-full h-full origin-bottom transition-transform duration-1000 ${bloom ? 'scale-100' : 'scale-0'}`}
            style={{
              transform: `rotate(${index * 30}deg)`,
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-24 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full origin-bottom transform -translate-y-4 rotate-12 shadow-lg" />
          </div>
        ))}
      </div>

      {/* Romantic Message */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
  <h1 className="text-4xl font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400 animate-fadeInUp glowing-text">
    For You 💖
  </h1>
  <p className="text-lg font-light animate-fadeInUp animate-delay-200">
    Every petal blooms with all my love for you...
  </p>
</div>



      {/* Animated Heart */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-heart z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12 text-white"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 animate-floatLetter text-white font-serif text-3xl z-30">
  <div className="relative inline-block bg-gradient-to-r from-pink-400 to-red-500 px-6 py-4 rounded-lg shadow-2xl glow-effect">
    <p className="font-light italic text-center">
      "To Khushi, With All My Love and Affection" 💖"
    </p>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl animate-heartBeat">
      💕
    </div>
  </div>
</div>


        {/* Floating Hearts */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-red-500 rounded-full animate-floatHeart"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particles {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-50px) scale(1.5);
          }
        }

        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes floatLetter {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatHeart {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-particles {
          animation: particles 5s infinite ease-in-out;
        }

        .animate-heart {
          animation: heartBeat 1.5s infinite;
        }

        .animate-floatLetter {
          animation: floatLetter 3s ease-in-out infinite;
        }

        .animate-floatHeart {
          animation: floatHeart 10s linear infinite;
        }

        .confetti {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .particle {
          animation: particles 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RoseAnimation;
