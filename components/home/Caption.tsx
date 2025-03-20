import { Box, Typography } from "@mui/material";
import TypingEffect from "../universal/typingEffect";
import Introduction from "./Introduction";

//見出し文

const Caption: React.FC = () => {
	return (
		<Box sx={{ background: "linear-gradient(90deg white #C1C2C2)" }}>
			<TypingEffect
				delay={700}
				sx={{
					fontFamily: "Source Code Pro",
					fontSize: "70px",
					fontWeight: 500
				}}
			>
				Hi,I&apos;m CatInPajamas
			</TypingEffect>
			<TypingEffect
				delay={2700}
				sx={{
					fontFamily: "Source Code Pro",
					fontSize: "40px",
					fontWeight: 500
				}}
			>
				A Rookie Engineer.
			</TypingEffect>
			<Typography
				sx={{
					marginTop: "30px",
					fontFamily: "monospace",
					fontSize: "25px",
					fontWeight: 400,
					color: "#B9FFC1",
					opacity: 0.8
				}}
			>
				#CatinPajamas&nbsp;&nbsp;#TAKUMI&nbsp;&nbsp;#拓実&nbsp;&nbsp;#匠
			</Typography>
			<Box sx={{ marginTop: "30px" }}>
				<Introduction />
			</Box>
		</Box>
	);
};

export default Caption;
