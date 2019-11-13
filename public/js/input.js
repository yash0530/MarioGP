import Keyboard from './KeyboardState.js';

// every key has a function associated with function
// function performs the task on pressing that key

export function setupKeyboard(mario) {
    const input = new Keyboard();

    // Jump
    input.addMapping('Space', keyState => {
        if (keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
    });

    // Turbo
    input.addMapping('KeyS', keyState => {
        mario.turbo(keyState);
    });

    // Right
    input.addMapping('KeyD', keyState => {
        mario.go.dir += keyState ? 1 : -1;
    });

    // Left
    input.addMapping('KeyA', keyState => {
        mario.go.dir += keyState ? -1 : 1;
    });

    return input;
}
