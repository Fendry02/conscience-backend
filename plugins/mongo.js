'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb+srv://benoit:XuJCdzfM17Hw2FBd@conscience-cluster.96wxoex.mongodb.net/conscience',
  })
})
