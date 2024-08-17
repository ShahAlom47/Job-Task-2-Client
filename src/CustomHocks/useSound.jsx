import { useCallback } from 'react';
import click from '../assets/sound/double-click.wav'
import success from '../assets/sound/success-Sound.wav'
import error from '../assets/sound/error_sound.wav'

const useSound = () => {
    const playSound = useCallback((type) => {
        let sound;

        // Check the type of sound and create a new Audio instance
        if (type === 'click') {
            sound = new Audio(click); 
        } else if (type === 'success') {
            sound = new Audio(success);
        } else if (type === 'error') {
            sound = new Audio(error);
        } else {
            console.error('Unknown sound type');
            return;
        }

        // Play the sound and catch any errors
        if (sound) {
            sound.play().catch(e => {
                console.error('Error playing sound:', e);
            });
        }
    }, []);

    return { playSound };
}

export default useSound;
