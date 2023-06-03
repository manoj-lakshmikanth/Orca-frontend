import React, { useContext } from 'react';
import './Stepper.css'; // Import your CSS file for styling
import userContext from '../Context';

const Stepper = () => {
  const { stepCount, setStepCount } = useContext(userContext);
  // const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setStepCount(step);
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        <div
          className={`step ${stepCount === 1 ? 'active' : ''}`}
          onClick={() => handleStepClick(1)}
        >
          Step 1
        </div>
        <div
          className={`step ${stepCount === 2 ? 'active' : ''}`}
          onClick={() => handleStepClick(2)}
        >
          Step 2
        </div>
        <div
          className={`step ${stepCount === 3 ? 'active' : ''}`}
          onClick={() => handleStepClick(3)}
        >
          Step 3
        </div>
      </div>
      <hr className={`line line-${stepCount}`} />
    </div>
  );
};

export default Stepper;
