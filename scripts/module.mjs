const MODULE_ID = "dnd-compendium-pt-br";
const PACKS = ["cenas", "atores", "itens", "personagens-e-monstros", "tabelas", "macros"];

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  for (const name of PACKS) {
    const pack = game.packs.get(`${MODULE_ID}.${name}`);
    if (pack?.locked) await pack.configure({ locked: false });
  }

  const sourceConfiguration = { ...game.settings.get("dnd5e", "packSourceConfiguration") };
  let changed = false;
  for (const name of ["atores", "itens", "personagens-e-monstros"]) {
    const collection = `${MODULE_ID}.${name}`;
    if (sourceConfiguration[collection] === false) {
      sourceConfiguration[collection] = true;
      changed = true;
    }
  }
  if (changed) await game.settings.set("dnd5e", "packSourceConfiguration", sourceConfiguration);
});
