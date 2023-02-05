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
  stop: ["\n"],
    },
  },
  {
    name: "Grammar correction",
    id: "grammarCorrection",
    description: "Corrects sentences into standard English",
  },
  {
    name: "Friend Chat",
    id: "friendChat",
    description: "Emulate a text message conversation",
  },
  {
    name: "Chat",
    id: "chat",
    description: "Open ended conversation with an AI assistant",
  },
  {
    name: "Essay Outline",
    id: "essay",
    description: "Generate an Outline for a research topic",
  },
  {
    name: "Parse Unstructured data",
    id: "createTable",
    description: "Create tables from long form text",
  },
  {
    name: "Notes to summary",
    id: "NoteSummary",
    description: "Turn meeting/study notes into a summary",
  },
  {
    name: "Ad from product Description",
    id: "adCopy",
    description: "turn a service/product description into ad copy",
  },
  {
    name: "Product/brand name Generator",
    id: "brandGenerator",
    description:
      "create product/brand names from example words.Influenced by a community prompt",
  },
  {
    name: "Explain Code",
    id: "explainCode",
    description: "Explain a complicated piece of code",
  },
  {
    name: "Code fixer",
    id: "codeFixer",
    description: "Find and fix bugs in source code",
  },

  {
    name: "Image Generator",
    id: "ImageGenerator",
    description:
      "Generate any image from text, create your own unique logo with a simple prompt and make an amazing image to hang on your wall without having to buy the art ",
  },
];
