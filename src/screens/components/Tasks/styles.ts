import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",

		marginBottom: 8,
		padding: 12,

		backgroundColor: "#262626",
		borderWidth: 1,
		borderColor: "#1F1F1F",
		borderRadius: 8,
	},

	task: {
		color: "#F2F2F2",
		fontSize: 14,
	},

	taskChecked: {
		color: "#808080",
		fontSize: 14,
		textDecorationLine: "line-through",
		flex: 2,
	},
	taskUncheked: {
		color: "#F2F2F2",
		fontSize: 14,
		flex: 2,
	},

	icon: {
		color: "#808080",
	},
});
