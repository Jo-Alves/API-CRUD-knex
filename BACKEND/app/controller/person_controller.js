const db = require("../../config/dbConnection");

const personController = {
    find: async (req, res) => {
        try {
            const persons = await db.select().from("persons")
            res.status(200).send(persons);
        } catch (error) {
            console.error(error);
        }
    },
    findOne: async (req, res) => {
        try {
            const person = await db.select().from("persons").where({ id: parseInt(req.params.id) })
            res.status(200).send(person);
        } catch (error) {
            console.error(error);
        }
    },
    save: async (req, res) => {
        const { name, cpf, address } = req.body;
        try {
            persons = {
                name,
                cpf,
                address
            }

            if (!req.params.id) {
                await db.insert(persons).into("persons");
                res.status(200).send("Cadastro realizado com sucesso")
            }
            else {
                if (isNaN(req.params.id)) {
                    res.status(501).send("passe uma parâmentro válido");
                    return
                }
                await db.update({
                    name,
                    address
                }).table("persons").where({ id: parseInt(req.params.id) })
                res.status(204).send({});
            }
        } catch (error) {
            res.status(501).send({ error });
        }
    },
    delete: async (req, res) => {
        if (isNaN(req.params.id)) {
            res.status(501).send("passe uma parâmentro válido");
            return
        }

        try {
            await db.delete().table("persons").where({ id: req.params.id })
            res.status(204).send("excluido com sucesso")
        } catch (error) {
            res.status(501).send({ error });
        }
    }
}

module.exports = personController