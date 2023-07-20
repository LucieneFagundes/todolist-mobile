import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
	Alert,
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Tasks } from "../components/Tasks";
import { styles } from "./styles";

type TypeTask = {
	id: number;
	content: string;
	done: boolean;
};

export function Home() {
	let counterTasksCompleted;

	const [tasks, setTasks] = useState<TypeTask[]>([]);
	const [newTask, setNewTask] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [tasksCompleted, setTasksCompleted] = useState(0);

	function handleTaskAdd() {
		setTasks((prevState) => [
			...prevState,
			{ id: tasks.length + 1, content: newTask.trim(), done: false },
		]);
		setNewTask("");
	}

	function handleTaskRemove(taskToDelete: number) {
		Alert.alert("Remover", `Deseja remover esta tarefa '${taskToDelete}'?`, [
			{
				text: "Sim",
				onPress: () => {
					setTasks((prevState) =>
						prevState.filter((task) => task.id !== taskToDelete)
					);

					setTasksCompleted((prevState) =>
						prevState - 1 < 0 ? 0 : prevState - 1
					);
				},
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	}

	function handleTaskChecked(taskToDone: number) {
		const taskIndex = tasks.findIndex((task) => {
			return task.id === taskToDone;
		});

		if (taskIndex !== -1) {
			const taskToUpdate = [...tasks];

			taskToUpdate[taskIndex].done = !taskToUpdate[taskIndex].done;

			setTasks(taskToUpdate);

			counterTasksCompleted = tasks.filter((t) => t.done === true).length;
			setTasksCompleted(counterTasksCompleted);
		}
	}

	const handleFocus = () => {
		setIsFocused(true);
	};
	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../../assets/logo.png")} />

			<View style={styles.painel}>
				<View style={styles.form}>
					<TextInput
						style={[styles.input, isFocused && styles.focused]}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="#6B6B6B"
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChangeText={(text) => setNewTask(text)}
						value={newTask}
					/>
					<TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
						<AntDesign name="pluscircleo" size={16} color="#FFF" />
					</TouchableOpacity>
				</View>
				<View style={styles.statusPanel}>
					<View style={styles.statusBox}>
						<Text style={[styles.statusTitle, { color: "#4EA8DE" }]}>
							Criadas
						</Text>
						<Text style={styles.status}>{tasks.length}</Text>
					</View>
					<View style={styles.statusBox}>
						<Text style={[styles.statusTitle, { color: "#8284FA" }]}>
							Concluídas
						</Text>
						<Text style={styles.status}>{tasksCompleted}</Text>
					</View>
				</View>

				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<Tasks
							key={item.id}
							task={item}
							onRemove={() => handleTaskRemove(item.id)}
							onCheckedChanged={() => handleTaskChecked(item.id)}
						/>
					)}
					ListEmptyComponent={() => (
						<View style={styles.listEmptyBox}>
							<MaterialCommunityIcons
								name="clipboard-text"
								style={styles.listEmptyIcon}
							/>
							<Text style={styles.listEmptyText}>
								Você ainda não tem tarefas cadastradas
							</Text>
							<Text style={styles.listEmptySubText}>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					)}
				></FlatList>
			</View>
		</View>
	);
}
