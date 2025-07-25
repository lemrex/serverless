exports.handler = async function (event, context) {
    // Get environment variables
    const envVars = {
        CUSTOM_VAR_1: process.env.CUSTOM_VAR_1,
        CUSTOM_VAR_2: process.env.CUSTOM_VAR_2,
        // Add more as needed
    };

    return {
        statusCode: 200,
        isBase64Encoded: false,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "Environment Variables",
            env: envVars
        }),
    };
};
