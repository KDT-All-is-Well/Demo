import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const LongButton = styled(Button)(({ theme }) =>({
    width: "70vw",
    maxWidth: "400px",
    padding: '10px',
    color: theme.palette.text.white,
    backgroundColor: theme.palette.primary.main,
    fontSize: 'clamp(12px, 3vw, 20px)',
}));

export default LongButton;