import { Box } from "@mui/material";
import { Suspense } from "react";
import TypingEffect from "../../../components/universal/typingEffect";
import Loading from "../../../components/universal/Loading";
import PageTitle from "../../../components/universal/PageTitle";
import ProjectPreviewBlock from "../../../components/project/ProjectPreviewBlock";

//Projectページ

const RepositoryPage: React.FC = () => {
	return (
		<Box
			mt="50px"
			mb="100px"
		>
			<Box>
				<PageTitle>Projects</PageTitle>
				<TypingEffect
					delay={700}
					sx={{ fontFamily: "Source Code Pro", fontSize: "20px" }}
				>
					Welcome to my treasure house!
				</TypingEffect>
			</Box>
			{/* 手動でLoading状態を設定するのをSuspenseコンポーネントにリファクタリング */}
			<Suspense fallback={<Loading />}>
				<ProjectPreviewBlock />
			</Suspense>
		</Box>
	);
};

export default RepositoryPage;
