"use client";
import {
	Avatar,
	Box,
	ListItem,
	Stack,
	styled,
	Typography
} from "@mui/material";
import { Blog } from "../../utils/Type";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import qiita from "../../public/qiita-svgrepo-com.svg";

//ブログのタグを入れるコンテナの様式を定義
const Item = styled(ListItem)(({ theme }) => ({
	backgroundColor: "#1A2027",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: "#C1C2C2",
	height: "25px",
	width: "auto",
	borderRadius: 3
}));

//ブログ展示カード

const BlogCard = ({ blog }: { blog: Blog }) => {
	//エポックタイムをわかりやすい日本時間に変換する
	const date = new Date(blog.created_at).toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	return (
		<Box
			component="a"
			href={blog.url}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				flexWrap: "wrap",
				overflow: "hidden",
				width: "650px",
				height: "250px",
				padding: 1,
				color: "#C1C2C2",
				backgroundColor: "#111111",
				borderRadius: 4,
				gap: 2,
				transition: "all 0.8s ease",
				boxShadow: 3,
				"&:hover": {
					transform: "translateX(50px)",
					boxShadow: "none",
					backgroundColor: "#222222"
				}
			}}
		>
			<Avatar
				src={blog.user.profile_image_url}
				sx={{ width: "50px", height: "50px" }}
			></Avatar>
			<Box sx={{ display: "flex", flexDirection: "column", marginTop: "-8px" }}>
				<Avatar src={qiita.src} />
				<Typography
					variant="body2"
					sx={{ width: "auto" }}
				>
					{date}
				</Typography>
			</Box>
			<Typography
				variant="h6"
				sx={{ marginLeft: "10px" }}
			>
				{blog.title}
			</Typography>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={{ xs: 1, sm: 1, md: 1 }}
				sx={{ marginLeft: "10px" }}
			>
				<LabelOutlinedIcon />
				{blog.tags.map((tag) => (
					<Item key={tag.name}>{tag.name}</Item>
				))}
			</Stack>
			<Box>♡ {blog.likes_count}</Box>
			<Typography
				sx={{
					alignSelf: "flex-end",
					width: "100%",
					marginLeft: "auto",
					opacity: 0.2,
					fontSize: 12
				}}
			>
				Powered by QIITA API
			</Typography>
		</Box>
	);
};

export default BlogCard;
