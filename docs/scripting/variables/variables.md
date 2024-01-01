---
sidebar_position: 5
---

# Variables

A lot of the times, we need a way to inject variables into scripts to access data within the engine. To accommodate for that, Quoll Engine provides a way to inject variables from editor directly into the script using Lua functions.

## Registering variables

You can register the variables using the provided `inputVars.register` function.

### `inputVars.register(name: string, type: InputVarType): T` {#method-inputVars-register}

This is the main method to register variables in scripts for injection.

```lua
local entitySpawner = game:get('EntitySpawner')
local rockPrefab = inputVars.register('rock', inputVars.types.AssetPrefab)

entitySpawner.spawnPrefab(rockPrefab)
```

**Parameters:**

- `name`: Variable name is a unique identifier to identify the variable. The name is stored in the scene file to be accessible from both the editor and runtime.
- `type`: Variable type represents what the script accepts. The type automatically determines what is returned from the variable.

**Returns:**

Value of the variable depending on the provided type and stored value.

:::caution Registration lifecycle

Make sure to register the variables only as a global variables. Registering variables anywhere else will fail to register the variables. Variables are intentionally registered **only** once during script load and the reference to the function is removed afterwards.

:::

## Variable types

### `inputVars.types.String` {#var-type-string}

```lua
local value = inputVars.register('test', inputVars.types.String)
```

**Returns:**

String value.

**UI:**

![String variable](./img/var-string.png)

### `inputVars.types.AssetPrefab` {#var-type-asset-prefab}

```lua
local value = inputVars.register('test', inputVars.types.AssetPrefab)
```

**Returns:**

Numeric internal ID representing prefab.

**UI:**

![Prefab variable](./img/var-prefab.png)

### `inputVars.types.AssetTexture` {#var-type-asset-texture}

```lua
local value = inputVars.register('test', inputVars.types.AssetTexture)
```

**Returns:**

Numeric internal ID representing texture.

**UI:**

![Texture variable](./img/var-texture.png)
