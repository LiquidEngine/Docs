---
sidebar_position: 400
---

# Text

Text API allows accessing and modifying the text component.

## Reference

### `get_text(): string` {#get_text}

Get text from component.

```lua
local text = entity.text:get_text()
```

**Returns:**

Text contents represented as string.

### `set_text(text: string): void` {#set_text}

Set text.

```lua
entity.text:set_text("Hello world")
```

---

### `get_line_height(): number` {#get_line_height}

Get line height.

```lua
local line_height = entity.text:get_line_height()
```

**Returns:**

Line height represented as number.

### `set_line_height(line_height: number): void` {#set_line_height}

Set line height of text. Line height represents the height between each new line in the text.

```lua
entity.text:set_line_height(1.2)
```

**Parameters:**

- `line_height`: Line height. Value accepts positive numbers.

---

### `delete(): void` {#delete}

Delete text component.

```lua
entity.text:delete()
```
