export const arrayItems = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge",
    option: {
  model: "text-davinci-003",
  temperature: 0,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,

    },
  },
  {
    name: "Grammar correction",
    id: "grammarCorrection",
    description: "Corrects sentences into standard English",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
        },
  },
  {
    name: "Friend Chat",
    id: "friendChat",
    description: "Emulate a text message conversation",
    option: {
      model: "text-davinci-003",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,

        },
  },
  {
    name: "Chat",
    id: "chat",
    description: "Open ended conversation with an AI assistant",
    option: {
      model: "text-davinci-003",
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  
        },
  },
  {
    name: "Essay Outline",
    id: "essay",
    description: "Generate an Outline for a research topic",
    option: {
      model: "text-davinci-003",
  temperature: 0.3,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
        },
  },
  {
    name: "Parse Unstructured data",
    id: "createTable",
    description: "Create tables from long form text",
    option: {
      model: "text-davinci-003",
  temperature: 0,
  max_tokens: 100,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
        },
  },
  {
    name: "Notes to summary",
    id: "NoteSummary",
    description: "Turn meeting/study notes into a summary",
    option: {
      model: "text-davinci-003",
  temperature: 0,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
        },
  },
  {
    name: "Ad from product Description",
    id: "adCopy",
    description: "turn a service/product description into ad copy",
    option: {
      model: "text-davinci-003",
  temperature: 0.5,
  max_tokens: 100,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,

        },
  },
  {
    name: "Product/brand name Generator",
    id: "brandGenerator",
    description:
      "create product/brand names from example words.Influenced by a community prompt",
      option: {
        model: "text-davinci-003",
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
          },
  },
  {
    name: "Explain Code",
    id: "explainCode",
    description: "Explain a complicated piece of code",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
        },
  },
  {
    name: "Code fixer",
    id: "codeFixer",
    description: "Find and fix bugs in source code",
    option: {
      model: "code-davinci-002",
  temperature: 0,
  max_tokens: 182,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
        },
  },

  {
    name: "ImagePrompt Generator",
    id: "ImagePromptGenerator",
    description:
      "Generate any image from text, create your own unique logo with a simple prompt and make an amazing image to hang on your wall without having to buy the art ",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
          },
  },
];
