import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <View>
            <View
              style={{
                width: 20,
                height: 2,
                backgroundColor: "#fff",
                marginBottom: 5,
              }}
            />
            <View style={{ width: 10, height: 2.5, backgroundColor: "#fff" }} />
          </View>
          <Feather name="bell" size={24} color="white" />
        </View>
        <View style={styles.optionContainer}>
          <Text style={{ fontSize: 24, fontWeight: 600, color: "white" }}>
            Covid-19
          </Text>
          <View style={styles.countryOption}>
            <Image
              source={require("./assets/image 17.png")}
              style={styles.img}
            />
            <Text style={{ fontSize: 20, fontWeight: 500 }}>USA</Text>
            <MaterialCommunityIcons name="menu-down" size={30} color="gray" />
          </View>
        </View>
        <Text style={styles.heading}>Are youn feeling sick?</Text>
        <Text style={{ color: "white", marginBottom: 30 }}>
          If you feel sick with any of covid-19 symptoms please call or SMS us
          immediately for help.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageBtn}>
            <Feather name="message-circle" size={24} color="white" />
            <Text style={styles.buttonText}>Send SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={{color: '#0D1333', fontSize: 20, fontWeight: 500, marginBottom: 30 }}>
          Prevention
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View>
            <Image
              source={require("./assets/XMLID 80.png")}
              style={styles.demoImg}
            />
            <Text style={styles.instructionText}>
              Avoid close <br />
              contact
            </Text>
          </View>
          <View>
            <Image
              source={require("./assets/XMLID 15.png")}
              style={styles.demoImg}
            />
            <Text style={styles.instructionText}>
              Clean your <br />
              hands often
            </Text>
          </View>
          <View>
            <Image
              source={require("./assets/XMLID 20.png")}
              style={styles.demoImg}
            />
            <Text style={styles.instructionText}>
              Wear a <br />
              facemask
            </Text>
          </View>
        </View>
        <View style={styles.ad}>
        <Image source={require('./assets/Group.png')} style={styles.adImg} />
        <Image source={require('./assets/Rectangle 22.png')} style={styles.adBacground} />
        <View style={styles.adText}>

        <Text style={{color:'white', fontWeight:600, fontSize:20, marginBottom:10}}>Do your own test!</Text>
        <Text style={{color:'white', textAlign: 'left' }}>Follow the instructions to <br /> do your own test.</Text>
        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "50%",
    width: "100%",
    backgroundColor: "#473F97",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionContainer: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryOption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
    borderRadius: 30,
  },
  img: {
    width: 24,
    height: 24,
    backgroundColor: "white",
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
  callBtn: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FF4D58",
    borderRadius: 20,
  },
  messageBtn: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#4D79FF",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  demoImg: {
    width: 90,
    height: 90,
  },
  instructionText: {
    fontWeight: 500,
    color: '#0D1333',
  },
  ad: {
    marginTop: 40,
    width: '100%',
    position: "relative",
  },
  adBacground: {
  width : '100%',
  height: 104,
  borderRadius: 16,
  },
  adImg: {
    position: "absolute",
    marginTop: -13,
    left: 20,
    height: 115,
    width: 108,
    zIndex: 2,
  },
  adText: {
    position: "absolute",
    right: 30,
    top: 10,
  }
});
