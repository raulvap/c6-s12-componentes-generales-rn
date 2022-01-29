import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const handleChange = <K extends Object>(value: K, field: keyof T) => {
    //   (Clase 207): hacemos K extends Object para decirle que podemos recibir varios tipos de valores (string, boolean, number...)
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    handleChange,
  };
};
