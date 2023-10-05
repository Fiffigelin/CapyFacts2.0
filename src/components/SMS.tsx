import * as SMS from "expo-sms";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";

type SMSProps = {
  props: string;
};

export default function App({ props }: SMSProps) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const checkSmsAvailability = async () => {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    };

    setMessage("Here's a fascinating fact about capybaras: " + props);
    checkSmsAvailability();
  }, [setIsAvailable]);

  const sendSms = async () => {
    await SMS.sendSMSAsync(phoneNumber as string, message as string);
  };

  return (
    <>
      <View>
        <Text style={{ fontSize: 18 }}>{message}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          value={phoneNumber}
          placeholder="Phonenumber"
          onChangeText={(value) => setPhoneNumber(value)}
          style={styles.input}
        />
        <Button
          uppercase={true}
          textColor="#010101"
          mode="elevated"
          onPress={sendSms}
          disabled={!isAvailable}
        >
          Send
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "70%",
    paddingLeft: 20,
    borderRadius: 15,
  },
  factContainer: {
    fontSize: 18,
  },
});
