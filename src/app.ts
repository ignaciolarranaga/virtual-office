const heading = document.querySelector<HTMLHeadingElement>('h1');

if (!heading) {
  throw new Error('Expected to find a heading element.');
}

heading.addEventListener('click', () => {
  heading.textContent = '🍐';
});
