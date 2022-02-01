<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React,{useState} from 'react';
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http/index';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

<<<<<<< HEAD
const Phone = ({ onNext }) => {
=======
const Phone = ({onNext}) => {
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    async function submit() {
<<<<<<< HEAD
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));
        onNext();
    }

    return (
        <Card title="Enter you phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
=======
        //server request
        const {data} = await sendOtp({phone:phoneNumber});
        console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));
        onNext();
}

    return (
        <>
            <Card title="Enter your phone number" icon="Phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div>
                        <div className={styles.actionButtonWrap}>
                                <Button text="Next" onClick={submit}/>
                    </div>
                    <p className={styles.bottomPara}>
                        By entering your number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
                    </p>
                </div>    
            </Card>
         </>
    )
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
};

export default Phone;
