import {
  Home,
  Briefcase,
  CreditCard,
  Car,
  Building2,
  CheckCircle,
  Clock,
  FileText,
  DollarSign,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const loanTypes = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Make your dream home a reality with our competitive home loan options.',
      features: [
        'Up to 90% financing',
        'Competitive interest rates',
        'Flexible tenure up to 30 years',
        'Quick approval process',
      ],
      interestRate: '6.70% - 8.50%',
      processingFee: '0.50%',
      maxAmount: '₹5 Crore',
    },
    {
      icon: Briefcase,
      title: 'Business Loan',
      description: 'Grow your business with flexible financing solutions.',
      features: [
        'Minimal documentation',
        'No collateral required',
        'Flexible repayment options',
        'Quick disbursement',
      ],
      interestRate: '11.00% - 16.00%',
      processingFee: '1.00%',
      maxAmount: '₹50 Lakh',
    },
    {
      icon: CreditCard,
      title: 'Personal Loan',
      description: 'Quick personal loans for your immediate financial needs.',
      features: [
        'No security required',
        'Minimal documentation',
        'Quick approval',
        'Flexible tenure',
      ],
      interestRate: '10.50% - 15.00%',
      processingFee: '1.00%',
      maxAmount: '₹25 Lakh',
    },
    {
      icon: Car,
      title: 'Car Loan',
      description: 'Drive your dream car home with our affordable car loans.',
      features: [
        'Up to 100% financing',
        'Competitive rates',
        'Quick approval',
        'Flexible tenure',
      ],
      interestRate: '7.25% - 9.50%',
      processingFee: '0.75%',
      maxAmount: '₹1 Crore',
    },
    {
      icon: Building2,
      title: 'Mortgage Loan',
      description: 'Secure your property investment with our mortgage solutions.',
      features: [
        'High loan value',
        'Competitive interest rates',
        'Flexible tenure',
        'Quick processing',
      ],
      interestRate: '8.50% - 11.00%',
      processingFee: '0.50%',
      maxAmount: '₹2 Crore',
    },
  ];

  const process = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our simple online application form with your details.',
    },
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Our team reviews your application within 24 hours.',
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'Complete document verification and credit assessment.',
    },
    {
      icon: DollarSign,
      title: 'Disbursement',
      description: 'Quick loan disbursement once approved.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Loan Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our range of loan products designed to meet your financial needs
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan) => (
              <div
                key={loan.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
              >
                <loan.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                <div className="space-y-4 mb-6">
                  {loan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Interest Rate</p>
                      <p className="font-semibold">{loan.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Processing Fee</p>
                      <p className="font-semibold">{loan.processingFee}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Maximum Amount</p>
                    <p className="font-semibold">{loan.maxAmount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple Loan Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-lg shadow-lg p-8 text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2" />
                )}
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Apply now or contact us to discuss your loan requirements
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/partner-join"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}