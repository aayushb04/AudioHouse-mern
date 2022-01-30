import React,{useState} from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from'../StepPhoneEmail.module.css';

const Email = ({onNext}) => {
    const [email, setEmail] = useState('');
    return (
        <>
            <Card title="Enter your Email address" icon="email-emoji">
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                       <div>
                        <div className={styles.actionButtonWrap}>
                                <Button text="Next" onClick={onNext}/>
                    </div>
                    <p className={styles.bottomPara}>
                        By entering your email, you're agreeing to our Terms of service and Privacy Policy. Thanks!
                    </p>
                </div>   
            </Card>
        </>
    )
};

export default Email;
