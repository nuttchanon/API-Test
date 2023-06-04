export function generateFibonacciSequence(num) {
  const sequence = [0, 1];
  console.log(num);
    for (let i = 2; i < num; i++) {
      const nextValue = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextValue);
    }
    return sequence;
  }

export function generateFibonacciSum(num,sequence) {
    const sum=sequence.reduce((a, b) => a + b, 0)
    const a=[3,2,1,4,5];
    const b=a.indexOf((e)=>e===1);

    console.log(b);
    /*for (let i = 0; i <= num; i--) {
      const nextValue = sequence[i] + sequence[i-1];
      sum=sum+nextValue;
    }*/
    return sum;
  }
  

  