import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/header/Index";
import { styles } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { selectlogOut } from "../../components/header/reduser";
import { WorkerItem } from "../../components/workerItem/Index";
import { onValue, ref, update } from "firebase/database";
import { db } from "../../firebase";
import {
  editBtnRating,
  editSaveRatingDisplay,
  editWorkerItem,
  editWorkerStatistickList,
  selectBtnRating,
  selectSaveRating,
  selectWorkerItem,
} from "./reducer";
import { Statistick } from "../../components/statistick/Index";
import Slider from "@react-native-community/slider";
import { getDate } from "../../extensions/Time/Time";
import { selectCurrentUser } from "../../firebase/reducer";
import { Rating } from "../../components/Rating/Index";

export const WorkerInfo = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const workerItem = useSelector(selectWorkerItem);
  const saveRatingDisplay = useSelector(selectSaveRating);
  const btnRating = useSelector(selectBtnRating);
  const [rating, setRating] = useState(0);
  const logOut = useSelector(selectlogOut);
  const navigation = useNavigation();
  logOut ? navigation.navigate("SignUp") : null;

  onValue(ref(db, "users/" + `${route.params.uid}/`), (r) => {
    setTimeout(() => {
      dispatch(editWorkerItem(r.val()));
    }, 1000);
  });

  const ShowAllInfo = () => {
    navigation.navigate("StatistickInfo");

    onValue(ref(db, "/usersInfo/" + workerItem.uid), (r) => {
      setTimeout(() => {
        r.forEach((i) => {
          dispatch(editWorkerStatistickList(i.val()));
        });
      }, 1000);
    });
  };

  useEffect(() => {
    if (rating === 0) {
      dispatch(editBtnRating("none"));
    } else {
      dispatch(editBtnRating("flex"));
    }
  }, [rating]);

  useEffect(() => {
    onValue(ref(db, "users/" + `${route.params.uid}/`), (r) => {
      if (r.val().day === getDate()) {
        setTimeout(() => {
          onValue(ref(db, "usersInfo/" + `${route.params.uid}/` + `${getDate()}`), (r) => {
            if (r.val().rating === 0) {
              dispatch(editSaveRatingDisplay("flex"));
            } else {
              dispatch(editSaveRatingDisplay("none"));
            }
          });
        }, 1000);
       
      } else {
        dispatch(editSaveRatingDisplay("none"));
      }
    });

    // onValue(ref(db, "/usersInfo/" + workerItem.uid), (r) => {
    //   setTimeout(() => {
    //     r.forEach((i) => {
    //       if (i.key == getDate()) {
    //         onValue(
    //           ref(db, "usersRating/" + `${route.params.uid}/` + `${getDate()}`),
    //           (r) => {
    //             if (r.val().rating > 0) {
    //               dispatch(editSaveRatingContainer("none"));
    //             }
    //           }
    //         );
    //       }
    //     });
    //   }, 1000);
    // });
  }, []);

  const saveRating = () => {
    update(ref(db, "usersInfo/" + `${route.params.uid}/` + `${getDate()}`), {
      rating: rating,
    }).then(() => {
      navigation.navigate("Manager");
    });
  };
  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <Header />
        <WorkerItem val={workerItem} />
        
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Rating uid = {route.params.uid} />
          <Statistick countDay={workerItem.countDay} />
          <View style={[styles.ratingView, { display: saveRatingDisplay }]}>
            <Text>{rating}</Text>
            <Slider
              style={styles.slider}
              onValueChange={(value) => {
                setRating(Math.floor(value));
              }}
              minimumValue={1}
              maximumValue={5}
            />
            <TouchableOpacity
              style={{ display: btnRating }}
              onPress={() => saveRating()}
            >
              <Text>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => ShowAllInfo()}
              style={styles.button}
            >
              <Text style={styles.btnTxt}>Show all info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};
