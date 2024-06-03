import { configureStore , Tuple} from "@reduxjs/toolkit";
// import getDefaultMiddleware from "@reduxjs/toolkit"
import reducer from "./reducer";
import logger from './middleware/logger';
import func from "./middleware/func";
import toast from "./middleware/error";



// console.log(getDefaultMiddleware());



export default function (){
  return configureStore ({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware() ,
      toast,
      logger
      ],
  });
}; 
