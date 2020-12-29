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

const button = document.querySelector('button');

button?.addEventListener('click', () => {
  console.log('Clicked');
});
