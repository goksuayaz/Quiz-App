import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useState } from "react";
import { Question } from "../types";




type QuestionCard = {

    question: Question;
}


export default function QuestionCard({ question }: QuestionCard) {


    return (
        <Card title={question.title} >
            <View style={{ gap: 10 }}>
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}

                    />

                ))}

            </View>
        </Card>


    )
}


