export const required = (value: any) => {
    if (value)  return undefined;
    return 'Field is required';
  
  }
  
  export const requiredFieldMaxValue = (value: any) => {
    if (value) {if (value.length > 20)  return `Max length is ${20} symbols`;
      return undefined;
      }
    return 'Field is required';
  }

  export const checkformat = (value: any) => {
    if (value) {if (value !== value.replace(/[^A-Za-z]/ig, ''))  return `must contain only English letters`;
      return undefined;
      }
    return 'Field is required';
  }
  
  
  export const maxLengthCreator = (maxLength: any) => (value) => {
    if (value.length > maxLength)  return `Max length is ${maxLength} symbols`;
    return undefined;
  
  }

  export const minLengthCreator = (minLength: any) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`;
    return undefined;
  }