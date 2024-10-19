import React from 'react';
import BackgroundBox from '../../components/common/BackgroundBox';
import Typography from '@mui/material/Typography';
import LoginForm from '../../components/login/LoginForm';
import FindInfo from '../../components/login/FindInfo';
import SocialLogin from '../../components/login/SocialLogin';
import LinkJoin from '../../components/login/LinkJoin'

function Landing() {
    return (
        <BackgroundBox>
            <Typography variant='h1' style={{whiteSpace: 'nowrap', margin:'5vh'}}>
                로그인
            </Typography>

            <LoginForm />
            <FindInfo />
            <SocialLogin />
            <LinkJoin />
        </BackgroundBox>
    );
}

export default Landing;