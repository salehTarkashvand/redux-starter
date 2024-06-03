const toast = store => next => action =>{

    // console.log(action); 

    if(action.type === "error")
        console.log(`toastify:${action.payload.massage}`);
    else
        next(action)
}
export default toast