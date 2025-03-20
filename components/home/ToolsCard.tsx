import { Box, CardContent, Typography } from "@mui/material";
import vscode from "../../public/ToolsIconImgs/vscode-svgrepo-com.svg";
import jupyter from "../../public/ToolsIconImgs/jupyter-svgrepo-com.svg";
import openai from "../../public/ToolsIconImgs/openai-svgrepo-com.svg";
import notion from "../../public/ToolsIconImgs/notion-svgrepo-com.svg";
import intellij from "../../public/ToolsIconImgs/intellij-idea-svgrepo-com.svg";

//常用ツール展示カード

const ToolsCard = () => {
	return (
		<CardContent
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				flexWrap: "wrap",
				width: "400px",
				height: "auto",
				backgroundColor: "#111111",
				border: "0.5px rgba(155,156,156,0.5) solid",
				color: "#C1C2C2 solid",
				borderRadius: 3,
				rowGap: 2
			}}
		>
			<Typography
				component="div"
				sx={{
					width: "100vw",
					fontFamily: "Source Code Pro",
					fontWeight: "bold"
				}}
			>
				⚒️Commonly Used Tools
			</Typography>
			<Box
				component="div"
				sx={{ display: "flex", justifyContent: "center", gap: 5 }}
			>
				<Box
					component="img"
					src={vscode.src}
					sx={{ width: "40px" }}
				></Box>
				<Box
					component="img"
					src={intellij.src}
					sx={{ width: "40px" }}
				></Box>
				<Box
					component="img"
					src={jupyter.src}
					sx={{ width: "50px" }}
				></Box>
				<Box
					component="img"
					src={openai.src}
					sx={{ width: "45px" }}
				></Box>
				<Box
					component="img"
					src={notion.src}
					sx={{ width: "45px" }}
				></Box>
			</Box>
		</CardContent>
	);
};

export default ToolsCard;
