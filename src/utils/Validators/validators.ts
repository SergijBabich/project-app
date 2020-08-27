
export const required = (value: string): undefined | string => {
  if (value)  return;
  return 'Field is required';
  
};
  
export const requiredFieldMaxValue = (value: string): undefined | string => {
  if (value) {if (value.length > 20)  return `Max length is ${20} symbols`;
    return;
  }
  return 'Field is required';
};

export const checkformat = (value: string): undefined | string => {
  if (value) {if (value !== value.replace(/[^A-Za-z]/ig, ''))  return 'must contain only English letters';
    return;
  }
  return 'Field is required';
};
  
  
export const maxLengthCreator = (maxLength: number) => (value: string): undefined | string => {
  if (value.length > maxLength)  return `Max length is ${maxLength} symbols`;
  return;
  
};

export const minLengthCreator = (minLength: number) => (value: string): undefined | string => {
  if (value.length < minLength) return `Min length is ${minLength} symbols`;
  return;
};