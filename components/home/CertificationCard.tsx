import { CardContent, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

//カード内に使用するカスタムTypographyコンポーネントを定義
const CertificationTypography = ({
	children,
	sx,
	href
}: {
	children?: ReactNode;
	sx?: SxProps;
	href?: string;
}) => {
	return (
		<Typography
			component="a"
			href={href}
			target="_blank"
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

//取得資格展示カード

const CertificationCard: React.FC = () => {
	return (
		<CardContent
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "400px",
				height: "auto",
				backgroundColor: "#111111",
				border: "0.5px rgba(155,156,156,0.5) solid",
				borderRadius: 3,
				rowGap: 3
			}}
		>
			<Typography sx={{ fontFamily: "Source Code Pro", fontWeight: "bold" }}>
				🏆IT Certification
			</Typography>
			<CertificationTypography
				href="https://www.oracle.com/jp/education/certification/javase-11-programmer-2/"
				sx={{ color: "gold" }}
			>
				Oracle Certified Java Programmer, Gold SE 11{" "}
			</CertificationTypography>
			<CertificationTypography
				href="https://www.oracle.com/jp/education/certification/javase-11-programmer-1/"
				sx={{ color: "silver" }}
			>
				Oracle Certified Java Programmer, Silver SE 11{" "}
			</CertificationTypography>
			<CertificationTypography
				href="https://www.pythonic-exam.com/exam/analyist"
				sx={{ color: "rgb(48, 152, 250)" }}
			>
				Python 3 Data Analyst Certification{" "}
			</CertificationTypography>
			<CertificationTypography
				href="https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/"
				sx={{ color: "rgb(157, 96, 255)" }}
			>
				AWS Certified Solutions Architect - Associate{" "}
			</CertificationTypography>
		</CardContent>
	);
};

export default CertificationCard;
