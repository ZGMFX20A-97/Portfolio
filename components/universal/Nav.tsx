import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

//ナビゲーションバーコンテナの様式を定義する
export const StyledButton = ({ children }: { children: ReactNode }) => (
	<Button
		sx={{
			fontFamily: "Source Code Pro",
			fontSize: 20,
			fontWeight: "bold",
			textTransform: "none",
			width: 150,
			color: "#C1C2C2",
			"&.MuiButton-text:focus": {
				color: "white"
			}
		}}
	>
		{children}
	</Button>
);

const Nav: React.FC = () => {
	return (
		<Box sx={{ margin: "0 auto" }}>
			<Link href="/">
				<StyledButton>Home</StyledButton>
			</Link>
			<Link href="/blog">
				<StyledButton>Blog</StyledButton>
			</Link>
			<Link href="/project">
				<StyledButton>Project</StyledButton>
			</Link>
			<Link href="/messageboard">
				<StyledButton>Message</StyledButton>
			</Link>
		</Box>
	);
};

export default Nav;
