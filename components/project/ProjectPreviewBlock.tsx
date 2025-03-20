import React from "react";
import { getRepositories } from "../../utils/action";
import { Grid2 } from "@mui/material";
import RepositoryCard from "./RepositoryCard";

const ProjectPreviewBlock = async () => {
	const repositoryData = await getRepositories();

	return (
		<Grid2
			container
			sx={{ flexWrap: "wrap", marginTop: "50px", gap: 4 }}
		>
			{repositoryData.map((repository) => (
				<RepositoryCard
					key={repository?.id}
					repository={repository}
				/>
			))}
		</Grid2>
	);
};

export default ProjectPreviewBlock;
