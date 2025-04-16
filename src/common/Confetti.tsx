
import React from 'react';
import {Button} from '@heroui/react';
import confetti from 'canvas-confetti';
import './Confetti.scss';

const CustomButton = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  return (
    <div className='parent-container'>
        <Button
            ref={buttonRef}
            disableRipple
            className="confetti-button"
            size="sm"
            onPress={handleConfetti}
            >
            Press me
        </Button>
    </div>
  );
};

export default CustomButton;