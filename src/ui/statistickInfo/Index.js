import React, { useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WorkerStatisticInfoList } from "../../components/workerStatistikckInfoList/Index";
import { useSelector } from "react-redux";
import {
  selectWorkerItem,
  selectWorkerStatistickList,
} from "../workerInfo/reducer";
import { WorkerItem } from "../../components/workerItem/Index";
import { Header } from "../../components/header/Index";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { selectlogOut } from "../../components/header/reduser";

export const StatistickInfo = () => {
  const navigation = useNavigation();
  const workerItem = useSelector(selectWorkerItem);
  const workerStatistickList = useSelector(selectWorkerStatistickList);
  const logOut = useSelector(selectlogOut);
  logOut ? navigation.navigate("SignIn") : null;
  const getHtml = () => {
    return (html = `
  <html>
    <head>
      <style >
        table {
          border-collapse: collapse;
        }
        table tbody tr th, td {
          padding: 10px;
        }
      </style>
    </head>
    <body>
    <div style="display: flex; flex-direction: row; align-items: center"> 
    <h2>Employee &#8242 &#160</h2>
    <span>${workerItem.userName}</span>
    </div> 
      <div> 
        <table border = "1" style="width:100%; text-align: center;">
        <tbody>
          <tr>
            <th>Data</th>
            <td>Visit</td>
            <td>Finish</td>
            <td>Worked</td>
            <td>Rating</td>
          </tr>
        </tbody>
        
        ${workerStatistickList.filter((item, index, arr) => {
          return arr.map((e) => e.FullDate).indexOf(item.FullDate) === index;
        }).map(
          (i) =>
            `<tbody> 
                <tr>
                  <th>${i.FullDate}</th>
                  <td>${i.timeICame}</td>
                  <td>${i.timeIWent}</td>
                  <td>${i.worked}</td>
                  <td>${i.rating}</td>
                </tr>
              </tbody>`
        )}
            </table>
      </div>
    </body>
  </html>`);
  };

  const generatedPdf = async () => {
    let file = await printToFileAsync({
      html: getHtml(),
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return (
    <View style={styles.container}>
      <Header />
      <WorkerItem val={workerItem} />
      {/* <View style={styles.header}>
        <View style={styles.viewTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={{ flex: 9, width: "95%", marginTop: 10 }}>
        <WorkerStatisticInfoList
          workerStatisticInfoList={workerStatistickList}
        />
      </View>
      <View style={{ flex: 1, width: "95%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxtColor} onPress={() => generatedPdf()}>
            Generated
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
