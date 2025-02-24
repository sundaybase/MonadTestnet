const prompts = require("prompts");
const displayHeader = require("./src/displayHeader.js");
displayHeader();

const availableScripts = [
  { title: "Rubic Swap Script", value: "rubic" },
  { title: "Magma Staking Script", value: "magma" },
  { title: "Izumi Swap Script", value: "izumi" },
  { title: "aPriori Staking Script", value: "apriori" },
  { title: "Exit", value: "exit" },
];

async function run() {
  const response = await prompts({
    type: "select",
    name: "script",
    message: "Select the script to run:",
    choices: availableScripts,
  });

  const selectedScript = response.script;

  if (!selectedScript) {
    console.log("No script selected. Exiting...");
    return;
  }

  switch (selectedScript) {
    case "rubic":
      console.log("Running Rubic Swap...");
      const rubic = require("./scripts/rubic");
      break;

    case "magma":
      console.log("Running Magma Staking...");
      const magma = require("./scripts/magma");
      break;

    case "izumi":
      console.log("Running Izumi Swap...");
      const izumi = require("./scripts/izumi");
      break;

    case "apriori":
      console.log("Running aPriori Staking...");
      const monorail = require("./scripts/apriori");
      break;

    case "exit":
      console.log("Exiting bot...");
      process.exit(0);
      break;
  }
}

run().catch((error) => {
  console.error("Error occured:", error);
});
