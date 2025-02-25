'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation.js';

const Modal = dynamic(() => import('../components/Modal'));

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
    const [modalSize, setModalSize] = useState();
    const [modalContent, setModalContent] = useState();
    const [modalState, setModalState] = useState();
    const pathname = usePathname();

    return <ModalContext.Provider value={{}}>
        {children}
        <Modal state={modalState}>{modalContent}</Modal>
    </ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext);