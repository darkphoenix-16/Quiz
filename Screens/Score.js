import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export function Score({ navigation }) {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [ans, setAns] = useState();
    const [score, setScore] = useState(0);
   
    function Quiz() {
        fetch('https://opentdb.com/api.php?amount=15&difficulty=easy&type=boolean&encode=url3986')
            .then(response => response.json())
            .then((result) => {
                // console.log(result.results)
                setQuestions(result.results)
                setAns(result.results)
            })

    }
    useEffect(() => {
        Quiz()
    }, [])

    const Next = () => {
        setQues(ques + 1)
       
    }

    const restart = () => {
        setQues(0)
        setScore(0)
    }
    const prev = () => {
        setQues(ques - 1)
        // { select &&   setScore(score - 1) }
    }

    const select = (_option) => {
            if (_option === ans[ques].correct_answer) {
              setScore(score + 1);
            }
            
        // console.log(_option === ans[ques].correct_answer)
        { ques !== 14 && setQues(ques + 1) }

        // { ques === 14 && res() }
        
    }
    const res = () => {
        Alert.alert("Your Score is" + "" + score + "/15")

        navigation.navigate("Intro")
        // console.log(score+"/15");

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                questions &&
                <View style={styles.container}>
                    <View style={styles.question}>
                        <Text style={{ fontSize: 28 }}> {decodeURIComponent(questions[ques].question)}</Text>

                    </View>

                    { ans && <View>

                        <TouchableOpacity style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 10, backgroundColor: "#fb8cf392",}} onPress={() => { select(ans[ques].correct_answer) }}>
                            <Text style={{ textAlign: "center", fontSize: 25 }}>{decodeURIComponent(ans[ques].correct_answer)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 10, backgroundColor: "#fb8cf392", marginVertical: 15, }} onPress={() => { select(ans[ques].incorrect_answers) }}>
                            <Text style={{ textAlign: "center", fontSize: 25 }}>{decodeURIComponent(ans[ques].incorrect_answers)}</Text>
                        </TouchableOpacity>

                    </View>}

                    <View style={styles.btn} >
                        {ques !== 14 &&
                            <TouchableOpacity  style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 15, backgroundColor: "#fb8cf392", }} onPress={Next}>
                                <Text style={{ textAlign: "center", fontSize: 20 }}>NEXT</Text>
                            </TouchableOpacity>

                        }
                        {ques === 14 &&
                            <TouchableOpacity style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 15, backgroundColor: "#fb8cf392" }} onPress={res}>
                                <Text style={{ textAlign: "center", fontSize: 20 }}>END</Text>
                            </TouchableOpacity>
                        }

                        { ques > 0 &&<TouchableOpacity style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 15, backgroundColor: "#fb8cf392" }} onPress={prev}>
                            <Text style={{ textAlign: "center", fontSize: 20 }}>PREVIOUS</Text>
                        </TouchableOpacity>
                        }
                        {ques > 0 && ques !==14 && <TouchableOpacity style={{ borderColor: "pink", borderWidth: 1, borderRadius: 25, padding: 15, backgroundColor: "#fb8cf392" }} onPress={restart}>
                            <Text style={{ textAlign: "center", fontSize: 20 }}>RESTART</Text>
                        </TouchableOpacity>
                        }


                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: "center"
    },
    question: {
        backgroundColor: "#fb8cf392",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        padding: 15,
        paddingHorizontal: 5,
        marginBottom: 15,

    },
 
    btn: {
        marginTop: 50,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    }

});