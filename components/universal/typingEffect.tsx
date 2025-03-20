"use client";
import { ReactNode, useEffect, useState } from "react";
import { Box, SxProps, Typography } from "@mui/material";

//タイピングのエフェクトを作成

const TypingEffect = ({
	sx,
	delay,
	children
}: {
	sx?: SxProps;
	delay?: number;
	children: ReactNode;
}) => {
	//子要素の型が必ずstringであることを保証する。子要素そのものか空文字
	const text = typeof children === "string" ? children : "";
	//Typing effectを実装するコンテナを定義
	const [typingText, setTypingText] = useState<string>("");
	//Cursor状態の定義
	const [showCursor, setShowCursor] = useState<boolean>(true);

	useEffect(() => {
		let currentIndex = 0;
		let interval: NodeJS.Timeout;
		const timeout = setTimeout(() => {
			interval = setInterval(() => {
				//全部表示するまで、0.1sごとに一文字ずつテキストを暴露する
				if (currentIndex < text.length) {
					setTypingText(text.substring(0, currentIndex + 1));
					currentIndex++;
				} else clearInterval(interval);
			}, 100);
		}, delay); //delayは多数行の文字をずらして表示したい場合に使う

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [text, delay]);

	useEffect(() => {
		//0.6s周期に｜のステートを変える
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 600);
		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<Box>
			<Typography
				component="span"
				sx={{ ...sx }}
			>
				{typingText}
			</Typography>
			<Typography
				component="span"
				sx={{ ...sx, opacity: showCursor ? 1 : 0 }}
			>
				|
			</Typography>{" "}
			{/* showCursorがTrueの場合透明度が１(見える状態)Falseの場合透明度が0(見えない状態)でピカピカしている効果を出す*/}
		</Box>
	);
};

export default TypingEffect;
