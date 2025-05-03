import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Modal, StyleSheet, View, Animated } from 'react-native';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);
  const [subModals, setSubModals] = useState([]); // State for sub-modals
  const opacity = useRef(new Animated.Value(0)).current; // For animation

  useEffect(() => {
    if (modals.length > 0) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modals]);

  const openModal = modal => {
    setModals(prevModals => [...prevModals, modal]);
    opacity.setValue(0); // Reset opacity for new modal
  };

  const openSubModal = subModal => {
    setSubModals(prevSubModals => [...prevSubModals, subModal]);
  };

  const closeModal = callback => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModals(prevModals => {
        const newModals = prevModals.slice(1);
        if (callback) {
          setTimeout(callback, 100);
        }
        return newModals;
      });
    });
  };

  const closeSubModal = () => {
    setSubModals(prevSubModals => prevSubModals.slice(0, -1));
  };

  const values = { openModal, closeModal, openSubModal, closeSubModal };
  const modalContent = modals[0];
  const subModalContent = subModals[subModals.length - 1];

  return (
    <ModalContext.Provider value={values}>
      {children}
      <View>
        <Modal statusBarTranslucent visible={!!modalContent || !!subModalContent} animationType="fade" transparent={true}>
          <View style={[style.root, !!!subModalContent && { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
            <Animated.View style={[style.modalContent, { opacity }]}>
              {modalContent}
            </Animated.View>
            <View>
              <Modal statusBarTranslucent visible={!!subModalContent} animationType="fade" transparent={true}>
                <View style={style.subModalRoot}>
                  <Animated.View style={[{ flex: 1 }, { opacity }]}>
                    {subModalContent}
                  </Animated.View>
                </View>
              </Modal>
            </View>
          </View>
        </Modal>
      </View>
    </ModalContext.Provider>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
  },
  subModalRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
