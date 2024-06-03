import { FlipWords } from "./ui/flip-words";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const GradientText = () => {
  return (
    <div className="flex justify-center">
        <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            Hello <FlipWords words={['Manish', 'Vishwakarma']}/>
        </div>
        </BackgroundGradientAnimation>
    </div>
  );
};

export default GradientText;
