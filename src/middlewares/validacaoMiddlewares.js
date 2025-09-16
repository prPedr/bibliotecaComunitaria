const validacao = (schema) => (request, response, next) => {
    const resultado = schema.safeParse(request.body);

    if (!resultado.success) {
        return response.status(400).json({
            error: resultado.error.format()
        });
    }

    request.body = resultado.data;
    next();
};

export { validacao }