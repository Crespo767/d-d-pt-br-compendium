const MODULE_ID = "dnd-compendium-pt-br";
const PACKS = ["cenas", "atores", "itens", "personagens-e-monstros", "tabelas"];

export const PTBR_WEAPON_IDS = {
  battleaxe: "Compendium.dnd-compendium-pt-br.itens.Item.3tuQa9Nnupnz0aMy", // Machado de Batalha
  blowgun: "Compendium.dnd-compendium-pt-br.itens.Item.ED7YCDvSzM9bkexy", // Zarabatana
  club: "Compendium.dnd-compendium-pt-br.itens.Item.I9zCBjb2Tp0x4sPL", // Clava
  dagger: "Compendium.dnd-compendium-pt-br.itens.Item.U5pjmTpmXhtbgoJI", // Adaga
  dart: "Compendium.dnd-compendium-pt-br.itens.Item.hvsHS2bv8mEqkP1w", // Dardo
  flail: "Compendium.dnd-compendium-pt-br.itens.Item.Ki4XFWAOSnmMvg65", // Mangual
  glaive: "Compendium.dnd-compendium-pt-br.itens.Item.5kDP3HZNdGYK0TnE", // Glaive
  greataxe: "Compendium.dnd-compendium-pt-br.itens.Item.SnIIQGWNlsTtuqlc", // Machado Grande
  greatclub: "Compendium.dnd-compendium-pt-br.itens.Item.YlZds3lDUEf8Wtf6", // Clava Grande
  greatsword: "Compendium.dnd-compendium-pt-br.itens.Item.eFsDIIH7cTnuSCZR", // Espada Grande
  halberd: "Compendium.dnd-compendium-pt-br.itens.Item.SNZHoUrC9WFhiYPe", // Alabarda
  handaxe: "Compendium.dnd-compendium-pt-br.itens.Item.um7AzEHotKICC560", // Machadinha
  handcrossbow: "Compendium.dnd-compendium-pt-br.itens.Item.ZO5eSpF4i667ImU3", // Besta de Mão
  heavycrossbow: "Compendium.dnd-compendium-pt-br.itens.Item.QuRW8Q2YK4ZCKUQ2", // Besta Pesada
  javelin: "Compendium.dnd-compendium-pt-br.itens.Item.RmVNoCHY0i5CLuFR", // Azagaia
  lance: "Compendium.dnd-compendium-pt-br.itens.Item.aqNFpK7eKJeTPmsz", // Lança de Montaria
  lightcrossbow: "Compendium.dnd-compendium-pt-br.itens.Item.hePwYbkZ7jyIg9MT", // Besta Leve
  lighthammer: "Compendium.dnd-compendium-pt-br.itens.Item.nNyh8x7K0g44or5T", // Martelo Leve
  longbow: "Compendium.dnd-compendium-pt-br.itens.Item.gW8ZUiKmwtDfZrAD", // Arco Longo
  longsword: "Compendium.dnd-compendium-pt-br.itens.Item.TfniNO4NOiaLECuo", // Espada Longa
  mace: "Compendium.dnd-compendium-pt-br.itens.Item.Kt5wv9xILxV099s2", // Maça
  maul: "Compendium.dnd-compendium-pt-br.itens.Item.ZolzL51U2DMChSVV", // Malho
  morningstar: "Compendium.dnd-compendium-pt-br.itens.Item.yUJRse32wzaTXFg4", // Maça Estrela
  musket: "Compendium.dnd-compendium-pt-br.itens.Item.Gw66h1AeS6Ak05Rd", // Mosquete
  pike: "Compendium.dnd-compendium-pt-br.itens.Item.SkVclAxOwYvvIFGc", // Lança Longa
  pistol: "Compendium.dnd-compendium-pt-br.itens.Item.A2Z9SiTObgCkfSBn", // Pistola
  quarterstaff: "Compendium.dnd-compendium-pt-br.itens.Item.KwVrez2RhMmTPWmb", // Cajado
  rapier: "Compendium.dnd-compendium-pt-br.itens.Item.JNVVGBuOAxudM0Qb", // Rapieira
  scimitar: "Compendium.dnd-compendium-pt-br.itens.Item.EuNf516oSiCJQysR", // Cimitarra
  shortbow: "Compendium.dnd-compendium-pt-br.itens.Item.7o0UXXwiZTVglbWq", // Arco Curto
  shortsword: "Compendium.dnd-compendium-pt-br.itens.Item.MCr2IftGqqmHCset", // Espada Curta
  sickle: "Compendium.dnd-compendium-pt-br.itens.Item.C5vNMEvkntHgXXYE", // Foice
  sling: "Compendium.dnd-compendium-pt-br.itens.Item.w7ajtBKsbMqgKmZ7", // Funda
  spear: "Compendium.dnd-compendium-pt-br.itens.Item.mSAkGxAFJQQCC5uK", // Lança
  trident: "Compendium.dnd-compendium-pt-br.itens.Item.TArlI9OltAcy0Htj", // Tridente
  warhammer: "Compendium.dnd-compendium-pt-br.itens.Item.n6CZJi2xMAcKMDHm", // Martelo de Guerra
  warpick: "Compendium.dnd-compendium-pt-br.itens.Item.a35AR87J5HHAgzyM", // Picareta de Guerra
  whip: "Compendium.dnd-compendium-pt-br.itens.Item.iq0kK5FJASq5ShOK" // Chicote
};

function applyWeaponMappings() {
  try {
    if (CONFIG?.DND5E?.weaponIds) {
      Object.assign(CONFIG.DND5E.weaponIds, PTBR_WEAPON_IDS);
    }
  } catch (err) {
    console.warn("dnd-compendium-pt-br | Erro ao aplicar mapeamento de armas:", err);
  }
}

Hooks.once("setup", applyWeaponMappings);
Hooks.once("ready", applyWeaponMappings);


