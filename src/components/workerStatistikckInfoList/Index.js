import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectWorkerStatistickList } from "../../ui/workerInfo/reducer";
import { styles } from "./Style";
export const WorkerStatisticInfoList = () => {

  const workerStatistickList = useSelector(selectWorkerStatistickList);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.item}>
          <View style={styles.column}>
            <Text>FullDate</Text>
          </View>
          <View style={styles.column}>
            <Text>Visit</Text>
          </View>
          <View style={styles.column}>
            <Text>Finish</Text>
          </View>
          <View style={styles.column}>
            <Text>Worked</Text>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <FlatList
           data={workerStatistickList.filter((item, index, arr) => {
            return arr.map((i) => i.FullDate).indexOf(item.FullDate) === index;
          })}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.column}>
                <Text>{item.FullDate}</Text>
              </View>
              <View style={styles.column}>
                <Text>{item.timeICame}</Text>
              </View>
              <View style={styles.column}>
                <Text>{item.timeIWent}</Text>
              </View>
              <View style={styles.column}>
                <Text>{item.worked}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
