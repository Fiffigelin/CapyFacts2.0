import React from "react";
import {
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SMS from "./SMS";

type SmsModalProps = {
  visible: boolean;
  onClose: () => void;
  fact: string;
};

export default function SmsModal({ visible, onClose, fact }: SmsModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "#e2d1ce",
            padding: 15,
            width: "90%",
            height: "auto",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <SMS props={fact} />
        </View>
      </View>
    </Modal>
  );
}
