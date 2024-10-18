import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const LongButton = styled(Button)(({ theme }) =>({
    width: "280px",
    padding: '10px',
    color: theme.palette.text.white,
    backgroundColor: theme.palette.primary.main,
}));

export default LongButton;