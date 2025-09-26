import { merge } from './merge';

const collection_1 = [9, 7, 5, 2, 1]; // desc
const collection_2 = [0, 1, 3, 4, 10]; // asc
const collection_3 = [0, 2, 2, 6, 8];  // asc

const result = merge(collection_1, collection_2, collection_3);
console.log('Merged ascending:', result);
