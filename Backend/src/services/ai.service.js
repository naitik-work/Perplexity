import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
model: "mistral-small-latest",
temperature: 0
});

export async function testAi() {
    model.invoke("Tell me about tajmahal history?")
        .then((response) => {
            console.log(response.text);
        })
}