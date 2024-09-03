const a_sequence = [1, 3, 5, 7];
a_sequence.push(a_sequence[a_sequence.length - 1] + 2);
console.log(a_sequence); 

const b_sequence = [2, 4, 8, 16, 32, 64];
b_sequence.push(b_sequence[b_sequence.length - 1] * 2);
console.log(b_sequence); 

const c_sequence = [0, 1, 4, 9, 16, 25, 36];
const next_c = Math.pow(c_sequence.length, 2);
c_sequence.push(next_c);
console.log(c_sequence); 

const d_sequence = [4, 16, 36, 64];
const next_d = Math.pow(d_sequence.length * 2, 2);
d_sequence.push(next_d);
console.log(d_sequence); 

const e_sequence = [1, 1, 2, 3, 5, 8];
const next_e = e_sequence[e_sequence.length - 1] + e_sequence[e_sequence.length - 2];
e_sequence.push(next_e);
console.log(e_sequence); 

const f_sequence = [2, 10, 12, 16, 17, 18, 19];
let next_f = f_sequence[f_sequence.length - 1] + 1;
while (!next_f.toString().includes('1')) {
    next_f++;
}
f_sequence.push(next_f);
console.log(f_sequence); 