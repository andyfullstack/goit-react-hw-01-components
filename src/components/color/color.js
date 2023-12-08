const randomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 111) +
    ',' +
    Math.round(Math.random() * 111) +
    ',' +
    Math.round(Math.random() * 111) +
    ',' +
    0.5 +
    ')';

  return color;
};

export { randomColor };
