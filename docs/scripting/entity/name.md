---
sidebar_position: 2
---

# Name

Name API allows accessing and modifying name of a component.

## Reference

### `get(): string` {#get}

Get name of entity.

```lua
name = entity.name:get()
```

**Returns:**

Name of entity represented as string.

### `set(name: string): void` {#set}

Set name of entity.

```lua
entity.name:set("Entity name")
```

**Parameters:**

- `name`: Entity name represented as string

### `delete() : void` {#delete}

Delete name component.

```lua
entity.name:delete()
```
