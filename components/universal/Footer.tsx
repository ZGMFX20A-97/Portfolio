import { Box, Typography } from "@mui/material";

//フッターコンポーネント

const Footer: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				minWidth: "60vw",
				borderTop: "1px  #C1C2C2 solid",
				paddingTop: "10px",
				fontFamily: "Source Code Pro",
				opacity: 0.5
			}}
		>
			<Typography
				component="div"
				variant="body2"
			>
				© 2025 CatInPajamas. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
