function catchErrors(error, displayError) {
    let errorMessage;

    if (error.response) {
        errorMessage = error.response.data;
        console.log("Error response", errorMessage);
    } else if (error.request) {
        errorMessage = error.request.data;
        console.log("Error request", errorMessage);
    } else {
        errorMessage = error.errorMessage;
        console.log("Error message", errorMessage);
    }
    displayError(errorMessage);
}

export default catchErrors;
