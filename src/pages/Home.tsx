import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home as HomeIcon, Briefcase, Car, Building2 } from 'lucide-react';

export default function Home() {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(12);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure;
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const services = [
    {
      title: 'Home Loan',
      icon: HomeIcon,
      description: 'Make your dream home a reality with our competitive home loan options.',
    },
    {
      title: 'Business Loan',
      icon: Briefcase,
      description: 'Grow your business with flexible financing solutions.',
    },
    {
      title: 'Personal Loan',
      icon: Calculator,
      description: 'Quick personal loans for your immediate financial needs.',
    },
    {
      title: 'Car Loan',
      icon: Car,
      description: 'Drive your dream car home with our affordable car loans.',
    },
    {
      title: 'Mortgage Loan',
      icon: Building2,
      description: 'Secure your property investment with our mortgage solutions.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Business Owner',
      content: 'CapitalCorner helped me secure funding for my business expansion. The process was smooth and professional.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Thanks to CapitalCorner, I was able to get my dream home with a great interest rate.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Michael Chen',
      role: 'Channel Partner',
      content: 'Being a CapitalCorner partner has been rewarding. Their support system is excellent.',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Financial Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Get the loan you need with competitive rates and flexible terms
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Explore Loans
              </Link>
              <Link
                to="/partner-join"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">EMI Calculator</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure (months)
                </label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-blue-600">
                Monthly EMI: ₹{calculateEMI().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Loan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Partner Network</h2>
          <p className="text-xl mb-8">
            Become a CapitalCorner channel partner and earn attractive commissions
          </p>
          <Link
            to="/partner-join"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}