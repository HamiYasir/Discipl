import React, { useState } from 'react';
import { Mail, Phone, MapPin, Youtube, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://discipl-server.onrender.com/api/contacts/sendMessage', formData); // This is used when running from github repo
      // const response = await axios.post('http://localhost:8172/api/contacts/sendMessage', formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      // console.error('Email sending failed:', error); // DEBUG
      // alert('Failed to send message. Please try again later.'); // DEBUG
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      title: "Email",
      details: ["info@thediscipl.com"],
      description: "Get in touch via email for general inquiries or partnerships",
      link: ""
    },
    {
      icon: <Phone className="w-6 h-6 text-red-500" />,
      title: "Phone",
      details: ["+91 9746458284 "],
      description: "Call us during business hours for immediate assistance",
      link: ""
    },
    {
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      title: "Youtube",
      details: ["@DisciplFitnessHub"],
      description: "Join Discipl and embrace a disciplined and fulfilling approach to fitness and wellness.",
      link: "https://www.youtube.com/@DisciplFitnessHub"
    },
    {
      icon: <Facebook className="w-6 h-6 text-red-500" />,
      title: "Facebook",
      details: ["facebook.com/thediscipl"],
      description: "Digitalize your fitness center and transform yourself through discipl.",
      link: "https://www.facebook.com/thediscipl/"
    },
    {
      icon: <Instagram className="w-6 h-6 text-red-500" />,
      title: "Instagram",
      details: ["@discipl__"],
      description: "Disciple - Walk Earn Live",
      link: "https://www.instagram.com/discipl__/"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 text-black sm: h-[15rem] md: h-[15rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
              We're here to help you succeed. Reach out to us with any questions or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <a href={info.link || "#"} >
                    <div className="mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {info.title}
                    </h3>
                    <div className="mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {info.description}
                    </p>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">
                Send us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 disabled:bg-red-400 transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">
                Our Office
              </h2>
              
              <div className="flex flex-col justify-evenly">
                <div className="bg-gray-100 rounded-lg h-64 mb-1 flex flex-col items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.3652616191944!2d75.81836507505187!3d11.453539988739433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI3JzEyLjciTiA3NcKwNDknMTUuNCJF!5e0!3m2!1sen!2sin!4v1760762840091!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className="bg-gray-100 rounded-lg h-10 mb-8 flex items-center justify-center">
                  <div className="text-center text-gray-600 flex flex-row">
                    <MapPin className="w-5 h-5 mx-auto mr-4" />
                    <p className="text-sm">Vankannayullathil, Near Block Office, Balussery, Kozhikode, Kerala - 673613</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;