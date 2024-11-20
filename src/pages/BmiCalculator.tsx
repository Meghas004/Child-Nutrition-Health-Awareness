import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const BmiCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // convert cm to meters
    
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      // BMI status for children (simplified)
      if (bmiValue < 5) setStatus('Underweight');
      else if (bmiValue < 85) setStatus('Healthy weight');
      else if (bmiValue < 95) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Child BMI Calculator</h1>
            </div>
            <p className="mt-2">Calculate your child's Body Mass Index (BMI)</p>
          </div>

          <div className="p-6">
            <form onSubmit={calculateBMI} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age (years)</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  min="2"
                  max="18"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  step="0.1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  step="0.1"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Calculate BMI
              </button>
            </form>

            {bmi !== null && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Results</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">BMI:</span> {bmi}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{' '}
                    <span className={`font-medium ${
                      status === 'Healthy weight' ? 'text-green-600' :
                      status === 'Underweight' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {status}
                    </span>
                  </p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Note: This BMI calculator is designed for children and teens aged 2-18 years. Please consult with a healthcare provider for a complete evaluation of your child's growth and health.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;