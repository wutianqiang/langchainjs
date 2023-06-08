"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("langchain/llms/openai");
var momento_1 = require("langchain/cache/momento");
var sdk_1 = require("@gomomento/sdk");
// See https://github.com/momentohq/client-sdk-javascript for connection options
var client = new sdk_1.CacheClient({
    configuration: sdk_1.Configurations.Laptop.v1(),
    credentialProvider: sdk_1.CredentialProvider.fromEnvironmentVariable({
        environmentVariableName: "MOMENTO_AUTH_TOKEN",
    }),
    defaultTtlSeconds: 60 * 60 * 24,
});
var cache = await momento_1.MomentoCache.fromProps({
    client: client,
    cacheName: "langchain",
});
var model = new openai_1.OpenAI({ cache: cache });
