import React from "react";
import parse from "html-react-parser";

const Description = ({ description }) => {
	const parsedDesc = parse(description);

	return <>{parsedDesc}</>;
};

export default Description;
