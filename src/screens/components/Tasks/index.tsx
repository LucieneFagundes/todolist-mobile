import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

type ITask = {
	id: number;
	content: string;
	done: boolean;
};

type Props = {
	task: ITask;
	onCheckedChanged: () => void;
	onRemove?: () => void;
};

export function Tasks({ task, onCheckedChanged, onRemove }: Props) {
	return (
		<View style={styles.container}>
			<BouncyCheckbox
				fillColor={task.done ? "#5E60CE" : "#4EA8DE"}
				onPress={onCheckedChanged}
				isChecked={task.done}
			/>
			<Text style={task.done ? styles.taskChecked : styles.taskUncheked}>
				{task.content}
			</Text>
			<TouchableOpacity>
				<AntDesign
					style={styles.icon}
					name="delete"
					size={16}
					onPress={onRemove}
				/>
			</TouchableOpacity>
		</View>
	);
}
