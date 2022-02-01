import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
<<<<<<< HEAD
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useHistory();
    function startRegister() {
        history.push('/authenticate');
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Codershouse!" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div>
                    <Button onClick={startRegister} text="Let's Go" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
=======
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft:"10px"
  }
  const history = useHistory();

  function startRegister(){
    history.push('/authenticate');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to AudioHouse!" icon="logo">

                <p className={styles.text}>We're Working hard to get AudioHouse ready for everyone! While we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks.
                </p>
               <div>
                        <Button onClick={startRegister} text="Let's Go"/>
                </div>
                <div className={styles.signinWrapper}>
                        <span className={styles.hasInvite}>Have an Invite code?</span>
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
                </div>
            </Card>
        </div>
    );
};

export default Home;
