export const HTTP_PORT = process.env.PORT

export function isLocal() {
    return getEnv() === 'development'
}

export function getEnv() {
    return process.env.NODE_ENV
}

export function getCacheURL() {
    return process.env.REDIS_URL || process.env.REDISCLOUD_URL || null
}
