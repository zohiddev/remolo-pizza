export const collectFormData = (e) => {
    const data = {};
    let target = e.target.elements;
    for (let i = 0; i < target.length - 1; i++) {
      data[target[i].name] = target[i].value;
    }
    return data;
};