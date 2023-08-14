/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('personas').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('personas', function (table) {
                table.increments('persona_id').primary()
                table.string('nombre_persona')
                table.string('habilidad')
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('personas').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('personas')
        }
    })
};
