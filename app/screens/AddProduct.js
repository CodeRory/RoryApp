import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppPicker';
import SubmitButton from '../components/SubmitButton';



import FormImagePicker from "../components/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});



function AppProduct() {
  

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />        
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <FormImagePicker name="images" />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AppProduct;



















/* import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import ImageInput from "../components/ImageInput";

import FormImagePicker from '../components/FormImagePicker';

 

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
}); 


    

function AddProduct() {

    const [imageUri, setImageUri] = useState();
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled)
                setImageUri(result.uri)
        } catch (error) {
            alert('Error', error)
        }
        
    }

    const requestPermission = async() => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) alert('You need to enable permission to access the library')
    }

    useEffect( () => {
        requestPermission();
    }, [])

    return (
        <View style={styles.container}>
          <AppForm
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: null,
              images: [],
            }}
            onSubmit={(values) => console.log(location)}
            validationSchema={validationSchema}
          >
          
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
              width={120}
            />
            
            
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />
            
            <ImageInput imageUri={imageUri} onPress={ selectImage}/>
            
            <SubmitButton title="Post" />
          </AppForm>
        </View>
      );
    }
    
  

const styles = StyleSheet.create({
  categories: {
    marginLeft: 18,
    marginBottom: 20,
    
  },
  container: {
    padding: 10,
  },

  textCategories: {
    
  }
});

export default AddProduct;
 */