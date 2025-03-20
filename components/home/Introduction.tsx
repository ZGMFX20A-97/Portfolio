import { Box, Typography } from "@mui/material";

const selfIntroduction: string = `
            平成9年生まれの独立開発者です。大阪出身ですが、5歳から中国へ渡航して高校卒業まで生活していました。
            余暇の時間でプログラミングを絶賛勉強中です!`;

//自己紹介文

const Introduction: React.FC = () => {
	return (
		<Box>
			<Typography
				variant="h6"
				sx={{
					color: "#E2E2E2",
					fontFamily: "M PLUS 1 CODE",
					whiteSpace: "pre-line",
					fontSize: "15px",
					background: "linear-gradient(90deg white #C1C2C2)"
				}}
			>
				{selfIntroduction}
			</Typography>
		</Box>
	);
};

export default Introduction;
