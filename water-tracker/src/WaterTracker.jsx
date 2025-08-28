import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon } from './components/Icons';

const WaterTracker = () => {
  const [waterConsumption, setWaterConsumption] = useState(0);
  const [dailyGoal] = useState(64); // 64 ounces daily goal
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    // Get today's date
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setTodayDate(today);

    // Load saved water consumption from localStorage
    const savedConsumption = localStorage.getItem('waterConsumption');
    const savedDate = localStorage.getItem('waterDate');
    const currentDate = new Date().toDateString();

    if (savedDate === currentDate && savedConsumption) {
      setWaterConsumption(parseInt(savedConsumption));
    } else {
      // New day, reset consumption
      setWaterConsumption(0);
      localStorage.setItem('waterDate', currentDate);
    }
  }, []);

  useEffect(() => {
    // Save water consumption to localStorage
    localStorage.setItem('waterConsumption', waterConsumption.toString());
  }, [waterConsumption]);

  const incrementWater = (amount) => {
    setWaterConsumption(prev => Math.max(0, prev + amount));
  };

  const decrementWater = (amount) => {
    setWaterConsumption(prev => Math.max(0, prev - amount));
  };

  const resetWater = () => {
    setWaterConsumption(0);
  };

  const progressPercentage = Math.min((waterConsumption / dailyGoal) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-water-blue-800 mb-2">
            💧 Water Tracker
          </h1>
          <p className="text-water-blue-600 text-sm sm:text-base lg:text-lg">
            {todayDate}
          </p>
        </div>

        {/* Main Card */}
        <div className="glass-effect p-6 sm:p-8 lg:p-12 mb-8">
          {/* Water Consumption Display */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className="water-counter">
                {waterConsumption}
                <span className="text-2xl sm:text-3xl lg:text-4xl ml-2">oz</span>
              </div>
              <div className="text-water-blue-600 text-sm sm:text-base mt-2">
                of {dailyGoal} oz daily goal
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/50 rounded-full h-4 sm:h-6 mb-6 shadow-inner">
              <div 
                className="bg-gradient-to-r from-water-blue-400 to-water-blue-600 h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
              </div>
            </div>

            {/* Progress Text */}
            <div className="text-water-blue-700 font-semibold text-sm sm:text-base">
              {progressPercentage.toFixed(1)}% of daily goal
            </div>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Quick Add Buttons */}
            <button
              onClick={() => incrementWater(8)}
              className="water-button flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PlusIcon />
              8 oz
            </button>
            <button
              onClick={() => incrementWater(16)}
              className="water-button flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PlusIcon />
              16 oz
            </button>
            <button
              onClick={() => incrementWater(24)}
              className="water-button flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PlusIcon />
              24 oz
            </button>
            <button
              onClick={() => incrementWater(32)}
              className="water-button flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PlusIcon />
              32 oz
            </button>
          </div>

          {/* Manual Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => decrementWater(8)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MinusIcon />
              Remove 8oz
            </button>
            <button
              onClick={resetWater}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Reset Day
            </button>
          </div>

          {/* Achievement Messages */}
          {waterConsumption >= dailyGoal && (
            <div className="text-center p-4 bg-green-100 border border-green-300 rounded-lg mb-4 animate-bounce-slow">
              <div className="text-2xl mb-2">🎉</div>
              <div className="text-green-800 font-bold text-lg">
                Congratulations! You've reached your daily goal!
              </div>
            </div>
          )}
          
          {waterConsumption >= dailyGoal * 0.75 && waterConsumption < dailyGoal && (
            <div className="text-center p-4 bg-yellow-100 border border-yellow-300 rounded-lg mb-4">
              <div className="text-2xl mb-2">💪</div>
              <div className="text-yellow-800 font-bold">
                Almost there! You're 75% to your goal!
              </div>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="glass-effect p-6 text-center">
          <h3 className="text-xl font-bold text-water-blue-800 mb-4">
            💡 Hydration Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-water-blue-700">
            <div className="p-3 bg-white/20 rounded-lg">
              Start your day with a glass of water
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              Keep a water bottle nearby
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              Drink water before, during, and after exercise
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
