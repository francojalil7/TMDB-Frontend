import { useState } from "react";

export const useCheckLoader = () => {
  const [louding, setLouding] = useState(true);

  const checkLouding = (arreglo: any[]) => {
    if (arreglo.length > 1) {
      setLouding(false);
    }
  };
  return {
    louding,
    setLouding,
    checkLouding,
  };
};

export default useCheckLoader;
