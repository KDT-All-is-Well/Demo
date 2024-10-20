import React from 'react';
import { useForm } from "react-hook-form";
import CustomTextField from '../../components/common/CustomTextField';
import LongButton from '../../components/common/LongButton';


function LoginForm() {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>

            <CustomTextField
                label="아이디"
                {...register("id", { required: "아이디를 입력해주세요." })}
                inputProps={{ maxLength: 20 }}
                error={!!errors.id}
                helperText={errors.id?.message}
                style={{ marginBottom: errors.id ? '5px' : '25px',}}
            />

            <CustomTextField
                label="비밀번호"
                type="password"
                {...register("pw", { required: "비밀번호를 입력해주세요." })}
                inputProps={{ maxLength: 20 }}
                error={!!errors.pw}
                helperText={errors.pw?.message}
                style={{ marginBottom: errors.pw ? '10px' : '30px' }}
            />

            <LongButton type="submit">로그인</LongButton>
        </form>
    );
}

export default LoginForm;