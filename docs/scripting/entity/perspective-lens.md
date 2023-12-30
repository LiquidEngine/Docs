---
sidebar_position: 500
---

# Perspective lens

Perspective lens API provides methods to access and modify perspective lens component.

## Properties

### `near: number` {#prop-near}

Perspective near plane value.

```lua
local near = entity.perspectiveLens.near
entity.perspectiveLens.near = 0.01
```

### `far: number` {#prop-far}

Perspective far plane value.

```lua
local far = entity.perspectiveLens.far
entity.perspectiveLens.far = 1000.0
```

### `focalLength: number` {#prop-focalLength}

Lens focal length value represented in mm.

```lua
local focalLength = entity.perspectiveLens.focalLength
entity.perspectiveLens.focalLength = 23.0
```

### `aperture: number` {#prop-aperture}

Lens aperture represented in inverse of f-stops. Example: `1/2.2` f-stop is returned as `2.2`

```lua
local aperture = entity.perspectiveLens.aperture
entity.perspectiveLens.aperture = 16.0
```

### `shutterSpeed: number` {#prop-shutterSpeed}

Camera shutter speed represented in inverse of 1/s. Example: `1/2000 s` is returned as `2000`.

```lua
local shutterSpeed = entity.perspectiveLens.shutterSpeed
entity.perspectiveLens.shutterSpeed = 250.0
```

### `sensitivity: number` {#prop-sensitivity}

Camera sensitivity represented in ISO values, which are positive integers.

```lua
local sensitivity = entity.perspectiveLens.sensitivity
entity.perspectiveLens.sensitivity = 200
```

## Methods

### `getSensorSize(): number, number` {#method-getSensorSize}

Get camera sensor size.

```lua
local width, height = entity.perspectiveLens:getSensorSize()
```

**Returns:**

The function returns two values -- sensor size width and height values that are positive numbers and measured in mm.

### `setSensorSize(width: number, height: number): void` {#method-setSensorSize}

Set camera sensor size.

```lua
entity.perspectiveLens:setSensorSize(23.6, 15.6)
```

**Parameters:**

- `width`: Sensor width that is a positive number measured in mm.
- `height`: Sensor height that is a positive number measured in mm.

---

### `delete(): void` {#method-delete}

Delete perspective lens component.

```lua
entity.perspectiveLens:delete()
```
