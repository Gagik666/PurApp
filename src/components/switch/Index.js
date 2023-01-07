import React from "react";
import { View } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./reduser";
import { ref, onValue } from "firebase/database";
import {
  editInitial,
  editInputVisible,
  editModalVisivle,
  selectSvitch,
} from "./reduser";
import { styles } from "./Style";
import { addCompany } from "../../ui/signUp/components/modal/reducer";
import { db } from "../../firebase";

export const Switch = () => {
  const initial = useSelector(selectSvitch);
  const dispaatch = useDispatch();
  const change = () => {
    if (initial == 0) {
      dispaatch(editInitial(1));
      dispaatch(editInputVisible("flex"));
    } else {
      dispaatch(editModalVisivle(true));
      dispaatch(editInitial(0));
      dispaatch(editInputVisible("none"));
      getCompany();
    }
  };

  const getCompany = () => {
    const sRef = ref(db, "company/");
    onValue(sRef, (item) => {
      item.forEach((i) => {
        dispaatch(addCompany(i.key));
      });
    });
  };

  return (
    <View style={styles.wrapper}>
      <SwitchSelector
        initial={initial}
        onPress={(value) => {
          
          change(), dispaatch(editUser(value));
        }}
        textColor={"#26294C"}
        selectedColor={"white"}
        buttonColor={"#26294C"}
        fontSize={22}
        animationDuration={250}
        options={[
          { label: "Worker", value: "Worker" },
          { label: "Manager", value: "Manager" },
        ]}
      />
    </View>
  );
};
