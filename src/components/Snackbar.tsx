import { useEffect, useState } from "react";
import { View } from "react-native";
import { Snackbar as SnackBar } from "react-native-paper";

type SnackBarProps = {
  props: boolean;
};
export default function Snackbar({ props }: SnackBarProps) {
  const [visible, setVisible] = useState(false);

  function onDismissSnackBar() {
    setVisible(false);
  }

  useEffect(() => {
    if (props) {
      // Visa Snackbar endast om props är true
      setVisible(true);
    }
  }, [props]);

  return (
    <View>
      <SnackBar visible={visible} duration={3000} onDismiss={onDismissSnackBar}>
        CapyCard already exists in favorites
      </SnackBar>
    </View>
  );
}
