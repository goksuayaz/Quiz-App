import { Pressable, Text, StyleSheet, View, PressableProps } from "react-native";

type CustomButtonProps = {
    title: string;
    rightIcon?: React.ReactNode;
} & PressableProps;

export default function CustomButton({ title, rightIcon, ...pressableProps }: CustomButtonProps) {
    console.log(pressableProps);

    return (
        <Pressable
            {...pressableProps}
            style={({ pressed }) => [
                styles.button,
                pressed && { opacity: 0.8 }
            ]}
        >
            <Text style={styles.buttonText}>{title || "Default Title"}</Text>
            {rightIcon ? (
                <View style={styles.rightIcon}>{rightIcon}</View>
            ) : null}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#005055",
        padding: 20,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 16,
        letterSpacing: 1.5,
    },

    rightIcon: {
        position: "absolute",
        right: 20,
    },
});
