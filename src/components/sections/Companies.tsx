"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export function Companies() {
  // Top tech companies where our alumni work
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png" },
    { name: "Adobe", logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
    { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/512px-Vmware.svg.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-white"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <Container className="relative z-10">
        {/* Header with badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
              🎯 Your Path to a Successful Career Goals
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Alumni Work at{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Companies
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our successful alumni working at leading technology companies worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Company logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center p-8 md:p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 font-semibold text-lg">Alumni Placed</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-purple-100 font-semibold text-lg">Success Rate</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-pink-100 font-semibold text-lg">Partner Companies</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
