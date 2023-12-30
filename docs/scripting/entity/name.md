---
sidebar_position: 200
---

# Name

Name API allows accessing and modifying name of a component.

## Properties

### `value: string` {#prop-value}

Name of the entity.

```lua
local name = entity.name.value

entity.name.value = 'Entity name'
```

## Methods

### `delete() : void` {#method-delete}

Delete name component.

```lua
entity.name:delete()
```
