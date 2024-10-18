import React, { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';
import '../../styles/ImageSlide.css';

function ImageStepper() {
    const theme = useTheme();

    // public 안에 저장된 이미지 목록
    const images = [
        '/landing/4.png',
        '/landing/5.png',
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');
    const [displayStep, setDisplayStep] = useState(0);

    // 슬라이드 애니메이션이 끝난 후 이미지 업데이트
    const handleStepChange = (newStep) => {
        setTimeout(() => {
            setDisplayStep(newStep); // 화면에 보여질 이미지를 업데이트
            setIsSliding(false); // 슬라이딩 종료
        }, 500); // 애니메이션 시간과 동일하게 설정
    };

    // 버튼 조작하여 이미지 넘기기
    const handleNext = () => {
        if (activeStep < images.length - 1) {
            setSlideDirection('right');
            setIsSliding(true);
            handleStepChange(activeStep + 1);
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    const handleBack = () => {
        if (activeStep > 0) {
            setSlideDirection('left');
            setIsSliding(true);
            handleStepChange(activeStep - 1);
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handleBack,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // 마우스 드래그도 가능하게 설정
    });

    return(
        <div {...swipeHandlers}>
            <div className={`image-wrapper ${isSliding ? 'sliding' : ''} ${slideDirection}`}>
                <img
                    src={images[displayStep]}
                    alt={`${displayStep + 1}`}
                    loading="lazy"
                    className="slide-image"
                />
            </div>

            <MobileStepper
                style={{marginTop:'5%'}}
                variant="dots"
                steps={images.length}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
                        다음
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    이전
                </Button>
              }
            />
        </div>
    );
}

export default ImageStepper;