import React from 'react';
import BackgroundBox from '../../components/common/BackgroundBox';
import Typography from '@mui/material/Typography';
import LongButton from '../../components/common/LongButton';


function Landing() {
    return (
        <BackgroundBox>
            <Typography variant='h1' style={{whiteSpace: 'nowrap', margin:'10%'}}>
                로그인
            </Typography>
            <LongButton style={{marginTop:'5%', marginBottom: '10%'}}>
                로그인
            </LongButton>
        </BackgroundBox>
    );
}

export default Landing;