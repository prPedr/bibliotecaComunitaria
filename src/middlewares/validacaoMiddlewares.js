const validacao = (schema) => (request, response, next) => {
    const resultado = schema.safeParse(request.body);

    if (!resultado.success) {
        return response.status(400).json({ error: resultado.error.errors });
    }

    // Substitui o body original pelo valor validado
    request.body = resultado.data;
    next();
};

export { validacao }