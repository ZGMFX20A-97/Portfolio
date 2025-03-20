import { Box, Typography } from "@mui/material";
import { Website } from "../../utils/Type";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

//Project展示カード

const WebsiteCardContainer = ({ website }: { website: Website }) => {
	return (
		<Box
			component="a"
			href={website.url}
			target="_blank"
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				overflow: "hidden",
				width: "auto",
				height: "290px",
				gap: 2,
				color: "#C1C2C2",
				backgroundColor: "#111111",
				borderRadius: 5,
				transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				"&:hover": {
					transform: "scale(1.01) translateY(-5px)",
					boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
					backgroundImage: "linear-gradient(135deg, #222222 0%, #333333 100%)"
				}
			}}
		>
			<Box
				component="img"
				src={website.imgUrl}
				sx={{ width: "480px", height: "270px", borderRadius: 2, marginLeft: 2 }}
			></Box>
			<Box sx={{ display: "flex", flexDirection: "column", height: "92%" }}>
				<Typography
					variant="body1"
					sx={{ whiteSpace: "break-spaces" }}
				>
					{website.introduction}
				</Typography>
				<Typography
					variant="body2"
					sx={{ display: "flex", flexDirection: "row", marginTop: "auto" }}
				>
					{website.name}
					<LinkOutlinedIcon sx={{ height: "20px" }} />
				</Typography>
			</Box>
		</Box>
	);
};

export default WebsiteCardContainer;
