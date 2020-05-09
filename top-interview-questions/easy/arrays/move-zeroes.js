/*
  Learning points:
    Was really close with first thought, but had something backwards- got stuck.
    Later realized was super close after trying a different method.

    2 Pointer, slow/fast


  Array[nums] -> Array[nums] same Array

  [] -> []

  [0] -> [0]
  [1] -> [1]
  [0,1] -> [1,0]
  [0,2,1,0] -> [2,1,0,0]
  [0,1,0,3,0,0,2] -> [1,3,2,0,0,0,0]

  1: bubble sort but just for zeros
  loop thru, if 0, swap with next element, continue til end of array (can even move end of array pointer down)
  n2 time, n space

  loop through once, keep counter of num zeroes, if not zero, push element to output array
  after loop, add count of zeroes to end output array
  n time, 2n space

  two pointers, rt at end, lt at end-1. shift both left until rt is not zero.
    then shift lt left until it points to a zero. Switch values, move rt to lt, shift lt left.

  n, n
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    //4th try: just optimization of 3rd. Same overall complexity
    for (let lt = 0, rt = 0; rt < nums.length; rt++) {
      if (nums[rt] !== 0) {
          let temp = nums[lt];
          nums[lt] = nums[rt];
          nums[rt] = temp;
          lt++;
      }
  }
    
  //First attempt: essentially a bubble sort, but just for 0s. n2 time, constant space
      
  // for (let i = nums.length -1; i > 0; i--) {
    //   for (let j = 0; j < i; j++) {
    //     if(nums[j] === 0) {
    //       nums[j] = nums[j+1];
    //       nums[j+1] = 0;
    //     }
    //   }
    // }
  
  //  Second Attempt: n time, n space
  //     let outputArr = [];
  //     let zeroesCount = 0;
  //     for (let i = 0; i < nums.length; i++) {
  //         if (nums[i] === 0) {
  //             zeroesCount++;
  //         } else {
  //             outputArr.push(nums[i]);
  //         }
  
  //     }
  //     for (let i = 0; i < zeroesCount; i++) {
  //         outputArr.push(0);
  //     }
  //     for (let i = 0; i < nums.length; i++) {
  //         nums[i] = outputArr[i];
  //     }
      
  // Third try: n time, constant space
      
    // if (nums.length <= 1) return nums;
    // let lt, rt;
    // //find first zero:
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] === 0) {
    //     lt = i;
    //     rt = i+1;
    //     break;
    //   }
    // }
    // while (rt < nums.length) {
    //   // then increment right til not zero, swap, keep incrementing rt
    //   if (nums[rt] !== 0) {
    //     nums[lt] = nums[rt];
    //     nums[rt] = 0; 
    //     lt++;
    //     rt++;
    //   } else {
    //     rt++;
    //   }
    // }
      

  
  };













// function moveZeroes(nums) {
//   for (let i = arr.length -1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if(nums[j] === 0) {
//         nums[j] = nums[j+1];
//         nums[j+1] = 0;
//       }
//     }
//   }
//   return nums;
// }

// function moveZeroes(nums) {
//   if (nums.length <= 1) return nums;
//   let lt = 0;
//   let rt = 1;
//   //find first zero:
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       lt = i;
//       rt = i+1;
//       break;
//     }
//   }
//   while (rt < nums.length) {
//     //increment both til lt is zero
//     //if (lt !== 0) {
//     //  lt++;
//     //  rt++;
//     //} 
//     // then increment right til not zero, swap, keep incrementing rt
//     if (nums[rt] !== 0) {
//       nums[lt] = nums[rt];
//       nums[rt] = 0; 
//       lt++;
//       rt++;
//     } else {
//       rt++;
//     }
//   }
// }





// function moveZeroes(nums) {
//   if (nums <= 1) return nums;
//   let rt = nums.length - 1;  //3
//   let lt = rt - 1;  //2
//   while(lt >= 0) {
//     if (nums[rt] === 0) {
//       rt--;
//       lt--;
//     } else if (nums[lt] === 0) {
//       nums[lt] = nums[rt];
//       nums[rt] = 0;
//       rt = lt;
//       lt--;
//     } else {
//       rt--;
//       lt--;
//     }
//   }

//   return nums;
// }