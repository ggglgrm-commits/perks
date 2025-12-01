export const InstructionsCard = () => {
  const steps = [
    {
      number: "1.",
      text: "Click The Links Above 👆",
    },
    {
      number: "2.",
      text: "Enter Your Email & Basic Info",
    },
    {
      number: "3.",
      text: "Complete Recommended Deals The more deals you do the more you earn!",
    },
    {
      number: "4.",
      text: "Claim Your Gift Card!",
    },
  ];

  return (
    <div className="instructions-card animate-scale-in">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="font-bold text-white/90 text-lg flex-shrink-0">
              {step.number}
            </span>
            <p className="text-white/90 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};