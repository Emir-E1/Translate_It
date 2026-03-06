import { useEffect, useState } from "react";

function useDebounce(input) {
  const [debouncedInput, setDebouncedInput] = useState(input);
  // get wut need to be waited
  //give a time to debounce 500ms
  // return it
  const oldInput = input;
  useEffect(() => {
    const debounceInput = setTimeout(() => {
      setDebouncedInput(oldInput);
    }, 1000); //made the delay of 1second
    return () => {
      clearTimeout(debounceInput);
    };
  }, [oldInput]);

  return debouncedInput;
}

export default useDebounce;
