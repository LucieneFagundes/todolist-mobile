import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

type Props = {
	taskName: string;
	onRemove?: () => void;
};

export function Tasks({ taskName, onRemove }: Props) {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<View style={styles.container}>
			<BouncyCheckbox
				fillColor={isChecked ? "#5E60CE" : "#4EA8DE"}
				onPress={() => setIsChecked(!isChecked)}
				isChecked={isChecked}
			/>
			<Text style={isChecked ? styles.taskChecked : styles.taskUncheked}>
				{taskName}
			</Text>
			<TouchableOpacity>
				<AntDesign style={styles.icon} name="delete" size={16} onPress={onRemove} />
			</TouchableOpacity>
		</View>
	);
}
