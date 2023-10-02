import * as SMS from "expo-sms";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";

type SMSProps = {
  props: string;
};

export default function App({ props }: SMSProps) {
  const sms = "Heres a fascinating fact about capybaras: " + props;

  const [isAvailable, setIsAvailable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const checkSmsAvailability = async () => {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    };

    setMessage(sms);
    checkSmsAvailability();
  }, [setIsAvailable]);

  const sendSms = async () => {
    const { result } = await SMS.sendSMSAsync(
      phoneNumber as string,
      message as string
    );

    console.log(result);
  };

  return (
    <>
      <View>
        <Text style={{ fontSize: 18 }}>{sms}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          value={phoneNumber}
          placeholder="Phonenumber"
          onChangeText={(value) => setPhoneNumber(value)}
          style={styles.input}
        />
        {isAvailable ? (
          <Button title="Send SMS" onPress={sendSms} />
        ) : (
          <Button title="Send SMS" />
        )}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // alignContent: "center",
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
