/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('empresas').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('empresas', function (table) {
                table.increments('empresa_id').primary()
                table.string('nombre_empresa')
                table.string('habilidad_requerida')
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('empresas').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('empresas')
        }
    })
};
