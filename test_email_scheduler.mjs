import { default as Redis } from "ioredis"

async function main() {
    const redis = new Redis();

    const result = await redis.set("test", "test1");
    console.log(result);

    console.log('---------------');
    const result2 = await redis.get("test");
    console.log(result2);
    redis.disconnect();
}
