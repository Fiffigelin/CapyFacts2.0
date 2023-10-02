// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import { Modal } from "react-native-paper";
// import { MaterialIcons } from "@expo/vector-icons";

// type SmsModalProps = {
//   statement: boolean;
//   onClose: () => void;
// };
// export default function SmsModal({ statement, onClose }: SmsModalProps) {
//   const [openModal, setOpenModal] = useState(false);
//   const containerStyle = { backgroundColor: "white", padding: 20 };
//   return (
//     // <Modal
//     //   visible={visible}
//     //   onDismiss={onClose}
//     //   contentContainerStyle={containerStyle}
//     // >
//     //   <Text>SMS</Text>
//     // </Modal>
//     <Modal visible={statement} animationType="slide" transparent={true}>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "white",
//             padding: 15,
//             width: "90%",
//             height: "60%",
//             borderRadius: 10,
//           }}
//         >
//           <View
//             style={{
//               alignItems: "flex-end",
//             }}
//           >
//             <TouchableOpacity onPress={() => setOpenModal(false)}>
//               <MaterialIcons name="close" size={40} color="black" />
//             </TouchableOpacity>
//           </View>
//           <Text>En modal!</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// }
