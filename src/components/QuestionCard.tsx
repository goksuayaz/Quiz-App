import { View, Text } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Question } from "../types";

type QuestionCard = {
    question: Question;
}

export default function QuestionCard({ question }: QuestionCard) {

    useEffect(() => {
        console.log('Question card mounted');

        return () => {
            console.log('Question card unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('Question changed');
        // start listening this question updates

        return () => {
            console.log('Question card change: Cleanup');
            // stop listening this question updates
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
