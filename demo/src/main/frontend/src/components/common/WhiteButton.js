import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const WhiteButton = styled(Button)(({ theme }) =>({
    width: "70vw",
    maxWidth: "400px",
    padding: '10px',
    color: theme.palette.text.main,
    backgroundColor: theme.palette.background,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    fontSize: 'clamp(12px, 3vw, 20px)',
}));

export default WhiteButton;