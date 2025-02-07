import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const LoveQuiz = () => {
const questions = [
    
    'আমাদের সম্পর্কের সবচেয়ে মিষ্টি মুহূর্ত কোনটা, যা তুমি কখনো ভুলবে না?',
    'যদি আমি তোমার জন্য কিছু এক্সট্রা করতে পারি, সেটা কী হবে?',
    'আমরা যদি একসঙ্গে একটা ভ্রমণ করতে যেতাম, কোথায় যেতে চাইতে?',
    'তুমি কি কখনো মনে করো, আমাদের মধ্যে কিছু এমন বিশেষ ব্যাপার রয়েছে, যা অন্যদের কাছে বোঝা সম্ভব নয়?',
    'আমাদের মধ্যে কোন এক মুহূর্ত ছিলো, যখন তোমার মনে হয়েছে "এই মানুষটা আসলেই আমার জন্যই তৈরি"?',
    'আমাদের সম্পর্কের মধ্যে কোন বিষয়টি তোমাকে সবচেয়ে বেশি সুখী করে?',
    'আমাকে যখন প্রচণ্ড রকমের মিস করো সেদিন তোমার মন কি চায়?',
    'যদি তুমি কোনো একটি সুপারপাওয়ার পেতে পারো, তাহলে কী নেবে এবং কেন?',
    'তুমি যদি একদিনের জন্য আমার মাথায় ঢুকতে পারো, তাহলে কী করবে বা জানতে চাইবে?',
    'তুমি যদি কোনো একটি বই বা মুভির মধ্যে ঢুকতে পারো, তাহলে কোনটি বেছে নেবে এবং কেন?',
    'যদি তুমি কোনো একটি জিনিস আবিষ্কার করতে পারো, তাহলে কী আবিষ্কার করতে চাইবে?',
    'তুমি কি মনে করো আমরা যদি একসাথে কোনো business শুরু করি, তাহলে সেটা কী হবে?',

];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Check only the current answer when moving to next question
    if (currentQuestion < questions.length - 1) {
      if (answers[currentQuestion].length < 2) {
        setError('Please answer the current question with at least 2 characters.');
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
      setError(''); // Clear error when valid
    } else {
      // Final submission check for all answers
      if (answers.some(answer => answer.length < 2)) {
        setError('Please answer all questions with at least 2 characters.');
        return;
      }
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    const emailData = {
      from_name: 'Khushi', // Can be dynamically set to the user's name
      to_name: 'Makky', // Can be your name (email recipient)
      answer_1: answers[0], // answer for first question
      answer_2: answers[1], // answer for second question
      answer_3: answers[2], // answer for third question
      answer_4: answers[3], // and so on...
      answer_5: answers[4],
      answer_6: answers[5],
      answer_7: answers[6],
      answer_8: answers[7],
      answer_9: answers[8],
      answer_10: answers[9],
      answer_11: answers[10],
      answer_12: answers[11],
    };

    emailjs
      .send(
        'service_kl2aid9', // Your EmailJS service ID
        'template_yariim2', // Your EmailJS template ID
        emailData,
        'C9MAK05OfDEeY9Pf8' // Replace with your actual EmailJS public key
      )
      .then((response) => {
        console.log('SUCCESS!', response);
        setError(''); // Reset error message
        setShowPopup(true); // Show success message after submission
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10" style={{ backgroundImage: 'url(/khushi4.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="space-y-8 px-6 py-8 max-w-xl w-full bg-white rounded-xl shadow-2xl backdrop-blur-lg">
        <h2 className="text-4xl font-serif text-center text-pink-600 mb-8 animate-fadeIn font-bold">💖 Love Quiz 💖</h2>
        <p className="text-xl text-center text-gray-700 mb-4">Let's see how well you know our love story!</p>

        <div className="space-y-4">
          {/* Display Current Question */}
          <p className="text-2xl font-semibold text-center text-gray-800">{questions[currentQuestion]}</p>

          {/* Input for Answer */}
          <div className="space-y-2">
            <input
              type="text"
              value={answers[currentQuestion]}
              onChange={(e) => handleAnswerChange(e, currentQuestion)}
              className="w-full p-3 border-2 rounded-md text-lg text-gray-700 focus:outline-none"
              placeholder="Type your answer here"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-pink-600 text-white text-lg rounded-md hover:bg-pink-700 transition duration-300 shadow-xl"
            disabled={answers[currentQuestion].length < 2}
          >
            {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          </button>

          {/* Success Popup */}
          {showPopup && (
            <div className="text-center text-xl font-semibold text-pink-600">
              <p className="mb-4">Thank you for completing the quiz! 🎉</p>
              <button
                onClick={() => {
                  setAnswers(Array(questions.length).fill(''));
                  setCurrentQuestion(0);
                  setShowPopup(false);
                }}
                className="mt-4 py-2 px-6 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveQuiz;
