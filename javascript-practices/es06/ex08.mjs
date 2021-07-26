// 1. 
// unnamed export module에서 대상을 하나 import할 때는 이름 지정해야 함
import unnamedFunction from './ex08.01.mjs';
//import {add} from './ex08.02.mjs'; //error : default로 내보내면 객체분해X
import unnamedObject from './ex08.02.mjs';

// 2.
// named export module
import * as namedFunctions from './ex08.03.mjs';

// 3. 
// 특정 이름을 사용해서 구조 분해 가능
import {subtract} from './ex08.04.mjs';

// 4.
// mixed
import math,{add} from './ex08.05.mjs';

console.log(unnamedFunction(100,200));                                      // 1
console.log(unnamedObject.add(300,200));                                    // 1
console.log(namedFunctions.add(400,200),namedFunctions.subtract(400,200));  // 2
console.log(subtract(700,100));                                             // 3
console.log(math.add(800,200),add(100,50));                                             // 4
