import { Box, Grid2, Typography } from "@mui/material";
import { Repository } from "../../utils/Type";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

//レポジトリを展示するためのカードコンポーネント

const RepositoryCard = ({ repository }: { repository: Repository }) => {
	//エポックタイムをわかりやすいように日本時間へ変換する
	const date = new Date(repository.created_at as string).toLocaleDateString(
		"ja-JP",
		{
			year: "numeric",
			month: "long",
			day: "numeric"
		}
	);

	return (
		<Grid2
			size={4}
			sx={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				overflow: "hidden",
				width: "380px",
				height: "200px",
				color: "white",
				padding: 1,
				gap: 1,
				backgroundColor: "#111111",
				borderRadius: 3,
				transition: "all 0.2s ease",
				boxShadow: 3,
				"&:hover": {
					transform: "scale(1.05) translateY(-1px)",
					boxShadow: "0 10px 24px rgba(0, 0, 0, 0.3)",
					backgroundImage: "linear-gradient(135deg, #222222 0%, #333333 100%)",
					border: "1px #C1C2C2 solid"
				}
			}}
		>
			<Typography
				variant="h5"
				sx={{ fontFamily: "Source Code Pro", fontWeight: "bold" }}
			>
				{repository.name}
			</Typography>
			<Typography
				variant="body2"
				sx={{
					width: "auto",
					marginTop: "8px",
					marginLeft: "0 auto",
					color: "#C1C2C2",
					fontFamily: "Source Code Pro"
				}}
			>
				{date}
			</Typography>
			<Typography
				variant="body1"
				sx={{ fontFamily: "Source Code Pro", color: "#C1C2C2" }}
			>
				{repository.description}
			</Typography>
			<Box sx={{ marginTop: "auto" }}>
				<Typography
					variant="body2"
					component="a"
					href={repository.html_url}
					target="_blank"
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 0.5,
						fontFamily: "Source Code Pro",
						width: "fit-content",
						color: "white"
					}}
				>
					Github.com
					<LinkOutlinedIcon />
				</Typography>
				<Typography
					variant="body2"
					component="a"
					href={repository.homepage as string}
					target="_blank"
					sx={{
						display: "flex",
						flexDirection: "row",
						fontFamily: "Source Code Pro",
						textOverflow: "ellipsiswidth",
						width: "fit-content",
						color: "white",
						gap: 0.5
					}}
				>
					{repository.homepage}
				</Typography>
			</Box>
		</Grid2>
	);
};

export default RepositoryCard;
