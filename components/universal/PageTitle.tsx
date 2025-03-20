import { Typography } from "@mui/material";
import { ReactNode } from "react";

//ページごとの見出しの様式を統一するComponentを定義する

const PageTitle = ({ children }: { children: ReactNode }) => {
	return (
		<Typography
			variant="h2"
			sx={{
				fontFamily: "Source Code Pro",
				fontWeight: "bold",
				background: "linear-gradient(90deg white #C1C2C2)",
				transform: "translateY(100%)",
				// 下から上までスライドアップする動画を定義する
				animation: "slideUp 0.8s ease-out forwards",
				"@keyframes slideUp": {
					from: {
						transform: "translateY(100%)",
						opacity: 0
					},
					to: {
						transform: "translateY(0)",
						opacity: 1
					}
				}
			}}
		>
			{children}
		</Typography>
	);
};

export default PageTitle;
