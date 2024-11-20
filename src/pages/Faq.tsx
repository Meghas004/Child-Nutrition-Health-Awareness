import React from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What are the essential nutrients for child growth?",
      answer: "Children need a balanced mix of proteins, carbohydrates, healthy fats, vitamins, and minerals. Key nutrients include calcium for bone development, iron for blood health, vitamin D for immunity, and protein for muscle growth."
    },
    {
      question: "How much physical activity does my child need?",
      answer: "Children and adolescents should get at least 60 minutes of moderate to vigorous physical activity daily. This can include playing sports, riding bikes, swimming, or active play."
    },
    {
      question: "What should I do if my child is a picky eater?",
      answer: "Stay patient and keep offering various healthy foods. Make mealtimes fun, involve children in food preparation, and be a good role model. Avoid forcing food and maintain a positive atmosphere during meals."
    },
    {
      question: "How can I tell if my child is at a healthy weight?",
      answer: "Use our BMI calculator as a starting point, but always consult with your healthcare provider. They can assess your child's growth curve and overall health status."
    },
    {
      question: "What are healthy snack options for children?",
      answer: "Focus on nutrient-rich snacks like fresh fruits, vegetables with hummus, yogurt, whole grain crackers with cheese, or nuts (if age-appropriate and no allergies)."
    },
    {
      question: "How much sleep does my child need?",
      answer: "Sleep needs vary by age: preschoolers need 10-13 hours, school-age children need 9-11 hours, and teenagers need 8-10 hours of sleep per night."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-10 w-10 mr-3" />
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl max-w-2xl">Find answers to common questions about child nutrition and health.</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-green-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-green-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please visit our contact page for more help.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Faq;