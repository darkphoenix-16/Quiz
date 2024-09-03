import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



export function Intro({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View  style={{marginVertical:20 ,}}>
        <Image style={styles.img} source={{ uri: 'https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY=' }}/>
        <Text style={{fontFamily:"", textAlign:"center", fontSize:35, fontWeight:"700", textTransform:"uppercase"}}>Are you ready?</Text>
      </View>
      
      <TouchableOpacity style={{borderColor:"pink",borderWidth: 1, borderRadius: 25, padding: 10,backgroundColor:"#fb8cf392"    }} onPress={()=>{navigation.navigate("Score")}}>
        <Text style={{textAlign:"center", fontSize: 25}}>Start Quiz</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"white",
    justifyContent:"center",
  },
  img:{
    width:400,
    height:500,
    alignSelf:"center",

  }
})