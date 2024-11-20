import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About KidsNutrition</h1>
          <p className="text-xl max-w-2xl">Dedicated to empowering families with knowledge and tools for better child nutrition and health outcomes.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At KidsNutrition, we believe every child deserves access to proper nutrition education and resources. Our mission is to provide families with the knowledge and tools they need to make informed decisions about their children's nutrition and health.
              </p>
              <p className="text-gray-600">
                Through evidence-based information, interactive tools, and community support, we're helping parents raise healthier, happier children.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Children eating healthy food"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10k+</div>
              <div className="text-gray-600">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Family First",
                description: "We prioritize the needs of families in everything we do."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "We maintain high standards in our nutrition guidance."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Accessibility",
                description: "We make nutrition information accessible to all."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Impact",
                description: "We serve families from diverse backgrounds worldwide."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;