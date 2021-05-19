
module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const animais = { ...req.body }
        if (req.params.id) animais.id = req.params.id

        try {
            existsOrError(animais.nome_animal, 'O nome do animal não foi informado')
            existsOrError(animais.idade_animal, 'A idade do animal não foi informada')
            existsOrError(animais.tipo_animal, 'O tipo do animal não foi informado')
            existsOrError(animais.raca_animal, 'A raça do animal não foi informada')
            existsOrError(animais.nome_dono, 'O nome do dono não foi informado')
            existsOrError(animais.telefone_dono, 'O telefone do dono não foi informado')

        } catch (msg) {
            res.status(400).send(msg)
        }

        if (animais.id) {
            app.db('animais')
                .update(animais)
                .where({ id: animais.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('animais')
                .insert(animais)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = async (req, res) => {
        app.db('animais')
            .then(animais => res.json(animais))
            .catch(err => res.status(500).send(err))
    }


    const limit = 4;
    const getPaginado = async (req, res) => {
        const page = req.query.page || 1
        const result = await app.db('animais').count('id').first()
        const count = parseInt(result.count)

        app.db('animais')
            .orderBy('id', 'desc')
            .limit(limit).offset(page * limit - limit)
            .then(animais => res.json({ data: animais, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('animais')
            .where({ id: req.params.id })
            .first()
            .then(animais => res.json(animais))
            .catch(err => res.status(500).send(err))
    }


    const remove = async (req, res) => {
        try {   
            const rowsDeleted = await app.db('animais')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Nâo foi possível encontrar esse animal..')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }


    return { save, remove, get, getById, getPaginado }
}