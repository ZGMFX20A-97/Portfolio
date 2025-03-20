import { Box, Typography } from "@mui/material";
import Caption from "../../components/home/Caption";
import SNSIconBar from "../../components/home/SNSIconBar";
import AboutmeCard from "../../components/home/AboutmeCard";
import TechStackCard from "../../components/home/TechStackCard";
import ToolsCard from "../../components/home/ToolsCard";
import CertificationCard from "../../components/home/CertificationCard";
import { Websites } from "../../utils/WebsiteData";
import WebsiteCardContainer from "../../components/home/WebsiteCardContainer";

//ホームページ

const HomePage: React.FC = () => {
	return (
		<>
			<Box sx={{ marginTop: "80px" }}>
				<Caption />
			</Box>
			<Box>
				<SNSIconBar />
			</Box>
			<Box sx={{ marginTop: "100px" }}>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: "bold",
						fontFamily: "Source Code Pro"
					}}
				>
					📖Projects you may like
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
					height: "1200px",
					marginTop: "13px",
					marginBottom: "80px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						flexShrink: 0,
						justifyContent: "space-between",
						width: "900px"
					}}
				>
					{Websites.map((website) => (
						<WebsiteCardContainer
							key={website.url}
							website={website}
						/>
					))}
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between"
					}}
				>
					<AboutmeCard />
					<TechStackCard />
					<ToolsCard />
					<CertificationCard />
				</Box>
			</Box>
		</>
	);
};

export default HomePage;
