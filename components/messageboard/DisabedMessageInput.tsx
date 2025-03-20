import { Box } from "@mui/material";

//登録していない場合に表示する入力欄

const DisabledMessageInput: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				width: "500px",
				height: "70px",
				backgroundColor: "#191E1E",
				opacity: 0.8,
				borderRadius: 3,
				fontWeight: "bold"
			}}
		>
			🔏ログインしてからコメントしよう！
		</Box>
	);
};

export default DisabledMessageInput;
