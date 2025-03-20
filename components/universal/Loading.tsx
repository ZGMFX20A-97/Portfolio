"use client";
import { Box, CircularProgress, Typography } from "@mui/material";

//UX向上のため、データ読み込み時のLoading画面を定義する

const Loading: React.FC = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			{/* Mui CircularProgress Component*/}
			<CircularProgress
				size={50}
				thickness={2}
				sx={{ color: "white" }}
			/>
			<Typography variant="h6">Loading...</Typography>
		</Box>
	);
};

export default Loading;
