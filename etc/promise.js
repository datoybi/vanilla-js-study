function asyncItem() {
  return new Promise((resolve, reject) => {
    var item = [1, 2, 3];
    resolve(item);
  });
}

async function logItems() {
  var resultItem = await asyncItem();
  console.log(resultItem);
}

logItems();
