---
sidebar_position: 2
---

# Entity spawner

```lua
local entity_spawner = game:get('EntitySpawner')
```

Entity spawner service provides methods to spawn empty entities or entities from assets (e.g prefabs, sprites)

## Reference

### `spawn_empty(): Entity` {#spawn_empty}

Spawns empty entity. The spawned entity is automatically assigned a name and local position.

```lua
local entity_spawner = game:get('EntitySpawner')
local my_entity = entity_spawner:spawn_empty()
```

**Returns:**

Entity object representing the newly spawned prefab.

### `spawn_prefab(prefab: PrefabAsset): Entity` {#spawn_prefab}

Spawns prefab to the scene.

```lua
local prefab = input_vars.register('prefab', input_vars.types.AssetPrefab)

local entity_spawner = game:get('EntitySpawner')
local my_entity = entity_spawner:spawn_prefab(prefab)
```

**Parameters:**

- `prefab`: Prefab asset.

**Returns:**

Entity object representing the **root** entity of newly spawned prefab.

### `spawn_sprite(prefab: TextureAsset): Entity` {#spawn_sprite}

Spawns prefab to the scene.

```lua
local texture = input_vars.register('texture', input_vars.types.AssetTexture)

local entity_spawner = game:get('EntitySpawner')
local my_entity = entity_spawner:spawn_prefab(texture)
```

**Parameters:**

- `texture`: Texture asset.

**Returns:**

Entity object representing the newly spawned sprite.
