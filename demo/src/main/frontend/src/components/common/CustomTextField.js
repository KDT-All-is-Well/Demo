import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) =>({
    width: "70vw",
    maxWidth: "400px",
    color: theme.palette.text.main,
    '& .MuiInputBase-input': {
         fontSize: 'clamp(12px, 3vw, 20px)',
    },
    '& .MuiFormLabel-root': {
        fontSize: 'clamp(12px, 2.5vw, 18px)',
    },
    '& .MuiFormHelperText-root': {
        fontSize: 'clamp(12px, 2vw, 16px)',
    },
}));

export default CustomTextField;