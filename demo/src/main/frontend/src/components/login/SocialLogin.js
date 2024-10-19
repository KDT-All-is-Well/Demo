import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

function SocialLogin() {
    const theme = useTheme();

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const iconStyle = {
        height: '10vw',
        maxHeight: '50px',
        width: 'auto',
        marginLeft: '15px',
    }

    const divideStyle = {
        border: '1px inset',
        borderColor: theme.palette.text.gray,
        width: '15vw',
        maxWidth: '80px',
    }

    return (
        <div style={{marginTop: '3vh'}}>
            <div style={wrapperStyle}>
                <Divider style={divideStyle} />
                <Typography variant='body3' style={{whiteSpace: 'nowrap', margin:'5%'}}>
                    다른 방법으로 로그인
                </Typography>
                <Divider style={divideStyle} />
            </div>

            <div style={wrapperStyle}>
                <img
                    src={'/login/kakao_login_medium.png'}
                    alt={"카카오 로그인"}
                    loading="lazy"
                    style={iconStyle}
                />
                <img
                    src={'/login/btnW_축약형.png'}
                    alt={"네이버 로그인"}
                    loading="lazy"
                    style={iconStyle}
                />
            </div>
        </div>
    );
}

export default SocialLogin;