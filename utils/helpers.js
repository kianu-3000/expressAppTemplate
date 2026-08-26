const pagination = (req) => {
    const page = parseInt(req.headers.page) || Constants.PAGINATION.PAGE;
    const limit = parseInt(req.headers.limit) || Constants.PAGINATION.LIMIT;
    const offset = (page - 1) * limit;

    return { limit, offset };
}

export { pagination };