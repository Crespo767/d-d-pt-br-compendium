# 🐉 D&D 5e Compêndios PT-BR (PHB 2024)

[![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v13-orange.svg)](https://foundryvtt.com/)
[![D&D 5e System](https://img.shields.io/badge/dnd5e-5.3+-red.svg)](https://github.com/foundryvtt/dnd5e)
[![Release](https://img.shields.io/github/v/release/Crespo767/d-d-pt-br-compendium?color=blue)](https://github.com/Crespo767/d-d-pt-br-compendium/releases/latest)
[![Idioma](https://img.shields.io/badge/Idioma-Portugu%C3%AAs%20(Brasil)-green.svg)]()

Biblioteca completa de compêndios traduzidos e adaptados em **Português Brasileiro (PT-BR)** para o sistema **D&D 5e** no **Foundry VTT**, com alinhamento textual e terminológico estrito ao **Livro do Jogador 2024 (PHB 2024)** oficial.

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
5. Ative o módulo **"D&D Compêndios PT-BR"** nas configurações do seu Mundo de jogo.

---

## 📦 Download Manual

Se preferir instalar manualmente por arquivo compactado:

- 🔗 **[Baixar dnd-compendium-pt-br.zip (Última Versão)](https://github.com/Crespo767/d-d-pt-br-compendium/releases/latest/download/dnd-compendium-pt-br.zip)**
- Extraia a pasta `dnd-compendium-pt-br` dentro do diretório:
  - `FoundryVTT/Data/modules/`

---

## 📚 Conteúdo dos Compêndios

O pacote inclui compêndios categorizados e organizados na pasta **D&D Compêndios PT-BR**:

- **Personagens e Monstros (Itens)**:
  - **12 Classes do PHB 2024**: Bárbaro, Bardo, Clérigo, Druida, Feiticeiro, Guardião, Guerreiro, Ladino, Mago, Monge, Paladino e Bruxo.
  - Subclasses oficiais, características de classe e talentos de origem/gerais.
  - Valores de escala de classe (`@scale.*`) 100% blindados e padronizados para garantir automação contínua na ficha (sem avisos de dados ausentes).
  - Espécies (Raças), histórico de personagens e itens de monstros.
- **Atores**:
  - Personagens pré-gerados prontos para jogar do nível 1 ao 17 para todas as 12 classes (*Merric, Randal, Riswynn, Perrin, Akra, Aoth, Beiro, Morthos, Quillathe, Sefris, Zanna*).
  - NPCs e monstros de campanha traduzidos.
- **Itens de Inventário**:
  - Armas com propriedades de Maestria em Armas.
  - Armaduras, escudos, ferramentas e equipamentos de aventura.
- **Cenas**: Mapas e ambientes preparados.
- **Tabelas de Rolagem**: Tabelas de encontros e itens aleatórios.
- **Macros**: Automações auxiliares para mestres e jogadores.
- **Localização Completa**: Dicionário integrado (`lang/pt-BR.json`).

---

## 🎯 Padrão de Tradução e Automação

- **Tradução Oficial**: Baseada diretamente no *Livro do Jogador 2024* brasileiro (ex.: *Golpe Brutal*, *Recuperar Fôlego*, *Golpe Divino*, *Ataque Furtivo*, *Surto de Ação*).
- **Integridade Técnica do Foundry**:
  - Preservação de todas as tags `@UUID[...]`, `[[lookup ...]]` e fórmulas dinâmicas.
  - Identificadores de escala de classe vinculados aos slugs canônicos do sistema (`rages`, `second-wind`, `action-surge`, `sneak-attack`, `wild-shape-uses`, etc.).

---

## ⚙️ Requisitos e Compatibilidade

- **Foundry VTT**: Versão 13 (Compatível e verificado com v13.350).
- **Sistema D&D 5e**: Versão 5.3.3 ou superior.

---

## 👤 Autor e Créditos

- **Autor / Mantenedor**: Crespo767 ([@Crespo767](https://github.com/Crespo767))
- **Sistema D&D 5e**: Desenvolvido por Foundry Gaming LLC.
- **Regras Originais**: Dungeons & Dragons 5ª Edição (2024), Wizards of the Coast.
