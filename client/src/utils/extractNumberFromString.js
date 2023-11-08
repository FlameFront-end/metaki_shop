export const extractNumberFromString = str => {
	const numberString = str.replace(/[^\d.-]/g, '')
	return parseFloat(numberString)
}
