# 🐉 D&D 5e Compêndios Básicos PT-BR (PHB 2024, MM, DMG)

[![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v13-orange.svg)](https://foundryvtt.com/)
[![D&D 5e System](https://img.shields.io/badge/dnd5e-5.3+-red.svg)](https://github.com/foundryvtt/dnd5e)
[![Release](https://img.shields.io/github/v/release/Crespo767/d-d-pt-br-compendium?color=blue)](https://github.com/Crespo767/d-d-pt-br-compendium/releases/latest)
[![Idioma](https://img.shields.io/badge/Idioma-Portugu%C3%AAs%20(Brasil)-green.svg)]()

> ✅ **Verificado em 09/10/2026** no Foundry VTT 13.350 com dnd5e 5.3.3: todos os compêndios carregam sem erros e todas as referências (links, magias, invocações, cenas e imagens) resolvem.

Biblioteca completa de compêndios traduzidos e adaptados em **Português Brasileiro (PT-BR)** para o sistema **D&D 5e** no **Foundry VTT**, com alinhamento textual e terminológico estrito aos três livros básicos das regras oficiais: **Livro do Jogador 2024 (PHB 2024)**, **Manual dos Monstros (MM 2024/2025)** e **Livro do Mestre (DMG 2024)**.

Para aventuras e suplementos de Ravenloft, utilize o módulo complementar: **[Curse of Strahd & Ravenloft | Compêndios PT-BR](https://github.com/Crespo767/curse-of-strahd-pt-br)**.

---

## ⚡ Instalação Direta no Foundry VTT (Recomendado)

Para instalar ou manter o módulo atualizado automaticamente dentro do Foundry VTT:

1. Abra o Foundry VTT e vá até a aba **Módulos / Add-on Modules**.
2. Clique no botão **Instalar Módulo / Install Module**.
3. No campo **URL do Manifesto / Manifest URL** (no rodapé da janela), cole o seguinte endereço:

```text
https://github.com/Crespo767/d-d-pt-br-compendium/releases/latest/download/module.json
```

4. Clique em **Instalar / Install**.
5. Ative o módulo **"D&D 5e Compêndios Básicos PT-BR (PHB 2024, MM, DMG)"** nas configurações do seu Mundo de jogo.

---

## 📦 Download Manual

Se preferir instalar manualmente por arquivo compactado:

- 🔗 **[Baixar dnd-compendium-pt-br.zip (Última Versão)](https://github.com/Crespo767/d-d-pt-br-compendium/releases/latest/download/dnd-compendium-pt-br.zip)**
- Extraia a pasta `dnd-compendium-pt-br` dentro do diretório:
  - `FoundryVTT/Data/modules/`

---

## 📚 Conteúdo dos Compêndios

O pacote inclui compêndios categorizados e organizados na pasta **D&D Compêndios PT-BR**:

- **Personagens e Monstros (745 Itens)**:
  - **12 Classes do PHB 2024**: Bárbaro, Bardo, Clérigo, Druida, Feiticeiro, Guardião, Guerreiro, Ladino, Mago, Monge, Paladino e Bruxo.
  - Subclasses oficiais, características de classe e talentos de origem/gerais/combate/dádiva épica.
  - Valores de escala de classe (`@scale.*`) 100% blindados e padronizados para garantir automação contínua na ficha.
  - Espécies (Raças), históricos de personagem (Antecedentes) e características de monstros (ações, traços e ações lendárias do MM).
- **Atores (632 Criaturas e Personagens)**:
  - **Personagens pré-gerados** prontos para jogar do nível 1 ao 17 para todas as 12 classes (*Merric, Randal, Riswynn, Perrin, Akra, Aoth, Beiro, Morthos, Quillathe, Sefris, Zanna*).
  - Bestiário completo do **Manual dos Monstros (MM 2025)** e monstros clássicos de D&D 5e (Aberrações, Feras, Constructos, Dragões, Elementais, Feéricos, Gigantes, Humanoides, Ínferos, Limos, Monstruosidades, Mortos-vivos e Plantas).
  - Invocações, conjurações, companheiros animais e montarias sobrenaturais preparadas.
- **Itens de Inventário (1.524 Itens)**:
  - Todas as armas oficiais com propriedades completas de **Maestria em Armas** (*Weapon Mastery*).
  - Armaduras, escudos, ferramentas de artesão e equipamentos de aventura.
  - Todas as magias do Livro do Jogador 2024 (do truque ao 9º círculo).
  - Acervo completo de Itens Mágicos do **Livro do Mestre (DMG)** (anéis, varinhas, cajados, bastões, poções, pergaminhos e recipientes).
- **Cenas do Livro do Mestre (33 Mapas)**:
  - Mapas de cenário de Greyhawk: *A Cidade Livre de Greyhawk*, *Cidade de Greyhawk e Arredores*, *Flanaess* e versões com grade hexagonal e do jogador.
  - Mapas táticos de encontros e masmorras do Livro do Mestre: Navio, Mina, Fortaleza, Torre do Mago, Fazenda, Covil do Dragão, Cavernas Vulcânicas, Esconderijo na Masmorra, etc.
- **Tabelas de Rolagem (312 Tabelas)**:
  - Tabelas do Livro do Jogador 2024, Livro do Mestre (tesouros, itens sencientes, encontros, perigos) e Manual dos Monstros.
- **Localização Completa**:
  - Dicionário integrado com tradução oficial da interface e fichas (`lang/pt-BR.json`).

---

## 🎯 Padrão de Tradução e Automação

- **Tradução Oficial**: Baseada diretamente no *Livro do Jogador 2024*, *Manual dos Monstros* e *Livro do Mestre*.
- **Integridade Técnica do Foundry**:
  - Preservação de todas as tags `@UUID[...]`, `[[lookup ...]]` e fórmulas dinâmicas.
  - Identificadores de escala de classe vinculados aos slugs canônicos do sistema (`rages`, `second-wind`, `action-surge`, `sneak-attack`, `wild-shape-uses`, etc.).
  - IDs de armas mapeados nativamente para maestria do sistema D&D 5e (`CONFIG.DND5E.weaponIds`).

---

## ⚙️ Requisitos e Compatibilidade

- **Foundry VTT**: Versão 13 (Compatível e verificado com v13.350).
- **Sistema D&D 5e**: Versão 5.3.3 ou superior.

---

## ⚖️ Aviso Legal, Direitos Autorais e Créditos

Este é um **conteúdo feito por fãs**, sem fins lucrativos, criado de forma voluntária para a comunidade brasileira de jogadores no Foundry VTT.

- **Dungeons & Dragons, D&D 5e, Player's Handbook, Monster Manual, Dungeon Master's Guide**:
  Todos os direitos de propriedade intelectual, marcas registradas e conteúdo oficial pertencem à **Wizards of the Coast LLC**, uma subsidiária da **Hasbro, Inc.**
  - *Criadores Originais do Sistema D&D:* Gary Gygax e Dave Arneson.
  - *Designers Líderes das Regras Oficiais 2024:* Jeremy Crawford, Christopher Perkins e a equipe de design e desenvolvimento de regras de D&D da Wizards of the Coast.
- **Sistema Foundry VTT D&D 5e**:
  Desenvolvido e mantido pela equipe da **Foundry Gaming LLC**.
- **Política de Conteúdo de Fãs**:
  Este produto foi adaptado e disponibilizado gratuitamente sob os termos da [Política de Conteúdo de Fãs da Wizards of the Coast](https://company.wizards.com/pt-BR/legal/fancontentpolicy). Não é um produto oficial, não possui fins comerciais e não é patrocinado, endossado ou afiliado à Wizards of the Coast ou Hasbro.
