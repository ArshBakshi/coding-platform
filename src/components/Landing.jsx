import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Terminal,
  Cpu,
} from "lucide-react";

const Landing= () => {
  const [scrolled, setScrolled] = useState(false);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const pricingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Add global styles to head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);

    // Cleanup
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    const navbarHeight = 80;
    const element = ref.current;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  const handleLoginClick = () => {
    navigate("/test");
  };


  const pricingPlans = [
    {
      name: "Basic",
      price: "299",
      features: [
        "Up to 50 exams per month",
        "Basic AI monitoring",
        "24/7 Support",
        "Basic reporting",
      ]
    },
    {
      name: "Professional",
      price: "499",
      features: [
        "Up to 200 exams per month",
        "Advanced AI monitoring",
        "24/7 Priority Support",
        "Advanced analytics",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited exams",
        "Premium AI monitoring",
        "Dedicated support team",
        "Custom integration",
        "Advanced security features",
        "API access"
      ]
    }
  ];

  const faqItems = [
    {
      number: "100%",
      label: "Positive Feedback",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      question: "What technical requirements are needed to use ProcX?",
      answer: "Users need a computer with a working webcam, microphone, and stable internet connection. Our system works with most modern browsers and requires minimal setup. Detailed system requirements will be provided during registration."
    },
    {
      question: "Is ProcX compliant with privacy regulations?",
      answer: "Yes, ProcX is fully compliant with GDPR, FERPA, and other major privacy regulations. We implement strict data protection measures and only collect necessary information for proctoring purposes."
    },
    {
      question: "What happens if there's an internet disconnection during an exam?",
      answer: "Our system automatically saves progress regularly. In case of disconnection, students can resume their exam from where they left off once connection is restored, subject to institutional policies."
    },
    {
      question: "Can ProcX accommodate students with special needs?",
      answer: "Yes, ProcX is designed to be accessible and can be configured to accommodate various special needs and requirements. Contact our support team for specific accommodations."
    }
  ];

  return (
    <div className="min-h-screen font-mono bg-[var(--Neutral-5)] text-[var(--gray-200)]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--Neutral-10)_1px,transparent_1px),linear-gradient(to_bottom,var(--Neutral-10)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0">
          <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-[radial-gradient(circle_400px_at_0%_0%,var(--Blue-800)_10%,transparent_70%)] animate-[move-background_15s_linear_infinite]" />
          <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-[radial-gradient(circle_400px_at_0%_0%,var(--Green-700)_10%,transparent_70%)] animate-[move-background_15s_linear_infinite]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-6">
                <motion.span
                  className="bg-[var(--accent-blue-active-bg)] text-[var(--accent-blue)] text-sm font-mono px-4 py-2 rounded-full border border-[var(--border-stroke)]"
                  whileHover={{ scale: 1.05 }}
                >
                  AI-POWERED PLACEMENT PRACTICE
                </motion.span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-[var(--accent-blue-headers)] space-mono-bold">
                _Get-Me-Placed_
                <br />
              </h1>
              <p className="text-xl md:text-2xl text-[var(--gray-300)] mb-12 max-w-3xl mx-auto space-mono-regular">
                One Platform. Endless Possibilities. Be Job-Ready Anytime,
                Anywhere.
              </p>
              <div className="flex gap-6 justify-center">
                <Link to="http://localhost:3001/dsa">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[var(--accent-blue-active-bg)] text-[var(--accent-blue)] px-8 py-4 rounded-2xl font-mono text-lg border border-[var(--border-stroke)] hover:bg-[var(--Neutral-15)] transition-all duration-300"
                  >
                    Practice DSA_
                  </motion.button>
                </Link>
                <Link to="http://localhost:3001/resupload">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[var(--Neutral-10)] text-[var(--gray-300)] px-8 py-4 rounded-2xl font-mono text-lg border border-[var(--border-stroke)] hover:bg-[var(--Neutral-15)] transition-all duration-300"
                  >
                    _Give interview
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      {/* Features Grid */}
      <div ref={featuresRef} className="relative z-10 bg-black/80 backdrop-blur-lg py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {[
              {
                icon: <Camera className="w-12 h-12 text-blue-400" />,
                title: "Real-time Monitoring",
                description: "Advanced facial recognition and environment scanning"
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                title: "Fraud Prevention",
                description: "AI-powered behavior analysis and pattern detection"
              },
              {
                icon: <Eye className="w-12 h-12 text-blue-400" />,
                title: "No Manual Invigilation",
                description: "Fully automated monitoring through advanced AI technology"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-400" />,
                title: "Easy and Convenient to Use",
                description: "User-friendly design with minimal setup required"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                  hover:from-blue-900/20 hover:to-cyan-900/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div ref={pricingRef} className="relative z-10 bg-black/90 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-blue-400 mb-16">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">
                ₹{plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-gray-400">/month</span>}
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[var(--accent-blue-headers)] space-mono-bold">
                Ready To Level Up?_
              </h2>
              <p className="text-[var(--gray-300)] text-xl mb-8 space-mono-regular">
                Join successful candidates who have mastered their interview
                skills
              </p>
              <Link to="/test">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--accent-blue-active-bg)] text-[var(--accent-blue)] px-8 py-4 rounded-2xl font-mono text-lg border border-[var(--border-stroke)] hover:bg-[var(--Neutral-15)] transition-all duration-300"
                >
                  Give Free Test _
                </motion.button>
              </Link>
              <p className="mt-4 text-[var(--gray-500)] space-mono-regular">
                No credit card required • Totally Free (for now atleast)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;