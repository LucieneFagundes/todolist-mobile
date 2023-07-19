import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Tasks } from "../components/Tasks";
import { styles } from "./styles";

export function Home() {
	const [tasks, setTasks] = useState<string[]>();
	const [isFocused, setIsFocused] = useState<boolean>(false);

	function handleRemoveTask() {}

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
					/>
					<TouchableOpacity style={styles.button}>
						<AntDesign name="pluscircleo" size={16} color="#FFF" />
					</TouchableOpacity>
				</View>
				<View style={styles.statusPanel}>
					<View style={styles.statusBox}>
						<Text style={[styles.statusTitle, { color: "#4EA8DE" }]}>
							Criadas
						</Text>
						<Text style={styles.status}>0</Text>
					</View>
					<View style={styles.statusBox}>
						<Text style={[styles.statusTitle, { color: "#8284FA" }]}>
							Concluídas
						</Text>
						<Text style={styles.status}>0</Text>
					</View>
				</View>

				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<Tasks key={item} taskName={item} onRemove={handleRemoveTask} />
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
