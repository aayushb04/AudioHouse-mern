import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './stepOtp.module.css';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = () => {
    const [otp, setOtp] = useState('');
    const { phone, hash } = useSelector((state) => state.auth.otp);
    const dispatch = useDispatch();
    async function submit() {
       
        try {
            const { data } = await verifyOtp({ otp, phone, hash });
            console.log(data);
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
        
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
};

export default StepOtp;
