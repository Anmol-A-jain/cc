import { Shield, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'With years of experience in the financial sector, we\'ve helped thousands secure their dreams.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our dedicated team ensures you get personalized solutions that match your needs.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'We\'re committed to helping individuals and businesses achieve their financial goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our service quality and customer satisfaction speak for themselves.',
    },
  ];

  const team = [
    {
      name: 'Robert Wilson',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'With over 20 years of experience in financial services.',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      bio: 'Leading our operations with innovation and efficiency.',
    },
    {
      name: 'David Kumar',
      role: 'Chief Risk Officer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: 'Ensuring robust risk management practices.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CapitalCorner
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in financial growth and success. We're committed to
              providing innovative loan solutions that help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, CapitalCorner has grown from a small financial
                consultancy to one of the leading loan distribution platforms in the
                region. Our journey has been driven by a simple mission: to make
                financial services accessible to all.
              </p>
              <p className="text-gray-600 mb-4">
                We've helped thousands of individuals and businesses secure the
                funding they need to achieve their dreams. Our success is built on
                strong relationships with both our clients and our network of
                financial partners.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our services, always
                keeping our core values of transparency, reliability, and customer
                satisfaction at the heart of everything we do.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Team meeting"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹5B+</div>
              <div className="text-lg">Loans Disbursed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Channel Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}