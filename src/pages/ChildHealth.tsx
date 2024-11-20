import React from 'react';
import { Heart, Brain, Smile, Sun } from 'lucide-react';

const ChildHealth = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Child Health & Wellness</h1>
          <p className="text-xl max-w-2xl">Comprehensive resources and guidance for your child's health and development.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Physical Health",
                description: "Essential information about growth, exercise, and physical development.",
                items: ["Growth Milestones", "Physical Activity", "Sleep Patterns", "Hygiene"]
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Mental Health",
                description: "Supporting your child's emotional and psychological well-being.",
                items: ["Emotional Development", "Stress Management", "Social Skills", "Self-esteem"]
              },
              {
                icon: <Smile className="h-8 w-8" />,
                title: "Social Development",
                description: "Building social skills and relationships.",
                items: ["Peer Relationships", "Communication", "Empathy", "Cooperation"]
              },
              {
                icon: <Sun className="h-8 w-8" />,
                title: "Lifestyle Habits",
                description: "Developing healthy routines and behaviors.",
                items: ["Daily Routine", "Screen Time", "Outdoor Activities", "Family Time"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <div className="text-green-600">{section.icon}</div>
                </div>
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Health Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regular Check-ups",
                content: "Schedule regular health check-ups to monitor your child's growth and development.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                title: "Active Lifestyle",
                content: "Encourage at least 60 minutes of physical activity daily through play and structured exercise.",
                image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                title: "Balanced Diet",
                content: "Ensure a varied diet rich in fruits, vegetables, whole grains, and lean proteins.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildHealth;