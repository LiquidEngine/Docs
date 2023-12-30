---
sidebar_position: 400
---

# Text

Text API allows accessing and modifying the text component.

## Properties

### `content: string` {#prop-content}

Content of the text.

```lua
local content = entity.text.content

entity.text.content = 'Hello world'
```

### `lineHeight: number` {#prop-lineHeight}

Line height of text.

```lua
local lineHeight = entity.text.lineHeight

entity.text.lineHeight = 1.2
```

## Methods

### `delete(): void` {#method-delete}

Delete text component.

```lua
entity.text:delete()
```
