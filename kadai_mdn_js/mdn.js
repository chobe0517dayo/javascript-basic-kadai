const event = new Date;
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString(undefined, options));
