<<<<<<< HEAD
import React, { useState } from 'react';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';

const steps = {
    1: StepName,
    2: StepAvatar,
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }
    return (
        <div className="cardWrapper">
            <Step onNext={onNext}></Step>
        </div>
    );
};

export default Activate;
=======
import React from 'react';

const activate = () => {
    return <div>
      Activate comp.
  </div>;
};

export default activate;
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
