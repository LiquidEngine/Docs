---
sidebarPosition: 300
---

# Transform

Transform API provides methods to access and modify **local transform** of entity.

Note that, world transform cannot be modified by entity because it is always autocalculated from local transform.

## Properties

### `position: Vector3` {#prop=position}

Local position of entity.

```lua
local position = entity.localTransform.position

entity.localTransform.position = Vector3.new(10.0, 2.5, 4.5)
```

### `scale: Vector3` {#props-scale}

Local scale of entity.

```lua
local scale = entity.localTransform.scale

entity.localTransform.scale = Vector3.new(2.0, 2.0, 2.0)
```

### `rotation: Quaternion` {#prop-rotation}

Local rotation of entity.

```lua
local rotation = entity.localTransform.rotation

entity.localTransform.rotation =
    Quaternion.fromEulerAngles(math.rad(20.0), math.rad(30.0), math.rad(40.0))
```

## Methods

### `delete(): void` {#method-delete}

Delete local transform component.

```lua
entity.localTransform:delete()
```
