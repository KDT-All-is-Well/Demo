import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function FindInfo() {
    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle = {
        whiteSpace: 'nowrap',
        margin:'5%',
        padding:'5%',
    };

    return (
        <div style={wrapperStyle}>
            <Typography variant='body2' style={textStyle}>
                아이디 찾기
            </Typography>

            <Divider orientation="vertical" flexItem style={{margin:'5%'}} />

            <Typography variant='body2' style={textStyle}>
                비밀번호 찾기
            </Typography>
        </div>
    );
}

export default FindInfo;