import React, { useState } from 'react';
import { BookOpen, List } from 'lucide-react';

const Guide = () => {
  const [selectedSection, setSelectedSection] = useState("Understanding Nutrition Basics");

  const sections = {
    "Understanding Nutrition Basics": {
      title: "Understanding Nutrition Basics",
      content: `Nutrition is the foundation of good health and development for children.<br>
      A balanced diet includes a variety of foods to ensure that children get the necessary vitamins, minerals, and energy.<br>
      - Macronutrients: Proteins, carbohydrates, and fats provide energy and support growth.<br>
      - Micronutrients: Vitamins like A, C, D, and minerals like iron and calcium are essential for immunity, strong bones, and overall development.<br>
      - Hydration: Water is crucial for maintaining body functions and energy levels.`
    },
    "Essential Nutrients for Growth": {
      title: "Essential Nutrients for Growth",
      content: `Children require specific nutrients for physical and cognitive development:<br>
      - Proteins: Found in meat, eggs, beans, and lentils, they build and repair tissues.<br>
      - Calcium: Found in milk, yogurt, and cheese, it strengthens bones and teeth.<br>
      - Iron: Found in spinach, beans, and lean meats, it helps in oxygen transportation and prevents anemia.<br>
      - Healthy Fats: Found in nuts, seeds, and fish, they support brain development.<br>
      - Vitamins: For example, Vitamin C boosts immunity, while Vitamin D aids calcium absorption.`
    },
    "Meal Planning Strategies": {
      title: "Meal Planning Strategies",
      content: `Planning meals ensures children get a balanced diet:<br>
      - Create a Weekly Plan: Include proteins, vegetables, grains, and fruits in each meal.<br>
      - Use MyPlate Guidelines: Divide meals into portions with 50% fruits and vegetables, 25% proteins, and 25% grains.<br>
      - Prep Ahead: Cut vegetables and prepare snacks in advance to save time.<br>
      - Involve Kids: Let children help choose recipes or ingredients to make mealtime fun and engaging.`
    },
    "Healthy Snack Ideas": {
      title: "Healthy Snack Ideas",
      content: `Snacks keep children energized between meals. Opt for:<br>
      - Fruits: Apple slices with peanut butter, banana with yogurt.<br>
      - Vegetables: Carrot sticks with hummus, cucumber slices with a sprinkle of salt and lemon.<br>
      - Whole Grains: Whole-grain crackers with cheese, homemade granola bars.<br>
      - Proteins: Boiled eggs, nuts, or a small portion of trail mix.`
    },
    "Dealing with Picky Eaters": {
      title: "Dealing with Picky Eaters",
      content: `Handling picky eaters can be challenging:<br>
      - Be Patient: Introduce new foods gradually without pressuring them.<br>
      - Make Food Fun: Use cookie cutters for fun shapes or arrange food into creative designs.<br>
      - Lead by Example: Show children you enjoy healthy foods.<br>
      - Involve Them: Let them help cook or choose ingredients.<br>
      - Stay Consistent: Reintroduce rejected foods over time, as preferences can change.`
    },
    "Food Safety Guidelines": {
      title: "Food Safety Guidelines",
      content: `Ensuring food safety is vital to prevent illnesses:<br>
      - Wash Hands and Surfaces: Always wash hands, cutting boards, and utensils before preparing food.<br>
      - Cook to the Right Temperature: Ensure meats, eggs, and poultry are cooked thoroughly (use a food thermometer).<br>
      - Store Food Safely: Refrigerate perishables promptly and don’t leave food out for more than two hours.<br>
      - Avoid Cross-Contamination: Keep raw meats away from other ingredients during preparation.`
    },
    "Special Dietary Needs": {
      title: "Special Dietary Needs",
      content: `Some children may have specific dietary requirements:<br>
      - Allergies: Avoid foods like nuts, dairy, or gluten based on their allergies.<br>
      - Lactose Intolerance: Use lactose-free milk or plant-based alternatives.<br>
      - Vegetarian or Vegan Diets: Ensure they get adequate protein from beans, lentils, and soy products.<br>
      - Medical Conditions: Work with a dietitian to meet nutritional needs if your child has conditions like diabetes or celiac disease.`
    },
    "Reading Food Labels": {
      title: "Reading Food Labels",
      content: `Understanding food labels helps make healthier choices:<br>
      - Serving Size: Check the portion size to avoid overeating.<br>
      - Calories: Ensure the calorie count matches your child’s needs.<br>
      - Ingredients: Look for whole, natural ingredients and avoid those with added sugars or artificial additives.<br>
      - Nutrients: Opt for foods rich in fiber, protein, and essential vitamins while limiting sodium and trans fats.`
    }
  };

  // Check if the selected section exists in the sections object
  const selectedContent = sections[selectedSection];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nutrition Guide</h1>
          <p className="text-xl max-w-2xl">Your comprehensive guide to understanding and implementing healthy nutrition for children.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Table of Contents */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
              <ul className="space-y-4">
                {Object.keys(sections).map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center text-gray-700 hover:text-green-600 cursor-pointer ${
                      selectedSection === item ? "text-green-600 font-semibold" : ""
                    }`}
                    onClick={() => setSelectedSection(item)}
                  >
                    <List className="h-5 w-5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Section Content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Ensure selectedContent exists before rendering */}
              {selectedContent ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">{selectedContent.title}</h2>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: selectedContent.content }}></p>
                </>
              ) : (
                <p className="text-gray-600">Please select a valid section from the navigation.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
