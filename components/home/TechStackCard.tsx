import { Box, CardContent, Typography } from "@mui/material";
import javascript from "../../public/TechStackImgs/javascript-svgrepo-com.svg";
import python from "../../public/TechStackImgs/python-svgrepo-com.svg";
import java from "../../public/TechStackImgs/java-svgrepo-com.svg";
import html5 from "../../public/TechStackImgs/html-5-svgrepo-com.svg";
import css3 from "../../public/TechStackImgs/css-3-svgrepo-com.svg";
import react from "../../public/TechStackImgs/react-svgrepo-com.svg";
import langchain from "../../public/TechStackImgs/langchain.svg";
import materialUI from "../../public/TechStackImgs/material-ui-svgrepo-com.svg";
import spring from "../../public/TechStackImgs/spring-svgrepo-com.svg";
import tailwind from "../../public/TechStackImgs/tailwind-svgrepo-com.svg";

//技術スタック展示カード

const TechStackCard = () => {
	return (
		<CardContent
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				flexWrap: "wrap",
				maxWidth: "400px",
				height: "auto",
				backgroundColor: "#111111",
				border: "0.5px rgba(155,156,156,0.5) solid",
				color: "#C1C2C2 solid",
				borderRadius: 3,
				rowGap: 2
			}}
		>
			<Typography
				component="div"
				sx={{
					width: "100vw",
					fontFamily: "Source Code Pro",
					fontWeight: "bold"
				}}
			>
				💡My Tech Stack
			</Typography>
			<Box
				component="div"
				sx={{ display: "flex", justifyContent: "center", gap: 5 }}
			>
				<Box
					component="img"
					src={javascript.src}
					sx={{ width: "40px" }}
				></Box>
				<Box
					component="img"
					src={python.src}
					sx={{ width: "40px" }}
				></Box>
				<Box
					component="img"
					src={java.src}
					sx={{ width: "50px" }}
				></Box>
				<Box
					component="img"
					src={html5.src}
					sx={{ width: "45px" }}
				></Box>
				<Box
					component="img"
					src={css3.src}
					sx={{ width: "45px" }}
				></Box>
			</Box>
			<Box
				component="div"
				sx={{ display: "flex", justifyContent: "center", gap: 5 }}
			>
				<Box
					component="img"
					src={react.src}
					sx={{ width: "45px" }}
				></Box>
				<Box
					component="img"
					src={langchain.src}
					sx={{ width: "45px" }}
				></Box>
				<Box
					component="img"
					src={materialUI.src}
					sx={{ width: "45px" }}
				></Box>
				<Box
					component="img"
					src={spring.src}
					sx={{ width: "40px" }}
				></Box>
				<Box
					component="img"
					src={tailwind.src}
					sx={{ width: "50px" }}
				></Box>
			</Box>
		</CardContent>
	);
};

export default TechStackCard;
