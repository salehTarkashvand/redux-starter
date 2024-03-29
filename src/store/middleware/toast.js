const toast = (store) => (next) => (action) => {
    const {type, payload} = action
    if (type === 'error') {
           console.log(payload.message);
    }
    next(action)
}

export default toast