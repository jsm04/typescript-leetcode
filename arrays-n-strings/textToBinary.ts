const textToBinary = function (text: string) {
    let binaryString = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const binaryChar = charCode.toString(2).padStart(8, "0"); // Convert to binary and pad with zeros
        binaryString += binaryChar + " "; // Add a space between binary characters for clarity
    }
    return binaryString.trim(); // Remove the trailing space
};
