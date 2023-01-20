function FormatDate() {
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
}

export default FormatDate;
