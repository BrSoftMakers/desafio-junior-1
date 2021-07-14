module.exports = app => {

    const { existsOrError } = app.api.validations

    const save = (req, res) => {
        const animals = { ...req.body }
        if(req.params.id) animals.id = req.params.id

        try {
            existsOrError(animals.nome, "Nome do animal não informado")
            existsOrError(animals.idade, "Idade do animal não informado")
            existsOrError(animals.especie, "Especie do animal não informado")
            existsOrError(animals.raca, "Raça do animal não informado")
            existsOrError(animals.dono, "Nome do dono do animal não informado")
            existsOrError(animals.contato, "Contato do dono do animal não informado")
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(animals.id) {
            app.db('animals')
                .update(animals)
                .where({ id: animals.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('animals')
                .insert(animals)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('animals')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Animal não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 12
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('animals').count('id')
        const count = parseInt(result.count)

        app.db('animals')
            .limit(limit).offset(page * limit - limit)
            .orderBy('id')
            .then(animals => res.json({ data: animals, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('animals')
            .where({ id: req.params.id })
            .first()
            .then(animals => {
                animals.content = animals.content.toString()
                return res.json(animals)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}