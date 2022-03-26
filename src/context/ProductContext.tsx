import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

type ProductContextType = {
  showSnackbar: boolean;
  updateShowSnackbar: (show: boolean) => void;
};

const ProductContext = createContext<ProductContextType>({
  showSnackbar: false,
  updateShowSnackbar: () => {},
});

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const updateShowSnackbar = (show: boolean) => {
    setShowSnackbar(show);
  };

  const context = useMemo(() => {
    return { showSnackbar, updateShowSnackbar };
  }, [showSnackbar]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
