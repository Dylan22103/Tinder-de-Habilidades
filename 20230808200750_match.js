/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('match').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('match', function (table) {
                table.increments('match_id').primary()
                table.string('nombre_empresa')
                table.string('nombre_persona')
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('match').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('match')
        }
    })
};