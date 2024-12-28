import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import QuestionCard from '../components/QuestionCard'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useQuizContext } from '../providers/QuizProvider';
import { useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';
import LottieView from 'lottie-react-native';
import party from '../../assets/party.json';

export default function QuizScreen() {
    const { question, questionIndex, onNext, score, totalQuestions, bestScore } = useQuizContext();
    const { time, startTimer, clearTimer } = useTimer(20);

    useEffect(() => {
        startTimer();

        return () => {
            clearTimer();
        }
    }, [question]);

    useEffect(() => {
        if (time <= 0) {
            onNext();
        }
    }, [time]);

    console.log("Quiz screen rerender");

    return (
        <SafeAreaView style={styles.page}>
            {/* Background */}
            <View style={styles.background}>
                <ImageBackground
                    source={require('../../assets/question.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>
                        Question {question ? questionIndex + 1 : totalQuestions}/{totalQuestions}
                    </Text>
                </View>

                {/* Body */}
                {question ? (
                    <View>
                        <QuestionCard question={question} />
                        <Text onPress={clearTimer} style={styles.time} > {time} sec  </Text>
                    </View>
                ) : (
                    <Card title="Well done">
                        <LottieView
                            style={{ width: 100, height: 100 }}
                            autoPlay
                            source={require('../../assets/party.json')}
                        />
                        <Text> Correct answers: {score}/{totalQuestions} </Text>
                        <Text> Best score: {bestScore} </Text>
                    </Card>
                )}

                {/* Footer */}
                <CustomButton
                    title="Next"
                    onPress={onNext}
                    rightIcon={
                        <FontAwesome6
                            name="arrow-right-long"
                            size={16}
                            color="white"
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.5,
    },
    backgroundImage: {
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
    },

    title: {
        textAlign: "center",
        color: "#005055",
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 20,
    },

    time: {
        textAlign: "center",
        marginTop: 15,
        color: "#005055",
        fontWeight: "bold",
        fontSize: 15,
    },
});
