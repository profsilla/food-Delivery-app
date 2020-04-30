import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  label,
  Button
} from "react-native";
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js" />;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIDwCrI-pITAHmeXGsuMP1NgY8mT0nqOo",
  authDomain: "food-delivery-app-57fa1.firebaseapp.com",
  databaseURL: "https://food-delivery-app-57fa1.firebaseio.com",
  projectId: "food-delivery-app-57fa1",
  storageBucket: "food-delivery-app-57fa1.appspot.com",
  messagingSenderId: "183158498994"
};
firebase.initializeApp(config);

const db = firebase.firestore();
// import

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View>
          <Text>Email</Text>
          <TextInput placeholder="Email" id="nameInput" onChange={handlename} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            id="passInput"
            onChange={handlepass}
          />
        </View>
        <View>
          <Button onPress={handlesubmit} title="Sign In" />
        </View>
      </View>
    );
  }
}
const handlename = e => {
  this.setState({ nameInput: e.target.value });
};

const handlepass = e => {
  this.setState({ passInput: e.target.value });
};

const handlesubmit = e => {
  e.preventDefault();
  db.collection("users").add({
    email: this.state.nameInput,
    password: this.status.passInput
  });
  this.setState({ nameInput: "", passInput: "" });
  alert("Done");
};
