---
sidebar_position: 2
---

# Entity spawner

```lua
local entitySpawner = game:get('EntitySpawner')
```

Entity spawner service provides methods to spawn empty entities or entities from assets (e.g prefabs, sprites)

## Methods

### `spawnEntity(): Entity` {#method-spawnEntity}

Spawns empty entity. The spawned entity is automatically assigned a name and local position.

```lua
local entitySpawner = game:get('EntitySpawner')
local myEntity = entitySpawner:spawnEntity()
```

**Returns:**

Entity object representing the newly spawned prefab.

### `spawnPrefab(prefab: PrefabAsset): Entity` {#method-spawnPrefab}

Spawns prefab to the scene.

```lua
local prefab = inputVars.register('prefab', inputVars.types.AssetPrefab)

local entitySpawner = game:get('EntitySpawner')
local myEntity = entitySpawner:spawnPrefab(prefab)
```

**Parameters:**

- `prefab`: Prefab asset.

**Returns:**

Entity object representing the **root** entity of newly spawned prefab.

### `spawnSprite(prefab: TextureAsset): Entity` {#method-spawnSprite}

Spawns prefab to the scene.

```lua
local texture = inputVars.register('texture', inputVars.types.AssetTexture)

local entitySpawner = game:get('EntitySpawner')
local myEntity = entitySpawner:spawnPrefab(texture)
```

**Parameters:**

- `texture`: Texture asset.

**Returns:**

Entity object representing the newly spawned sprite.
