// export const numbers = [1,2,3,4,5];

// export const world = () => {
//    console.log('Hello World');
// }

import {world} from './components/world.js'
 
export const hello = (user) => {
    world();
    console.log(`Hello, ${user}`);
}

export default hello;