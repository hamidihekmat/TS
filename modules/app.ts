interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
}

const apple: Product = {
  id: 'aetaodfpqe',
  name: 'apple',
  desc: 'Green Apple',
  price: 2.99,
};

console.log(apple.name);
