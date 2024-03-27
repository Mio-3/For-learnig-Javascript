'use strict';
{
  let num = 10;
  const numBackup = num;
  num = 99;
  console.log(num);
  console.log(numBackup);

  const nums = [10,20,30];
  const numsBackup = [...nums];
  nums[0] = 99;
  console.log(nums);
  console.log(numsBackup);
  let a = 1000;
  do {
    a /= 3;
  } while(a > 10);
  console.log(a);
  function randomNumber (a,b) {
    let c =  Math.floor(Math.random() * (b - a)) + a;
    return c;
  }
  console.log(randomNumber(1,100));

  for(let i = 1; i <= 10;i++){
    console.log(i);
  }
}