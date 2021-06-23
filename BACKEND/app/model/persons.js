const db = require("../../config/dbConnection");

class Person {

    async FindAllPersons() {
        try {
            const data = await db.select().table("persons")
            return { data, status: 200 }
        }
        catch (error) {
            return { error, status: 501 }
        }
    }
    async FindOnePerson(id) {
        try {
            const data = await db.select().table("persons").where({ id })
            return { data, status: 200 }
        }
        catch (error) {
            return { error, status: 501 }
        }
    }
    async SavePerson(id, datas) {
        try {
            if (!id) {
                await db.insert(datas).into("persons")
                return { status: 200 }
            }
            else {
                await db.update(datas).table("persons").where({ id })
                return { status: 204 }
            }
        }
        catch (error) {
            return { status: 501, error }

        }
    }

    async DeletePerson(id) {
        try {
            await db.delete().table("persons").where({ id })
            return { status: 204 }
        } catch (error) {
            return { error }
        }
    }
}

module.exports = Person