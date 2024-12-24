import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useState } from "react";
import { Question } from "../types";




type QuestionCard = {

    question: Question;
}


export default function QuestionCard({ question }: QuestionCard) {

    const [selectedOption, setSelectedOption] = useState<string | undefined>();

    const onOptionSelected = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <Card title={question.title} >
            <View style={{ gap: 10 }}>
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}
                        isSelected={option === selectedOption}
                        onPress={() => onOptionSelected(option)}
                    />

                ))}

            </View>
        </Card>


    )
}


