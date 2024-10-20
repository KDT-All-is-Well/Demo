import React from 'react';
import Typography from '@mui/material/Typography';
import WhiteButton from '../../components/common/WhiteButton';


function LinkJoin() {
    const textStyle = {
        textAlign: 'left',
    };

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{marginTop: '10vh'}}>
            <div style={textStyle}>
                <Typography variant='body2' style={{whiteSpace: 'nowrap'}}>
                    처음 시작하신다면
                </Typography>
            </div>

            <div style={wrapperStyle}>
                <WhiteButton>회원가입</WhiteButton>
            </div>
        </div>
    );
}

export default LinkJoin;