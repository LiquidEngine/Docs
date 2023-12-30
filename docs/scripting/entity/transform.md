---
sidebarPosition: 300
---

# Transform

Transform API provides methods to access and modify **local transform** of entity.

Note that, world transform cannot be modified by entity because it is always autocalculated from local transform.

## Methods

### `getPosition(): number, number, number` {#method-getPosition}

Get local position of entity.

```lua
local x, y, z = entity.localTransform:getPosition()
```

**Returns:**

The function returns three values -- local x, y, and z coordinates of entity.

### `setPosition(x: number, y: number, z: number): void` {#method-setPosition}

Set local position of entity.

```lua
entity.localTransform:setPosition(10.0, 2.5, 4.5)
```

**Parameters:**

- `x`: Local x position measured in meters.
- `y`: Local y position measured in meters.
- `z`: Local z position measured in meters.

---

### `getScale(): number, number, number` {#method-getScale}

Get local scale of entity.

```lua
local x, y, z = entity.localTransform:getScale()
```

**Returns:**

The function returns three values -- local x, y, and z scale of entity.

### `setScale(x: number, y: number, z: number): void` {#method-setScale}

Set local scale of entity.

```lua
entity.localTransform:setScale(2.0, 2.0, 2.0)
```

**Parameters:**

- `x`: Local x scale
- `y`: Local y scale
- `z`: Local z scale

---

### `getRotation(): number, number, number` {#method-getRotation}

Get local rotation of entity.

```lua
local x, y, z = entity.localTransform:getRotation()
```

The function returns three values -- x, y, and z euler angles for local rotation measured in degrees.

### `setRotation(x: number, y: number, z: number): void` {#method-setRotation}

Set local rotation of entity in euler angles.

```lua
entity.localTransform:setRotation(45.0, 10.0, 25.0)
```

**Parameters:**

- `x`: X euler angle for local rotation measured in degrees.
- `y`: Y euler angle for local rotation measured in degrees.
- `z`: Z euler angle for local rotation measured in degrees.

---

### `delete(): void` {#method-delete}

Delete local transform component.

```lua
entity.localTransform:delete()
```
