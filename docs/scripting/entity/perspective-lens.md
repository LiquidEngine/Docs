---
sidebar_position: 500
---

# Perspective lens

Perspective lens API provides methods to access and modify perspective lens component.

## Reference

### `get_near(): number` {#get_near}

Get perspective near plane.

```lua
local near = entity.perspective_lens:get_near()
```

**Returns:**

Near plane value that is a positive number.

### `set_near(near: number): void` {#set_near}

Set perspective near plane.

```lua
entity.perspective_lens:set_near(0.01)
```

**Parameters:**

- `near`: Near plane value that is a positive number.

---

### `get_far(): number` {#get_far}

Get perspective far plane.

```lua
local far = entity.perspective_lens:get_far()
```

**Returns:**

Far plane value that is a positive number.

### `set_far(far: number): void` {#set_far}

Set perspective far plane.

```lua
entity.perspective_lens:set_far(1000.0)
```

**Parameters:**

- `far`: Far plane value that is a positive number.

---

### `get_sensor_size(): number, number` {#get_sensor_size}

Get camera sensor size.

```lua
local width, height = entity.perspective_lens:get_sensor_size()
```

**Returns:**

The function returns two values -- sensor size width and height values that are positive numbers and measured in mm.

### `set_sensor_size(width: number, height: number): void` {#set_sensor_size}

Set camera sensor size.

```lua
entity.perspective_lens:set_sensor_size(23.6, 15.6)
```

**Parameters:**

- `width`: Sensor width that is a positive number measured in mm.
- `height`: Sensor height that is a positive number measured in mm.

---

### `get_focal_length(): number` {#get_focal_length}

Get lens focal length.

```lua
local focal_length = entity.perspective_lens:get_focal_length()
```

**Returns:**

Focal length value that is a positive number and represented in mm.

### `set_focal_length(focal_length: number): number` {#set_focal_length}

Set lens focal length.

```lua
entity.perspective_lens:set_focal_length(23.0)
```

**Parameters:**

- `focal_length`: Focal length that is a positive number measured in mm.

---

### `get_aperture(): number` {#get_aperture}

Get lens aperture.

```lua
local aperture = entity.perspective_lens:get_aperture()
```

**Returns:**

Lens aperture represented in inverse of f-stops. Example: `1/2.2` f-stop is returned as `2.2`.

### `set_aperture(aperture: number): number` {#set_aperture}

Set lens aperture.

```lua
entity.perspective_lens:set_aperture(16.0)
```

**Parameters:**

- `aperture`: Aperture value defined as inverse of f-stops. Example, for `1/2.2` f-stop, set value as `2.2`.

---

### `get_shutter_speed(): number` {#get_shutter_speed}

Get camera shutter speed.

```lua
local shutter_speed = entity.perspective_lens:get_shutter_speed()
```

**Returns:**

Camera shutter speed represented in inverse of 1/s. Example: `1/2000 s` is returned as `2000`.

### `set_shutter_speed(shutter_speed: number): number` {#set_shutter_speed}

Set camera shutter speed.

```lua
entity.perspective_lens:set_shutter_speed(250.0)
```

**Parameters:**

- `shutter_speed`: Shutter speed defined as inverse of `1/s`. Example, for `1/2000 s`, set value as `2000`.

---

### `get_sensitivity(): number` {#get_sensitivity}

Get camera sensitivity (ISO).

```lua
local sensitivity = entity.perspective_lens:get_sensitivity()
```

**Returns:**

Camera sensitivity as positive number.

### `set_sensitivity(sensitivity: number): number` {#set_sensitivity}

Set camera sensitivity.

```lua
entity.perspective_lens:set_sensitivity(200)
```

**Parameters:**

- `sensitivity`: Sensitivity as positive number.

---

### `delete(): void` {#delete}

Delete perspective lens component.

```lua
entity.perspective_lens:delete()
```
