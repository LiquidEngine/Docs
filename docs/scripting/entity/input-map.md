---
sidebar_position: 10
---

# Input map

Input map API allows accessing input commands and their values as well as switching input schemes.

## Reference

### `get_command(name: string): number` {#get_command}

Gets command in the input map. If command is not found, `null` will be returned.

```lua
command = entity.input:get_command("Move")
```

Ideally, this function should be called on `start`.

**Parameters:**

- `name`: Command name to find the command with.

**Returns:**

Internal representation of command.

---

### `get_value_boolean(command: number): boolean` {#get_value_boolean}

Retrieves command value as boolean:

```lua
command = entity.input:get_command("Jump")

value = entity.input:get_value_boolean(command)
```

**Parameters:**

- `command`: Internal representation of command.

**Returns:**

Boolean value of command.

- For boolean commands, the value is the stored boolean value.
- For axis 2d commands, the value is `true` if **any** axis is non-zero
- For axis 2d commands, the value is `false` if **both** axis values are zero

### `is_pressed(command: number): boolean` {#is_pressed}

Alias of [`get_value_boolean`](#get_value_boolean)

### `get_value_axis_2d(command: number): number, number` {#get_value_axis_2d}

Retrieves command value as Axis 2D:

```lua
command = entity.input:get_command("Move")

x, y = entity.input:get_value_axis_2d(command)
```

**Parameters:**

- `command`: Internal representation of command.

**Returns:**

Axis 2D value of command.

- For axis 2d commands, the value is the stored Axis 2D value. This value is in range [-1.0, 1.0] for each axis.
- For boolean commands, the value is (1.0, 1.0) if boolean value is `true`
- For boolean commands, the value is (0.0, 0.0) if boolean value is `false`

---

### `set_scheme(name: string): void` {#set_scheme}

Switches input map to provided scheme. If scheme is not found, the function does nothing.

```lua
entity.input:set_scheme("Combat")
```

**Parameters:**

- `name`: Name of the scheme to switch to.
