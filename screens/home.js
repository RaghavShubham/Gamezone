import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Bhai fod game hai!", rating: 5, body: "Lorem ipsum", key: "1" },
    { title: "Behen fod game hai!", rating: 4, body: "Lorem ipsum", key: "2" },
    { title: "Uncle fod game hai!", rating: 3, body: "Lorem ipsum", key: "3" },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevData) => {
     return [
        review,
        ...prevData
      ]
    })
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview}/>
        </View>
      </TouchableWithoutFeedback>        
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review_Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    borderWidth: 1,
    borderColor: "#fff6f5",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#333',
  },
});
