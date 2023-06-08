import { ChatOpenAI } from "langchain/chat_models/openai";
const model = new ChatOpenAI({
    temperature: 0.9,
    azureOpenAIApiKey: "YOUR-API-KEY",
    azureOpenAIApiInstanceName: "YOUR-INSTANCE-NAME",
    azureOpenAIApiDeploymentName: "YOUR-DEPLOYMENT-NAME",
    azureOpenAIApiVersion: "YOUR-API-VERSION", // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
});
//# sourceMappingURL=integration_azure_openai.js.map