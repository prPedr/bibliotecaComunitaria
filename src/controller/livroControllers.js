import livroServices from "../service/livroServices.js"

async function criarLivroControllers(request, response) {
    const novoLivro = request.body

    try {
        const livro = await livroServices.criarLivroServices(novoLivro)
        response.status(201).send({livro})
    } catch (err) {
        return response.status(400).send(err.message)
    }
}

export default {
    criarLivroControllers
}