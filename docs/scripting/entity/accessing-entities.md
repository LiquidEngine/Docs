---
sidebar_position: 1
---

# Accessing entities

There are three ways to access entities from scripts.

## Accessing script's entity

All scripts are attached are attached to entities. If you want to access the entity that the script belongs to, you can access it by using the globally accessible `entity` object:

```lua
function start()
    name = entity.name:get()
end
```

## Querying entities

You can also query entities using the entity query (`entity_query`).

### `get_first_entity_by_name(name: string): Entity` {#get_first_entity_by_name}

Queries entities by name and retrieves the first found result:

```lua
found = entity_query.get_first_entity_by_name("Test")
```

**Parameters**

- `name`: Entity name to query. This parameter accepts a string.

**Returns:**

Entity object if an entity is found, `nil` otherwise.

## Spawning entities

You can also spawn entities using the entity spawner (`entity_spawner`).

### `spawn_empty(): Entity` {#spawn_empty}

Spawns empty entity. The spawned entity is automatically assigned a name and local position.

```lua
function start()
    my_entity = entity_spawner.spawn_empty()
end
```

**Returns:**

Entity object representing the newly spawned prefab.

### `spawn_prefab(prefab: PrefabAsset): Entity` {#spawn_prefab}

Spawns prefab to the scene.

```lua
prefab = input_vars.register('prefab', input_vars.types.AssetPrefab)

function start()
    my_entity = entity_spawner.spawn_prefab(prefab)
end
```

**Parameters:**

- `prefab`: Prefab asset.

**Returns:**

Entity object representing the **root** entity of newly spawned prefab.

### `spawn_sprite(prefab: TextureAsset): Entity` {#spawn_sprite}

Spawns prefab to the scene.

```lua
texture = input_vars.register('texture', input_vars.types.AssetTexture)

function start()
    my_entity = entity_spawner.spawn_prefab(texture)
end
```

**Parameters:**

- `texture`: Texture asset.

**Returns:**

Entity object representing the newly spawned sprite.
