export const logger =(parameter) => (store) => (next) => (action) => {
  console.log(parameter);
  next(action)
};


export default logger

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log({ store, next, action });
//     };
//   };
// };

// export default logger;
