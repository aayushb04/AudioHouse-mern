import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
<<<<<<< HEAD:frontend/src/pages/Authenticate/Authenticate.jsx
    2: StepOtp,
};
=======
    2: StepOtp
}

const Authenticate = () => {
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973:frontend/src/pages/Login/Login.jsx

const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return <Step onNext={onNext} />;
};

export default Authenticate;
