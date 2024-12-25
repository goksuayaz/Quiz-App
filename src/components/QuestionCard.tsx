import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useEffect } from "react";
import { Question } from "../types";

type QuestionCard = {
    question: Question;
}

export default function QuestionCard({ question }: QuestionCard) {

    useEffect(() => {
        console.log('Question card mounted');
        // start listening to this question updates
        console.log('Question changed');

        return () => {
            console.log('Question card cleanup');
            // stop listening to question updates
        };
    }, [question]);


    return (
        <Card title={question.title}>
            <View style={{ gap: 10 }}>
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}
                    />
                ))}
            </View>
        </Card>
    );
}
