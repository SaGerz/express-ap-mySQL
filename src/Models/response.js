const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        paylaoad : {
            statusCode : statusCode, 
            datas : data, 
            message : message
        }, 
        pagination : {
            next: "",
            prev: ""
        }   
    })
}

module.exports = response;