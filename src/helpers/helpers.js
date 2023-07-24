export function sumAllPrice(arr) {
    return arr.reduce((a, b) => a + b.price * b.qty, 0).toLocaleString()
}

export const generateObjData = (e) => {
    const {target} = e
    const obj = {}
    for(let i = 0; i < target.elements.length-1; i++){
      obj[target.elements[i].name] = target.elements[i].value
    }
    return obj 
}

export const setFormValues = (data, form) => {
    for(let item in data){
      const {
        current: {elements},
      } = form
      if(elements[item]) {
        elements[item].value = data[item]
      }
    }
}

// export const setValues = (data) => {
//   for(let item in data){
//     const {
//       current: {elements},
//     } = form
//     if(elements[item]) {
//       elements[item].value = data[item]
//     }
//   }
// }
