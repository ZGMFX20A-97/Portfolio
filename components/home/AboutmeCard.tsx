import { CardContent, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

//カード内に使用するカスタムTypographyコンポーネントを定義
const AboutMeTypography = ({
	children,
	sx
}: {
	children?: ReactNode;
	sx?: SxProps;
}) => {
	return (
		<Typography
			sx={{
				fontSize: "18px",
				fontWeight: "bold",
				fontFamily: "Source Code Pro",
				...sx
			}}
		>
			{children}
		</Typography>
	);
};

//自己紹介展示カード

const AboutmeCard: React.FC = () => {
	return (
		<CardContent
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "400px",
				height: "auto",
				backgroundColor: "#111111",
				border: "0.5px rgba(155,156,156,0.5) solid",
				color: "#C1C2C2 solid",
				borderRadius: 3,
				rowGap: 3
			}}
		>
			<AboutMeTypography sx={{ fontFamily: "Source Code Pro" }}>
				🤓About Me
			</AboutMeTypography>
			<AboutMeTypography>・Name：庄田拓実 | (CatInPajamas)</AboutMeTypography>
			<AboutMeTypography>・Location：大阪</AboutMeTypography>
			<AboutMeTypography>・Language：中国語 & 日本語 & 英語</AboutMeTypography>
			<AboutMeTypography>・StrongPoints：行動力 & 突破力</AboutMeTypography>
			<AboutMeTypography>
				・Habbits：コーディング & 筋トレ & バイク
			</AboutMeTypography>
			<AboutMeTypography>・Favorite Food：寿司 & 辛いもの</AboutMeTypography>
			<AboutMeTypography>・Favorite Animal：猫</AboutMeTypography>
		</CardContent>
	);
};

export default AboutmeCard;
