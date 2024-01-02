---
sidebar_position: 300
---

# Quaternion

Quaternions are a set of complex numbers that can be used to represent spatial rotation. In Quoll, all properties and methods that require rotation, use quaternions. All quaternions must be in normalized form. Failing to do so will provide unexpected results.

## Properties

### `x: number` {#prop-x}

X component (imaginary) of Quaternion.

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
local x = q.x -- 0.350225

### `y: number` {#prop-y}

Y component (imaginary) of Quaternion.

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
local y = q.y -- 0.078362
```

### `z: number` {#prop-z}

Z component (imaginary) of Quaternion.

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
local z = q.z -- 0.416451
```

### `w: number` {#prop-w}

W component (real) of Quaternion.

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
local w = v.w -- 0.835327
```

## Methods

### `new(x: number, y: number, z: number, w: number): Quaternion` {#method-new}

Creates new Quaternion with provided values. 

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
```

**Properties:**

- `x`: X imaginary component
- `y`: Y imaginary component
- `z`: Z imaginary component
- `w`: W real component

**Returns:**

Quaternion based on provided values

---

### `fromEulerAngles(x: number, y: number, z: number): Quaternion` {#method-fromEulerAngles}

Creates new Quaternion from euler angles in XYZ order.

```lua
local q = Quaternion.fromEulerAngles(0.6108652, 0.4363323, 0.7853982)
```

**Properties:**

- `x`: X euler angle in radians
- `y`: Y euler angle in radians
- `z`: Z euler angle in radians

**Returns:**

Quaternion calculated from euler angles.

---

### `toEulerAngles(q: Quaternion): Vector3` {#method-toEulerAngles}

Returns euler angles in XYZ order as Vector3.

```lua
local q = Quaternion.new(0.350225, 0.078362, 0.416451, 0.835327)
local v = Quaternion.toEulerAngles(q)
```

**Properties:**

- `q`: Quaternion

**Returns:**

Euler angles in radians as Vector3 calculated in XYZ order from Quaternion 

