import React from "react";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import { Text } from "react-native";

type SmsModalProps = {
  visible: boolean;
  onClose: () => void;
};
export default function SmsModal({ visible, onClose }: SmsModalProps) {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onClose}
          contentContainerStyle={containerStyle}
        >
          <Text>SMS</Text>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
