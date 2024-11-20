import React, { useState } from 'react';
import { Calculator, Apple } from 'lucide-react';

interface NutrientNeeds {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  calcium: number;
  iron: number;
}

const NutritionCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [needs, setNeeds] = useState<NutrientNeeds | null>(null);

  const calculateNeeds = (e: React.FormEvent) => {
    e.preventDefault();
    
    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    
    // Basic calculation (simplified for example)
    const baseCalories = weightNum * (gender === 'male' ? 22 : 20);
    const activityMultiplier = {
      sedentary: 1.2,
      moderate: 1.5,
      active: 1.8
    }[activityLevel] || 1.2;
    
    const calories = baseCalories * activityMultiplier;
    
    setNeeds({
      calories: Math.round(calories),
      protein: Math.round(weightNum * 1.2), // g/day
      carbs: Math.round(calories * 0.55 / 4), // 55% of calories
      fats: Math.round(calories * 0.25 / 9), // 25% of calories
      calcium: ageNum < 9 ? 1000 : 1300, // mg/day
      iron: gender === 'male' ? 10 : 15 // mg/day
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <div className="flex items-center space-x-2">
              <Apple className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Child Nutrition Calculator</h1>
            </div>
            <p className="mt-2">Calculate your child's daily nutritional needs</p>
          </div>

          <div className="p-6">
            <form onSubmit={calculateNeeds} className="space-y-6">
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
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Activity Level</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                >
                  <option value="">Select activity level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Very Active</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Calculate Needs
              </button>
            </form>

            {needs && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Daily Nutritional Needs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Calories</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.calories} kcal</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Protein</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.protein}g</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Carbohydrates</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.carbs}g</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Fats</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.fats}g</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Calcium</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.calcium}mg</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">Iron</h3>
                    <p className="text-2xl font-bold text-green-600">{needs.iron}mg</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Note: These are general recommendations. Please consult with a healthcare provider or registered dietitian for personalized advice.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCalculator;