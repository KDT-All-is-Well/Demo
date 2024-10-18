import React from 'react';
import BackgroundBox from '../../components/common/BackgroundBox';
import Typography from '@mui/material/Typography';
import ImageStepper from '../../components/landing/ImageStepper';
import LongButton from '../../components/common/LongButton';


function Landing() {
    return (
        <BackgroundBox>
            <Typography variant='h1' style={{whiteSpace: 'nowrap', margin:'10%'}}>
                산들바람 길잡이
            </Typography>
            <ImageStepper />
            <LongButton style={{marginTop:'5%', marginBottom: '10%'}}>
                시작하기
            </LongButton>
        </BackgroundBox>
    );
}

export default Landing;