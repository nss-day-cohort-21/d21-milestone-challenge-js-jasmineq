let height = document.getElementById("height-input");
let character = document.getElementById("char-input");
let treeButton = document.getElementById("grow-tree");

//function to initiate tree button
treeButton.addEventListener("click", function(event) {
  // console.log(height.value);
  // console.log(character.value);
  let tree = ""; //*
  let space = ' ';
  let numChars = ''

  for (let i = 0; i < height.value; i++) {
    //adding 1 to i for character
    let currentNum = i + 1;
    //repeating spaces while subtracting from current number from height
    let numSpaces = space.repeat(height.value - currentNum);
    //repeating character while adding to i and subtracting spaces
    let growth = character.value.repeat(i + 1 + currentNum -1 );
    console.log("", numSpaces, growth);

    //growing trees
    if (tree.length < 1) {
      tree += numChars;
    }
  }
});



// for (let j = height.value; j > 0; j--) {
      // space = " ".repeat(j);

    // if tree is less than i; add two * and 6 spaces while -- spaces and ++ stars

//       if (tree.length < 1) {
//         console.log('looking for tree', tree.length);
//         tree += character.value;
//         console.log('tree', tree);
//         row = tree;
//         console.log('row', row);
//       } else {
//         tree += character.value;
//         console.log('tree', tree);
//         // row = space + tree;
//       }
//       // console.log(row);
//     };
//   }
// });
