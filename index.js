exports.handler = async function (event, context) {
    const now = new Date();

    return {
        statusCode: 200,
        isBase64Encoded: false,
        headers: { "Content-Type": "application/json" },
        body: {
            message: "Current date and time",
            datetime: now.toISOString()
        },
    };
};
// a comment to test the code