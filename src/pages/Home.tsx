import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Apple, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Nurturing Your Child's Health Through Better Nutrition</h1>
            <p className="text-xl mb-8 max-w-2xl">Empower your family with knowledge and tools for a healthier future. Discover expert guidance on child nutrition and wellness.</p>
            <div className="flex space-x-4">
              <Link to="/nutrition-calculator" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center">
                Get Started <ArrowRight className="ml-2" />
              </Link>
              <Link to="/about" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose KidsNutrition?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Access evidence-based nutrition advice from pediatric nutrition specialists.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Tools</h3>
              <p className="text-gray-600">Use our calculators and resources to make informed decisions about your child's nutrition.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">Join our community of parents committed to raising healthy, happy children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Child's Nutrition Journey?</h2>
          <p className="text-xl mb-8">Get personalized nutrition recommendations and track your child's growth.</p>
          <Link to="/nutrition-calculator" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full inline-flex items-center">
            Try Our Nutrition Calculator <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Latest Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Latest Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthy Meal Planning",
                image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Learn how to plan nutritious meals for your growing child."
              },
              {
                title: "Understanding Food Groups",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Essential guide to balanced nutrition for children."
              },
              {
                title: "Picky Eater Solutions",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Strategies to help your child develop healthy eating habits."
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link to="/resources" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;