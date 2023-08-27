export const  unixTime  = (...args: ConstructorParameters<DateConstructor>) => {
  return Math.floor(new Date(...args).getTime() / 1000)
}
