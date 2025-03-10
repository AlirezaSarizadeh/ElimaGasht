import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Wallet, Users, Ticket } from "lucide-react";
const steps = [
  { name: "انتخاب بلیط", icon: <CheckCircle size={24} />,  },
  { name: "مشخصات", icon: <Users size={24} /> },
  { name: "تایید بلیط و پرداخت", icon: <Wallet size={24} /> },
  { name: "صدور بلیط", icon: <Ticket size={24} /> },
];

const BuyTicket = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[100vw] h-[100vh]  f flex-col">
        <div className="flex items-center w-full max-w-lg justify-between relative mb-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative w-full"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 z-10 transition-all ${
                  index <= currentStep
                    ? "bg-[#F0421A] border-[#F0421A] text-white"
                    : "bg-gray-200 border-gray-400"
                }`}
              >
                {index < currentStep ? <CheckCircle size={24} /> : step.icon}
              </div>
              <p className="text-sm mt-2 font-medium">{step.name}</p>

            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            {steps[currentStep].name}
          </h2>
          <p className="text-gray-600">
            Content for {steps[currentStep].name}.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          {currentStep > 0 && (
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <a
              href="/final-step"
              className="px-4 py-2 bg-green-500 text-white rounded text-center"
            >
              Finish
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BuyTicket;
