import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
<<<<<<< HEAD
import TextInput from '../../../components/shared/TextInput/TextInput';
import Button from '../../../components/shared/Button/Button';
import styles from './StepOtp.module.css';
=======
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './stepOtp.module.css';
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = () => {
    const [otp, setOtp] = useState('');
<<<<<<< HEAD
    const dispatch = useDispatch();
    const { phone, hash } = useSelector((state) => state.auth.otp);
    async function submit() {
        try {
            const { data } = await verifyOtp({ otp, phone, hash });
=======
    const { phone, hash } = useSelector((state) => state.auth.otp);
    const dispatch = useDispatch();
    async function submit() {
       
        try {
            const { data } = await verifyOtp({ otp, phone, hash });
            console.log(data);
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
<<<<<<< HEAD
    }
    return (
        <>
            <div className={styles.cardWrapper}>
                <Card
                    title="Enter the code we just texted you"
                    icon="lock-emoji"
                >
                    <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={submit} text="Next" />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
        </>
    );
=======
        
    }

  return  (

      <div className={styles.cardWrapper}>
        <Card title="Enter the Code we just texted you" icon="lock-emoji">
        <TextInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            />
            <div>
                    <div className={styles.actionButtonWrap}>
                            <Button onClick={submit} text="Next"/>
                </div>
                <p className={styles.bottomPara}>
                    By entering your number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
                </p>
            </div>    
        </Card>
        </div>
    
)
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
};

export default StepOtp;
