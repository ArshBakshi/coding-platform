import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Code2,
  FileText,
  Monitor,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  BarChart,
  Building,
  Star,
  Shield,
} from "lucide-react";

const Landing = () => {
  const features = [
    /* Previous features array */
  ];
  const benefits = [
    /* Previous benefits array */
  ];

  const stats = [
    {
      number: "95%",
      label: "Interview Success Rate",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "50K+",
      label: "Practice Interviews",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "200+",
      label: "Partner Companies",
      icon: <Building className="w-6 h-6" />,
    },
    {
      number: "85%",
      label: "Faster Preparation",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content:
        "This platform transformed my interview preparation. The AI feedback helped me identify and improve my weak areas.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Meta",
      content:
        "The technical interview simulations are incredibly realistic. I felt fully prepared for my actual interviews.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Amazon",
      content:
        "The personalized learning path and detailed feedback made all the difference in my job search journey.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative">
      {/* Previous background animation code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0">
          <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-[radial-gradient(circle_400px_at_0%_0%,#0141ff1a,#0000000f)] animate-[move-background_8s_linear_infinite]" />
          <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-[radial-gradient(circle_400px_at_100%_0%,#a000ff1a,#0000000f)] animate-[move-background_8s_linear_infinite]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1 rounded-full border border-blue-500/20">
                  AI-Powered Interview Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Master Your Interview Journey
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your interview preparation with AI-driven feedback,
                realistic simulations, and personalized coaching
              </p>
              <div className="flex gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started Free
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                    Watch Demo
                  </button>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ISO Certified
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  GDPR Compliant
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Industry Leading
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gray-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    {stat.number}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h2 className="text-3xl font-bold mb-4">
                Experience the Future of Interview Prep
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our AI-powered platform provides comprehensive interview
                preparation with real-time feedback and personalized coaching
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {["Feature 1", "Feature 2", "Feature 3"].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-gray-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400">
                From preparation to placement - hear from our successful
                candidates
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-20 bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Interview Success?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join thousands of successful candidates who have mastered their
                interview skills and landed their dream jobs
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Free Trial
                </button>
              </motion.div>
              <p className="mt-4 text-gray-500">
                No credit card required • 14-day free trial
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes move-background {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-44px, -44px);
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
