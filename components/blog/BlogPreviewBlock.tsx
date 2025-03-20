import { Box } from "@mui/material";
import React from "react";
import { getBlog } from "../../utils/action";
import BlogCard from "./BlogCard";
import { Blog } from "../../utils/Type";

const BlogPreviewBlock = async () => {
	const BlogData = await getBlog();

	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", mt: "50px", rowGap: 5 }}
		>
			{BlogData.map((blog: Blog) => (
				<Box key={blog?.created_at}>
					<BlogCard blog={blog} />
				</Box>
			))}
		</Box>
	);
};

export default BlogPreviewBlock;
