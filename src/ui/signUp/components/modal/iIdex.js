import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  editModalVisivle,
  selectModalVisible,
} from "../../../../components/switch/reduser";
import { styles } from "./Style";
import { Ionicons } from "@expo/vector-icons";
import { editCompanyName, selectCompany } from "./reducer";

export const ModalWidow = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(selectModalVisible);
  const company = useSelector(selectCompany);
  const closeModal = () => {
    dispatch(editModalVisivle(false));
  };

  return (
    <Modal visible={modalVisible}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => closeModal()}
          style={{ alignSelf: "flex-start" }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <FlatList
          data={company.companyList.filter(
            (item, index) => company.companyList.indexOf(item) === index
          )}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View style={styles.itemView}>
                <View style={styles.imageView}>
                  <Image
                    style={styles.image}
                    source={require("../../../../../assets/person.png")}
                  />
                </View>
                <View style={styles.textView}>
                  <Text style={{}}>{item}</Text>
                </View>
                <View style={styles.touch}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(editCompanyName(item)),
                        dispatch(editModalVisivle(false));
                    }}
                  >
                    <Text style={styles.txtAdd}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.borderBottomView}></View>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};
