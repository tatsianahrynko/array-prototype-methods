const array = require('./array.json'); //imported file

const filteredArray = array.filter((element) => element.totalWithTax === 120.75);
//console.log(filteredArray);

const foundObject = array.find((element1) => element1._id === '6455b91ce92cad00367c6686');
//console.log(foundObject);

const foundObject1 = array.find((element1) => element1.totalWithTax === 120.75);
//console.log(foundObject1);
//console.log(JSON.stringify(foundObject1, null, 2)); //array of small products

const mappedArray = array.map((e) => {
    return {
        orderId: e._id,
        amountToPay: e.totalWithTax1 || 0 
}
});

//console.log(mappedArray);

//array.forEach((element) =>  console.log(element._id));
array.forEach((element) =>  console.log(element));
