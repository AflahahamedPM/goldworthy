'use client'
import{ createContext, useContext, useState, useCallback } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isShowedSecondModal, setIsShowedSecondModal] = useState(false);
  const [firstModalWidth, setFirstModalWidth] = useState(36);
  const [firstModalCursor, setFirstModalCursor] = useState("pointer");
  const [navbar, setNavbar] = useState("Products");
  
  const openNCloseModal = useCallback(() => {
    setIsShowedSecondModal((prev) => !prev);
    setFirstModalWidth(36);
    setFirstModalCursor("pointer");
  }, []);

  const changeFirstModalWidth = useCallback(() => {
    setFirstModalWidth((previousState) => {
      return previousState == 36 ? 54 : 36;
    });
    setFirstModalCursor("default");
  }, []);

  const handleClick = useCallback(
    (e) => {
      const selectedItem = e.target.innerHTML;
      const routes = {
        Edition: "/edition",
        Studio: "/about",
        Contact: "/contact",
      };
      
      console.log(routes[selectedItem]);
      
      if (routes[selectedItem]) {
        openNCloseModal();
        setTimeout(() => {
          window.location.href = routes[selectedItem];
        }, 700);
        return;
      }
  
      if (selectedItem === navbar) {
        changeFirstModalWidth();
      } else {
        if (firstModalWidth === 54) {
          changeFirstModalWidth();
          setTimeout(() => {
            setNavbar(selectedItem);
            changeFirstModalWidth(); 
          }, 700);
        } else {
          setNavbar(selectedItem);
          changeFirstModalWidth();
        }
      }
    },
    [navbar, firstModalWidth, changeFirstModalWidth, openNCloseModal]
  );
  

  return (
    <ModalContext.Provider
      value={{
        isShowedSecondModal,
        firstModalWidth,
        firstModalCursor,
        navbar,
        openNCloseModal,
        setFirstModalWidth,
        setFirstModalCursor,
        setNavbar,
        handleClick,
        changeFirstModalWidth,
        setNavbar
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
