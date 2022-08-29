const json = [
  {
    fruits: [
      {
        sweet: [
          { name: "apple", quantity: 30 },
          { name: "watermelon", quantity: 100 },
        ],
        sour: [
          { name: "lemon", quantity: 4 },
          { name: "kiwi", quantity: 10 },
        ],
      },
    ],
  },
];

const [newJson] = [...json];
const [fruit] = newJson.fruits;
console.log(fruit.sour);
/*
[
	{ name: "lemon", quantity: 4 },
	{ name: "kiwi", quantity: 10 },
]
*/
