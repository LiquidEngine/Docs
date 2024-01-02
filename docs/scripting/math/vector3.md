---
sidebar_position: 200
---

# Vector3

All APIs provided by Quoll utilize Vector3 for to represent 3D points, directions, velocities etc.

## Properties

### `x: number` {#prop-x}

X component of Vector3.

```lua
local v = Vector3.new(25.0, 10.0, 35.0)
local x = v.x -- 25.0
```

### `y: number` {#prop-y}

Y component of Vector3.

```lua
local v = Vector3.new(25.0, 10.0, 35.0)
local y = v.y -- 10.0
```

### `z: number` {#prop-z}

Z component of Vector3.

```lua
local v = Vector3.new(25.0, 10.0, 35.0)
local z = v.z -- 35.0
```

## Methods

### `new(x: number, y: number, z: number): Vector3` {#method-new}

Creates new Vector3 with provided values:

```lua
local v = Vector3.new(25.0, 10.0, 35.0)
```
