import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../firebase/reducer";
import { styles } from "./Style";
import * as ImagePicker from "expo-image-picker";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ref as dbRef, update } from "firebase/database";
import { db } from "../../../../firebase";

export const EditProfileUser = ({nav}) => {
  const currentUser = useSelector(selectCurrentUser);
  const storage = getStorage();
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState(null);

 

  useEffect(() => {
    const uploadImage = async () => {
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = () => {
          reject(new TypeError("network reqquest failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };

      const storageRef = ref(storage, "users/" + Date.now());
      const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            update(dbRef(db, "/users/" + currentUser.uid), {
                imgUrl: downloadURL,
              }).then(() => {
                  nav()
                  console.log("stacvec");
              });
          });
        }
      );
    };
    if (image != null) {
      uploadImage();
      setImage(null);
    }
  }, [image]);
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{uri: currentUser.imgUrl}}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.btnText}>Change Picture</Text>
      </TouchableOpacity>
    </View>
  );
};
