// *
// **
// ***
// ****

// let n=4;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<i+1;j++){
//         row+="*"
//     }
//     console.log(row);
// }

// 1
// 12
// 123
// 1234
// 12345

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<i+1;j++){
//         row+=j+1
//     }
//     console.log(row);
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<i+1;j++){
//         row+=i+1
//     }
//     console.log(row);
// }


// 1
// 10
// 101
// 1010
// 10101
// 101010

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     let sw=1;
//     for(let j=0;j<i+1;j++){
//         row+=sw;
//         if(sw==1){
//             sw=0;
//         }
//         else{
//             sw=1;
//         }
//     }
//     console.log(row);
// }

// 1
// 01
// 101
// 01010
// 101010

let n=5;
let sw=1;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i+1;j++){
        row+=sw;
        if(sw==1){
            sw=0;
        }
        else{
            sw=1;
        }
    }
    console.log(row);
}