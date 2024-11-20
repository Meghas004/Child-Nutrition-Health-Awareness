import React, { useState } from 'react';
import { Book, FileText, Video, Download } from 'lucide-react';

const Resources = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Resource data with real or placeholder links
  const resourceData = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Educational Guides",
      items: [
        { name: "Nutrition Basics for Children", link: "https://www.nutrition.org.uk" },
        { name: "Understanding Food Groups", link: "https://www.choosemyplate.gov" },
        { name: "Meal Planning Guide", link: "https://www.eatright.org" },
        { name: "Healthy Snacking Tips", link: "https://www.healthline.com/nutrition/healthy-snacks" }
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Research Papers",
      items: [
        { name: "Latest Nutrition Studies", link: "https://pubmed.ncbi.nlm.nih.gov" },
        { name: "Child Development Research", link: "https://www.childdevelopmentjournal.org" },
        { name: "Health Impact Reports", link: "https://www.who.int/health-topics" },
        { name: "Scientific Publications", link: "https://www.sciencedirect.com" }
      ]
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Content",
      items: [
        { name: "Cooking Demonstrations", link: "https://www.youtube.com/results?search_query=cooking+demonstrations" },
        { name: "Expert Interviews", link: "https://www.ted.com/talks" },
        { name: "Nutrition Tips", link: "https://www.youtube.com/results?search_query=nutrition+tips" },
        { name: "Health Education Videos", link: "https://www.khanacademy.org/health-and-medicine" }
      ]
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Downloadable Tools",
      items: [
        { name: "Meal Planners", link: "https://www.myplate.gov/resources/tools/meal-planner" },
        { name: "Shopping Lists", link: "https://www.eatright.org/food/planning-and-prep" },
        { name: "Growth Charts", link: "https://www.cdc.gov/growthcharts" },
        { name: "Activity Trackers", link: "https://www.fitnessblender.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nutrition Resources</h1>
          <p className="text-xl max-w-2xl">Access our comprehensive collection of nutrition and health resources.</p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceData.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-3">
                    <div className="text-green-600">{resource.icon}</div>
                  </div>
                  <h2 className="text-xl font-semibold">{resource.title}</h2>
                </div>
                <ul className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
