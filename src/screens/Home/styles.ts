import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0D0D0D",
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
	},
	logo: {
		marginTop: 24,
		marginBottom: 48,
	},

	painel: {
		backgroundColor: "#191919",
		width: "100%",
		paddingHorizontal: 12,
		flex: 1,
	},

	form: {
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		marginTop: -26,
		marginBottom: 32,
	},
	input: {
		width: "70%",
		backgroundColor: "#262626",
		padding: 12,
		marginRight: 10,
		borderRadius: 5,
		color: "#F2F2F2",
		fontSize: 16,
	},
	focused: {
		borderColor: "#8284FA",
		borderWidth: 2,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#1E6F9F",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 20,
	},

	statusPanel: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingBottom: 16,
	},
	statusBox: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	},

	statusTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},

	status: {
		color: "#f2f2f2",
		fontWeight: "bold",
		backgroundColor: "#222",
		paddingHorizontal: 8,
		borderRadius: 10,
		textAlign: 'center'
	},

	listEmptyBox: {
		borderTopWidth: 1,
		borderTopColor: "#262626",
		alignItems: "center",
		paddingVertical: 46,
		paddingHorizontal: 20,
	},

	listEmptyIcon: {
		color: "#6C6C6C",
		fontSize: 56,
		marginBottom: 16,
	},

	listEmptyText: {
		color: "#6C6C6C",
		fontSize: 14,
		textAlign: "center",
		fontWeight: "bold",
	},
	listEmptySubText: {
		color: "#6C6C6C",
		fontSize: 14,
		textAlign: "center",
	},
});
