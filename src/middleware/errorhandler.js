const errorHandler = (err, req, res, next) => {
    console.error(err);

    res.status(500).render('errors/500', {
        message: 'Something went wrong. Please try again.'
    });
};

module.exports = errorHandler;