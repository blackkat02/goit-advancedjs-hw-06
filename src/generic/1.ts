/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T extends [string, number]>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<[string, number]>()
.then((data): void => {
  console.log(data);
});

export {};
