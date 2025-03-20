import { Box } from "@mui/material";
import { Suspense } from "react";
import TypingEffect from "../../../components/universal/typingEffect";
import PageTitle from "../../../components/universal/PageTitle";
import BlogPreviewBlock from "../../../components/blog/BlogPreviewBlock";
import Loading from "../../../components/universal/Loading";

//ブログページ

const BlogPage: React.FC = () => {
	return (
		<Box
			mt="50px"
			mb="100px"
		>
			<Box>
				<PageTitle>BLOG</PageTitle>
				<TypingEffect
					delay={700}
					sx={{ fontFamily: "Source Code Pro", fontSize: "20px" }}
				>
					Share knowledge & Share happiness.
				</TypingEffect>
			</Box>
			<Suspense fallback={<Loading />}>
				<BlogPreviewBlock />
			</Suspense>
		</Box>
	);
};

export default BlogPage;
