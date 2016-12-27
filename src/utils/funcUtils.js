export const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
});

export const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
});
