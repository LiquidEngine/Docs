---
sidebar_position: 300
---

# Transform

Transform API provides methods to access and modify **local transform** of entity.

Note that, world transform cannot be modified by entity because it is always autocalculated from local transform.

### `get_position(): number, number, number` {#get_position}

Get local position of entity.

```lua
local x, y, z = entity.local_transform:get_position()
```

**Returns:**

The function returns three values -- local x, y, and z coordinates of entity.

### `set_position(x: number, y: number, z: number): void` {#set_position}

Set local position of entity.

```lua
entity.local_transform:set_position(10.0, 2.5, 4.5)
```

**Parameters:**

- `x`: Local x position measured in meters.
- `y`: Local y position measured in meters.
- `z`: Local z position measured in meters.

---

### `get_scale(): number, number, number` {#get_scale}

Get local scale of entity.

```lua
local x, y, z = entity.local_transform:get_scale()
```

**Returns:**

The function returns three values -- local x, y, and z scale of entity.

### `set_scale(x: number, y: number, z: number): void` {#set_scale}

Set local scale of entity.

```lua
entity.local_transform:set_scale(2.0, 2.0, 2.0)
```

**Parameters:**

- `x`: Local x scale
- `y`: Local y scale
- `z`: Local z scale

---

### `get_rotation(): number, number, number` {#get_rotation}

Get local rotation of entity.

```lua
local x, y, z = entity.local_tarnsform:get_rotation()
```

The function returns three values -- x, y, and z euler angles for local rotation measured in degrees.

### `set_rotation(x: number, y: number, z: number): void` {#set_rotation}

Set local rotation of entity in euler angles.

```lua
entity.local_tarnsform:set_rotation(45.0, 10.0, 25.0)
```

**Parameters:**

- `x`: X euler angle for local rotation measured in degrees.
- `y`: Y euler angle for local rotation measured in degrees.
- `z`: Z euler angle for local rotation measured in degrees.

---

### `delete(): void` {#delete}

Delete local transform component.

```lua
entity.local_tarnsform:delete()
```
