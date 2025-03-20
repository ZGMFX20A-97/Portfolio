import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Nav from "./Nav";
import MyAvatar from "./MyAvatar";
import Footer from "./Footer";

const Frame = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				width: "65vw",
				opacity: "0.8"
			}}
		>
			<Nav />
			<MyAvatar />
			{children}
			<Box sx={{ mt: "auto" }}>
				<Footer />
			</Box>
		</Box>
	);
};

export default Frame;
