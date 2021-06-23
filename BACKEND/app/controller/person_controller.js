const db = require("../../config/dbConnection");
const Person = require("../model/persons")
let person = new Person();

const personController = {
    find: (req, res) => {
        person.FindAllPersons()
            .then(response => {
                if (response.status == 200)
                    res.status(200).send(response.data);
                else
                    res.status(501).send(response.error);
            })
            .catch(error => {
                res.status(401).send(error)
            })

    },
    findOne: async (req, res) => {
        if (isNaN(req.params.id)) {
            return;
        }

        person.FindOnePerson(req.params.id)
            .then(response => {
                if (response.status == 200)
                    res.status(200).send(response.data[0]);
                else
                    res.status(501).send(response.error);
            })
            .catch(error => {
                res.status(401).send(error)
            })
    },
    save: (req, res) => {
        const { name, cpf, address } = req.body;
        persons = {
            name,
            cpf,
            address
        }

        if (!req.params.id) {
            person.SavePerson(undefined, req.body).then(response => {
                if (response.status === 200) {
                    res.status(200).send({});
                }
                else (response.status === 501)
                res.status(501).send({ cpf: "CPF duplicado" });
            }).catch(error => {
                if (response.status === 501) {
                    res.status(501).send(error);
                }
            });
        }
        else {
            if (isNaN(req.params.id)) {
                res.status(501).send("passe uma parâmentro válido");
                return
            }
            person.SavePerson(req.params.id, { name, address })
                .then(() => {
                    res.status(204).send({});
                })
                .catch(error => {
                    res.status(501).send(error);
                })
        }
    },
    delete: (req, res) => {
        if (isNaN(req.params.id)) {
            res.status(501).send("passe uma parâmentro válido");
            return
        }
        person.DeletePerson(req.params.id).then(response => {
            if (response.status === 204)
                res.status(204).send({})
            else {
                res.status(501).send(response.error)
            }
        }).catch(error => {
            res.status(501).send(error)
        })
    }
}

module.exports = personController